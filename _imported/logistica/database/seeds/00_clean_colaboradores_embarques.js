/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[00_clean_colaboradores_embarques] Iniciando limpieza...');

  // Eliminar registros relacionados primero (por foreign keys)
  try { await knex('logistica_guias').del(); } catch(e) { console.log('Tabla logistica_guias no existe o ya vacía'); }
  try { await knex('logistica_embarques').del(); } catch(e) { console.log('Tabla logistica_embarques no existe o ya vacía'); }
  try { await knex('logistica_colaboradores').del(); } catch(e) { console.log('Tabla logistica_colaboradores no existe o ya vacía'); }
  
  // También eliminar users relacionados si existen
  try { await knex('users').whereNotNull('colaborador_id').del(); } catch(e) { console.log('No se pudieron eliminar users relacionados'); }

  console.log('[00_clean_colaboradores_embarques] Limpieza completada.');
};
