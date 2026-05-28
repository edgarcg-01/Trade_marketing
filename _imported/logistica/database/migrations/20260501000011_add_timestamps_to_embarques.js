/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Agregar columnas de fecha/hora completas a embarques
  const hasFechaHoraCreacion = await knex.schema.hasColumn('logistica_embarques', 'fecha_hora_creacion');
  const hasFechaHoraSalida = await knex.schema.hasColumn('logistica_embarques', 'fecha_hora_salida');
  const hasFechaHoraLlegada = await knex.schema.hasColumn('logistica_embarques', 'fecha_hora_llegada');
  const hasFechaHoraCompletado = await knex.schema.hasColumn('logistica_embarques', 'fecha_hora_completado');

  await knex.schema.alterTable('logistica_embarques', (table) => {
    if (!hasFechaHoraCreacion) {
      table.timestamp('fecha_hora_creacion').defaultTo(knex.fn.now());
    }
    if (!hasFechaHoraSalida) {
      table.timestamp('fecha_hora_salida').nullable();
    }
    if (!hasFechaHoraLlegada) {
      table.timestamp('fecha_hora_llegada').nullable();
    }
    if (!hasFechaHoraCompletado) {
      table.timestamp('fecha_hora_completado').nullable();
    }
  });

  // Agregar historial de cambios de estado
  const hasHistorialTable = await knex.schema.hasTable('logistica_embarque_historial');
  if (!hasHistorialTable) {
    await knex.schema.createTable('logistica_embarque_historial', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('embarque_id').references('id').inTable('logistica_embarques').onDelete('CASCADE');
      table.string('estado_anterior', 50);
      table.string('estado_nuevo', 50).notNullable();
      table.timestamp('fecha_hora').defaultTo(knex.fn.now());
      table.uuid('usuario_id').references('id').inTable('users');
      table.text('observaciones');
      
      table.index('embarque_id');
      table.index('fecha_hora');
    });
  }

  // Agregar fecha_hora a checklists
  const hasChecklistFechaHora = await knex.schema.hasColumn('logistica_checklists', 'fecha_hora_completado');
  await knex.schema.alterTable('logistica_checklists', (table) => {
    if (!hasChecklistFechaHora) {
      table.timestamp('fecha_hora_completado').nullable();
    }
  });

  // Agregar fecha_hora a fotos
  const hasFotosFechaHora = await knex.schema.hasColumn('logistica_fotos_entrega', 'fecha_hora_subida');
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    if (!hasFotosFechaHora) {
      table.timestamp('fecha_hora_subida').defaultTo(knex.fn.now());
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_embarques', (table) => {
    table.dropColumnIfExists('fecha_hora_creacion');
    table.dropColumnIfExists('fecha_hora_salida');
    table.dropColumnIfExists('fecha_hora_llegada');
    table.dropColumnIfExists('fecha_hora_completado');
  });

  await knex.schema.dropTableIfExists('logistica_embarque_historial');

  await knex.schema.alterTable('logistica_checklists', (table) => {
    table.dropColumnIfExists('fecha_hora_completado');
  });

  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    table.dropColumnIfExists('fecha_hora_subida');
  });
};
