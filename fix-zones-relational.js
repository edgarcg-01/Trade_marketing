const knex = require('knex');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const config = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'trade_marketing',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  }
};

const db = knex(config);

async function fix() {
  try {
    console.log('1. Fetching zones from catalogs...');
    const catalogZones = await db('catalogs')
      .where({ catalog_id: 'zonas' })
      .select('id', 'value', 'orden');

    if (catalogZones.length === 0) {
      console.log('No zones found in catalogs. Maybe already moved?');
    } else {
      console.log(`Found ${catalogZones.length} zones. Inserting into 'zones' table...`);
      
      for (const cz of catalogZones) {
        // We use insert ignore or check existence
        const existing = await db('zones').where({ name: cz.value }).first();
        let zoneId;
        if (!existing) {
          const [inserted] = await db('zones').insert({
            name: cz.value,
            orden: cz.orden
          }).returning('id');
          zoneId = inserted.id;
          console.log(`Inserted zone: ${cz.value} (ID: ${zoneId})`);
        } else {
          zoneId = existing.id;
          console.log(`Zone already exists: ${cz.value} (ID: ${zoneId})`);
        }
      }
    }

    console.log('2. Mapping users to zones...');
    const zones = await db('zones').select('id', 'name');
    for (const zone of zones) {
      const updatedUsers = await db('users')
        .where({ zona: zone.name })
        .update({ zona_id: zone.id });
      console.log(`Updated ${updatedUsers} users for zone ${zone.name}`);
    }

    console.log('3. Mapping stores to zones...');
    for (const zone of zones) {
      const updatedStores = await db('stores')
        .where({ zona: zone.name })
        .update({ zona_id: zone.id });
      console.log(`Updated ${updatedStores} stores for zone ${zone.name}`);
    }

    console.log('4. Cleaning up catalogs...');
    await db('catalogs').where({ catalog_id: 'zonas' }).delete();
    console.log('Cleaned up zones from catalogs.');

    console.log('Relational sync complete!');
  } catch (err) {
    console.error('Fix failed:', err.message);
  } finally {
    await db.destroy();
  }
}

fix();
