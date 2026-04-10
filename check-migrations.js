const knex = require('knex');
const path = require('path');
const fs = require('fs');
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

async function check() {
  try {
    const dir = path.join(__dirname, 'database', 'migrations');
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.js'))
      .sort();
    
    const dbMigrations = await db('knex_migrations').select('name').orderBy('id');
    const dbNames = dbMigrations.map(m => m.name);
    
    console.log('Files on disk:', files.length);
    console.log('Migrations in DB:', dbNames.length);
    
    const missing = files.filter((f) => !dbNames.includes(f));
    console.log('Missing migrations:', missing);
  } catch (err) {
    console.error('Check failed:', err.message);
  } finally {
    await db.destroy();
  }
}

check();
