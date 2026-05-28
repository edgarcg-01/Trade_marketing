/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01e_clean_users_related] Limpiando usuarios relacionados...');

  // Eliminar usuarios que tengan colaborador_id (usuarios creados para colaboradores)
  try {
    const deletedUsers = await knex('users').whereNotNull('colaborador_id').del();
    if (deletedUsers > 0) {
      console.log(`[01e_clean_users_related] Eliminados ${deletedUsers} usuarios con colaborador_id`);
    } else {
      console.log('[01e_clean_users_related] No hay usuarios con colaborador_id');
    }
  } catch (e) {
    console.log('[01e_clean_users_related] Error al eliminar usuarios:', e.message);
  }

  console.log('[01e_clean_users_related] Completado.');
};
