/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01d_remove_specific_colaboradores] Eliminando colaboradores y usuarios específicos...');

  // Colaboradores antiguos a eliminar (no están en la lista real)
  const colaboradoresAEliminar = [
    'MIGUEL ANGEL HERNANDEZ',
    'JOSE LUIS GONZALEZ',
    'FRANCISCO JIMENEZ CRUZ',
    'RAUL MORALES TORRES',
    'CARLOS SANCHEZ RODRIGUEZ'
  ];

  // Usuarios de prueba a eliminar
  const usuariosAEliminar = [
    'pedro_lopez',
    'carlos_sanchez',
    'juan_perez'
  ];

  // Eliminar colaboradores específicos
  for (const nombre of colaboradoresAEliminar) {
    try {
      const deleted = await knex('logistica_colaboradores').where({ nombre }).del();
      if (deleted > 0) {
        console.log(`[01d_remove_specific_colaboradores] Eliminado colaborador: ${nombre}`);
      }
    } catch (e) {
      console.log(`[01d_remove_specific_colaboradores] Error al eliminar colaborador ${nombre}:`, e.message);
    }
  }

  // Eliminar usuarios de prueba
  for (const username of usuariosAEliminar) {
    try {
      const deleted = await knex('users').where({ username }).del();
      if (deleted > 0) {
        console.log(`[01d_remove_specific_colaboradores] Eliminado usuario: ${username}`);
      }
    } catch (e) {
      console.log(`[01d_remove_specific_colaboradores] Error al eliminar usuario ${username}:`, e.message);
    }
  }

  console.log('[01d_remove_specific_colaboradores] Completado.');
};
