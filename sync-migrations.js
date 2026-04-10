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

const appliedMigrations = [
  '20260330165441_20260330_init_auth_schema.js',
  '20260330165442_20260330_init_captures_schema.js',
  '20260330165443_20260330_init_daily_captures_schema.js',
  '20260330165444_20260330_init_planograma_schema.js',
  '20260330165445_20260330_init_catalogs_schema.js',
  '20260330165446_20260330_init_scoring_schema.js',
  '20260330165447_20260330_init_field_operations_schema.js',
  '20260331000000_v2_daily_captures_schema.js',
  '20260331000001_v3_add_scores_to_catalogs.js',
  '20260331231959_add_gps_to_captures.js',
  '20260401000000_v4_rename_planograma_to_planograms.js',
  '20260402130000_add_supervisor_id_to_users.js',
  '20260402141501_add_parent_id_to_catalogs.js',
  '20260402141502_create_daily_assignments.js',
  '20260402160000_update_assignments_to_weekly.js'
];

async function sync() {
  try {
    console.log('Creating knex_migrations table...');
    await db.schema.createTable('knex_migrations', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('batch');
      table.timestamp('migration_time');
    });

    await db.schema.createTable('knex_migrations_lock', (table) => {
      table.increments('index').primary();
      table.integer('is_locked');
    });
    await db('knex_migrations_lock').insert({ is_locked: 0 });

    console.log('Syncing migrations...');
    const inserts = appliedMigrations.map(name => ({
      name,
      batch: 1,
      migration_time: new Date()
    }));
    
    await db('knex_migrations').insert(inserts);
    console.log('Synchronization complete.');
    
  } catch (err) {
    console.error('Sync failed:', err.message);
  } finally {
    await db.destroy();
  }
}

sync();
