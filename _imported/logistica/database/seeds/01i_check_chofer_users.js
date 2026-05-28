/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01i_check_chofer_users] Verificando usuarios con role_name=chofer...');

  const choferUsers = await knex('users')
    .select('id', 'username', 'nombre', 'role_name', 'roles', 'activo')
    .where('role_name', 'chofer');
  
  console.log(`[01i_check_chofer_users] Total usuarios con role_name=chofer: ${choferUsers.length}`);
  
  if (choferUsers.length === 0) {
    console.log('[01i_check_chofer_users] No hay usuarios con role_name=chofer');
    console.log('[01i_check_chofer_users] Todos los usuarios en la tabla users:');
    const allUsers = await knex('users').select('username', 'role_name', 'roles');
    for (const user of allUsers) {
      console.log(`- ${user.username} - role_name: ${user.role_name} - roles: ${JSON.stringify(user.roles)}`);
    }
  } else {
    for (const user of choferUsers) {
      console.log(`- ${user.username} (${user.nombre}) - role_name: ${user.role_name} - roles: ${JSON.stringify(user.roles)} - Activo: ${user.activo}`);
    }
  }

  console.log('[01i_check_chofer_users] Verificación completada.');
};
