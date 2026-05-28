/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  console.log('[01j_create_users_for_choferes] Creando usuarios para choferes...');

  const bcrypt = require('bcryptjs');

  // Buscar todos los colaboradores que tengan 'chofer' en sus roles
  const choferes = await knex('logistica_colaboradores')
    .select('id', 'nombre', 'roles', 'estado', 'nss', 'telefono', 'user_id')
    .whereRaw("'chofer' = ANY(roles)");

  console.log(`[01j_create_users_for_choferes] Total choferes encontrados: ${choferes.length}`);

  let creados = 0;
  let actualizados = 0;

  for (const chofer of choferes) {
    // Generar username: primer nombre + primer apellido
    const nombreParts = chofer.nombre.toLowerCase().split(' ');
    const primerNombre = nombreParts[0];
    const primerApellido = nombreParts[nombreParts.length - 1];
    const username = `${primerNombre}_${primerApellido}`;

    // Roles array para el usuario
    const rolesArray = Array.isArray(chofer.roles) 
      ? chofer.roles 
      : (typeof chofer.roles === 'string' 
          ? chofer.roles.replace(/[{}]/g, '').split(',').filter(r => r) 
          : []);

    // Contraseña por defecto (hasheada)
    const passwordHash = await bcrypt.hash('123456', 10);

    if (chofer.user_id) {
      // Ya tiene usuario vinculado, actualizar
      const existingUser = await knex('users').where({ id: chofer.user_id }).first();
      
      if (existingUser) {
        await knex('users')
          .where({ id: chofer.user_id })
          .update({
            username,
            nombre: chofer.nombre,
            role_name: 'chofer',
            roles: rolesArray,
            activo: chofer.estado === 'activo',
            password_hash: existingUser.password_hash || passwordHash
          });
        console.log(`[01j_create_users_for_choferes] Usuario actualizado: ${username}`);
        actualizados++;
      } else {
        // El user_id no existe, crear nuevo usuario y actualizar el colaborador
        const [newUser] = await knex('users')
          .insert({
            username,
            password_hash: passwordHash,
            nombre: chofer.nombre,
            email: null,
            role_name: 'chofer',
            roles: rolesArray,
            activo: chofer.estado === 'activo',
            created_at: new Date()
          })
          .returning('id');

        await knex('logistica_colaboradores')
          .where({ id: chofer.id })
          .update({ user_id: newUser.id });

        console.log(`[01j_create_users_for_choferes] Usuario creado y vinculado: ${username} (ID: ${newUser.id})`);
        creados++;
      }
    } else {
      // No tiene usuario vinculado, verificar si existe por username
      const existingUser = await knex('users').where({ username }).first();

      if (existingUser) {
        // Actualizar usuario existente
        await knex('users')
          .where({ id: existingUser.id })
          .update({
            nombre: chofer.nombre,
            role_name: 'chofer',
            roles: rolesArray,
            activo: chofer.estado === 'activo'
          });

        // Vincular colaborador con usuario existente
        await knex('logistica_colaboradores')
          .where({ id: chofer.id })
          .update({ user_id: existingUser.id });

        console.log(`[01j_create_users_for_choferes] Usuario existente vinculado: ${username}`);
        actualizados++;
      } else {
        // Crear nuevo usuario
        const [newUser] = await knex('users')
          .insert({
            username,
            password_hash: passwordHash,
            nombre: chofer.nombre,
            email: null,
            role_name: 'chofer',
            roles: rolesArray,
            activo: chofer.estado === 'activo',
            created_at: new Date()
          })
          .returning('id');

        // Vincular colaborador con nuevo usuario
        await knex('logistica_colaboradores')
          .where({ id: chofer.id })
          .update({ user_id: newUser.id });

        console.log(`[01j_create_users_for_choferes] Usuario creado y vinculado: ${username} (ID: ${newUser.id})`);
        creados++;
      }
    }
  }

  console.log(`[01j_create_users_for_choferes] Completado. Creados: ${creados}, Actualizados: ${actualizados}`);
};
