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
  },
  migrations: {
    directory: path.join(__dirname, 'database', 'migrations'),
    tableName: 'knex_migrations'
  }
};

const db = knex(config);

const missing = [
  '20260409174829_refactor_zones.js',
  '20260410151048_add_cloudinary_public_id.js'
];

async function force() {
  try {
    for (const name of missing) {
      console.log(`Applying ${name}...`);
      try {
        await db.migrate.up({ name });
        console.log(`Successfully applied ${name}`);
      } catch (err) {
        console.error(`Failed to apply ${name}:`, err.message);
        if (err.message.includes('already exists')) {
            console.log(`Migration ${name} seems partially applied, inserting into tracking table...`);
            await db('knex_migrations').insert({ name, batch: 99, migration_time: new Date() });
        }
      }
    }
  } catch (err) {
    console.error('Force failed:', err.message);
  } finally {
    await db.destroy();
  }
}

force();
