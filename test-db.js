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

async function test() {
  try {
    const tables = await db.raw("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    const names = tables.rows.map(t => t.table_name);
    console.log('Tables found:', names);
    
    if (names.includes('knex_migrations')) {
      const migrations = await db('knex_migrations').select('*');
      console.log('Migrations in table:', migrations.map(m => m.name));
    } else {
      console.log('knex_migrations table NOT found');
    }

    if (names.includes('knex_migrations_lock')) {
       const lock = await db('knex_migrations_lock').select('*');
       console.log('Migration lock:', lock);
    }
    
  } catch (err) {
    console.error('Test failed:', err.message);
  } finally {
    await db.destroy();
  }
}

test();
