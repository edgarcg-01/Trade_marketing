const knexConfig = require('./database/knexfile.js').development;
const knex = require('knex')(knexConfig);

async function checkColumn() {
  try {
    // Check if ultimo_acceso column exists in users table
    const result = await knex.raw(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'users' AND column_name = 'ultimo_acceso'
    `);
    
    console.log('Column check result:', result.rows);
    
    if (result.rows.length === 0) {
      console.log('Column ultimo_acceso does not exist in users table');
      // Let's try to add it manually
      console.log('Attempting to add column manually...');
      await knex.schema.alterTable('users', (table) => {
        table.timestamp('ultimo_acceso').nullable();
      });
      console.log('Column ultimo_acceso added successfully');
    } else {
      console.log('Column ultimo_acceso exists:', result.rows[0]);
    }
  } catch (error) {
    console.error('Error checking column:', error);
  } finally {
    await knex.destroy();
  }
}

checkColumn();