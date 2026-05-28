const fs = require('fs');
const path = require('path');
const knex = require('knex');
const config = require('./knexfile.js');

const env = process.env.NODE_ENV || 'development';
const db = knex(config[env]);

async function markMigrations() {
  try {
    // Leer todas las migraciones del directorio
    const migrationsDir = path.join(__dirname, 'migrations');
    const files = fs.readdirSync(migrationsDir)
      .filter(f => f.endsWith('.js'))
      .sort();
    
    console.log(`Total migraciones en directorio: ${files.length}`);
    
    // Ver cuáles ya están registradas
    const existing = await db('knex_migrations').select('name');
    const existingNames = new Set(existing.map(r => r.name));
    
    console.log(`Migraciones registradas: ${existingNames.size}`);
    
    // Encontrar las que faltan
    const missing = files.filter(f => !existingNames.has(f));
    
    if (missing.length === 0) {
      console.log('Todas las migraciones están registradas.');
      return;
    }
    
    console.log(`\nMarcando ${missing.length} migraciones como ejecutadas:`);
    
    for (const name of missing) {
      await db('knex_migrations').insert({
        name: name,
        batch: 1,
        migration_time: new Date()
      });
      console.log(`  ✓ ${name}`);
    }
    
    console.log('\nListo. Verifica con: npx knex migrate:status --knexfile database/knexfile.js');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await db.destroy();
  }
}

markMigrations();
