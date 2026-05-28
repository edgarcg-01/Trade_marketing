const knex = require('knex');
const config = require('./knexfile.js');

const env = process.env.NODE_ENV || 'development';
const db = knex(config[env]);

const missingMigrations = [
  '20260420153000_init_logistics_schema.js',
  '20260424172000_add_detalles_tables.js',
  '20260427000000_add_checklists_and_fotos.js',
  '20260429140000_load_products_from_json_updated.js',
  '20260429170000_add_new_brands_and_products.js',
  '20260429180000_add_products_from_json.js',
  '20260505000000_add_offline_sync_fields.js'
];

async function fixMigrations() {
  try {
    console.log('Eliminando registros de migraciones faltantes...');
    
    for (const name of missingMigrations) {
      const deleted = await db('knex_migrations')
        .where('name', name)
        .del();
      
      if (deleted > 0) {
        console.log(`✓ Eliminado: ${name}`);
      } else {
        console.log(`- No encontrado: ${name}`);
      }
    }
    
    console.log('\nListo. Ahora ejecuta: npm run migrate:latest');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await db.destroy();
  }
}

fixMigrations();
