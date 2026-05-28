/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01g_check_users] Verificando usuarios en tabla users...');

  const users = await knex('users').select('id', 'username', 'nombre', 'role_name', 'roles', 'activo');
  
  console.log(`[01g_check_users] Total usuarios: ${users.length}`);
  
  for (const user of users) {
    console.log(`- ${user.username} (${user.nombre}) - Rol: ${user.role_name} - Roles: ${JSON.stringify(user.roles)} - Activo: ${user.activo}`);
  }

  console.log('[01g_check_users] Verificación completada.');
};
