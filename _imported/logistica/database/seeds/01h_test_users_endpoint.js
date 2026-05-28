/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01h_test_users_endpoint] Probando endpoint de usuarios...');

  const users = await knex('users')
    .select('id', 'username', 'nombre', 'email', 'role_name', 'roles', 'activo', 'ultimo_acceso', 'created_at')
    .orderBy('created_at', 'desc');
  
  console.log(`[01h_test_users_endpoint] Total usuarios: ${users.length}`);
  console.log('[01h_test_users_endpoint] Datos que debería devolver el endpoint:');
  
  for (const user of users) {
    console.log(JSON.stringify(user, null, 2));
  }

  console.log('[01h_test_users_endpoint] Prueba completada.');
};
