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

async function check() {
  try {
    const hasTable = await db.schema.hasTable('zones');
    console.log('Has zones table:', hasTable);
    
    if (hasTable) {
        const count = await db('zones').count('id as cnt').first();
        console.log('Zones count:', count.cnt);
    }
  } catch (err) {
    console.error('Check failed:', err.message);
  } finally {
    await db.destroy();
  }
}

check();
