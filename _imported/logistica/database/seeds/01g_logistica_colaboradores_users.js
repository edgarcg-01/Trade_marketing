/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Relacionar colaboradores con usuarios existentes por nombre
  const colaboradores = await knex('logistica_colaboradores').select('id', 'nombre', 'user_id');
  const users = await knex('users').select('id', 'nombre', 'role_name');

  // Filtrar usuarios que pueden ser colaboradores (no superadmin ni supervisor)
  const colaboradorUsers = users.filter(u => 
    u.role_name === 'colaborador'
  );

  console.log(`[01g_logistica_colaboradores_users] Found ${colaboradores.length} colaboradores and ${colaboradorUsers.length} user collaborators`);

  let updatedCount = 0;
  
  // Mapeo manual de colaboradores a usuarios (para pruebas)
  const manualMapping = {
    'JUAN PEREZ GARCIA': 'joaquin_hurtado',
    'PEDRO LOPEZ MENDOZA': 'victorino_urbano',
    'CARLOS SANCHEZ RODRIGUEZ': 'mariano_martinez'
  };
  
  for (const colaborador of colaboradores) {
    // Si ya tiene user_id, saltar
    if (colaborador.user_id) {
      console.log(`[01g_logistica_colaboradores_users] Colaborador "${colaborador.nombre}" already has user_id, skipping`);
      continue;
    }
    
    // Primero intentar mapeo manual
    const manualUsername = manualMapping[colaborador.nombre];
    if (manualUsername) {
      const user = colaboradorUsers.find(u => u.username === manualUsername);
      if (user) {
        await knex('logistica_colaboradores')
          .where('id', colaborador.id)
          .update({ user_id: user.id });
        updatedCount++;
        console.log(`[01g_logistica_colaboradores_users] Linked colaborador "${colaborador.nombre}" with user "${user.username}" (manual mapping)`);
        continue;
      }
    }
    
    // Si no hay mapeo manual, buscar por nombre exacto
    const matchingUser = colaboradorUsers.find(u => u.nombre === colaborador.nombre);

    if (matchingUser) {
      await knex('logistica_colaboradores')
        .where('id', colaborador.id)
        .update({ user_id: matchingUser.id });
      updatedCount++;
      console.log(`[01g_logistica_colaboradores_users] Linked colaborador "${colaborador.nombre}" with user "${matchingUser.username}"`);
    }
  }

  console.log(`[01g_logistica_colaboradores_users] Updated ${updatedCount} colaboradores with user_id`);
};
