/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Password hash para "Megadulces2024" (mismo que otros usuarios de prueba)
  const passwordHash = "$2b$10$wK7.zMvXCVu03e./1wvhk.3O9ngx4YGhbApMqphMyC1qiDpsusyNK";

  // Choferes de logística - formato: primer_nombre_primer_apellido
  const choferUsers = [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      username: "juan_perez",
      password_hash: passwordHash,
      nombre: "JUAN PEREZ GARCIA",
      zona: "NACIONAL",
      role_name: "chofer",
      activo: true,
      created_at: new Date().toISOString(),
      supervisor_id: null
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440002",
      username: "pedro_lopez",
      password_hash: passwordHash,
      nombre: "PEDRO LOPEZ MENDOZA",
      zona: "NACIONAL",
      role_name: "chofer",
      activo: true,
      created_at: new Date().toISOString(),
      supervisor_id: null
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440003",
      username: "carlos_sanchez",
      password_hash: passwordHash,
      nombre: "CARLOS SANCHEZ RODRIGUEZ",
      zona: "NACIONAL",
      role_name: "chofer",
      activo: true,
      created_at: new Date().toISOString(),
      supervisor_id: null
    }
  ];

  // Verificar usuarios existentes
  const existingUsers = await knex('users').select('username');
  const existingUsernames = existingUsers.map(u => u.username);

  // Insertar solo usuarios que no existen
  const usersToInsert = choferUsers.filter(u => !existingUsernames.includes(u.username));

  if (usersToInsert.length > 0) {
    await knex('users').insert(usersToInsert);
    console.log(`[01h_chofer_users] Inserted ${usersToInsert.length} chofer users.`);
  } else {
    console.log('[01h_chofer_users] All chofer users already exist, skipping.');
  }

  // Vincular usuarios con colaboradores
  const colaboradores = await knex('logistica_colaboradores')
    .select('id', 'nombre', 'user_id')
    .whereIn('nombre', choferUsers.map(u => u.nombre));

  for (const colaborador of colaboradores) {
    const user = choferUsers.find(u => u.nombre === colaborador.nombre);
    if (user && !colaborador.user_id) {
      await knex('logistica_colaboradores')
        .where('id', colaborador.id)
        .update({ user_id: user.id });
      console.log(`[01h_chofer_users] Linked user ${user.username} to colaborador ${colaborador.nombre}`);
    }
  }
};
