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
  },
  seeds: {
    directory: path.join(__dirname, 'database', 'seeds'),
  }
};

const db = knex(config);

async function resetAndSeed() {
  try {
    console.log('1. Dropping and recreating public schema...');
    await db.raw('DROP SCHEMA public CASCADE');
    await db.raw('CREATE SCHEMA public');
    console.log('Schema cleared.');

    console.log('2. Running all migrations...');
    const [batch, migrations] = await db.migrate.latest();
    if (migrations.length === 0) {
      console.log('No migrations run.');
    } else {
      console.log(`Ran ${migrations.length} migrations in batch ${batch}:`);
      console.log(migrations);
    }

    console.log('3. Running seeds...');
    const [seedFiles] = await db.seed.run();
    if (seedFiles.length === 0) {
      console.log('No seed files run.');
    } else {
      console.log(`Ran ${seedFiles.length} seed files:`);
      console.log(seedFiles);
    }

    console.log('Database reset and seeded successfully!');
  } catch (err) {
    console.error('Operation failed:', err.message);
  } finally {
    await db.destroy();
  }
}

resetAndSeed();
