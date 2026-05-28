const path = require('path');
const knex = require('knex');
const fs = require('fs');

// Ensure we have a DATABASE_URL
if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is required.');
  console.log('Example: $env:DATABASE_URL="postgresql://user:pass@host:port/db"');
  process.exit(1);
}

const knexfile = require('../database/knexfile.js');

// Override production connection with DATABASE_URL for manual runs
const config = {
  ...knexfile.production,
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  }
};

const db = knex(config);

async function runMigrations() {
  console.log('Starting manual production migrations...');
  try {
    const [batchNo, log] = await db.migrate.latest();
    if (log.length === 0) {
      console.log('Already up to date.');
    } else {
      console.log(`Batch ${batchNo} run: ${log.length} migrations`);
      console.log(log.join('\n'));
    }
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await db.destroy();
  }
}

runMigrations();
