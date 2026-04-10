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

async function run() {
  try {
    console.log('Running missing migrations...');
    const [batch, names] = await db.migrate.latest();
    if (names.length === 0) {
      console.log('No new migrations to run.');
    } else {
      console.log(`Ran ${names.length} migrations in batch ${batch}:`);
      console.log(names);
    }
  } catch (err) {
    console.error('Migration failed:', err.message);
  } finally {
    await db.destroy();
  }
}

run();
