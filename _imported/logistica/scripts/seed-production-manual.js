const knex = require('knex');

if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is required.');
  process.exit(1);
}

const knexfile = require('../database/knexfile.js');

const config = {
  ...knexfile.production,
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  }
};

const db = knex(config);

async function runSeeds() {
  console.log('Starting manual production seeding...');
  try {
    const [log] = await db.seed.run();
    console.log('Seeds completed successfully:');
    console.log(log.join('\n'));
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await db.destroy();
  }
}

runSeeds();
