/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const hasFechaSalida = await knex.schema.hasColumn('logistica_guias', 'fecha_salida');
  const hasFechaLlegada = await knex.schema.hasColumn('logistica_guias', 'fecha_llegada');
  const hasViaticos = await knex.schema.hasColumn('logistica_guias', 'viaticos');

  await knex.schema.alterTable('logistica_guias', (table) => {
    // Agregar columnas de fecha para compatibilidad con seeds y reportes
    if (!hasFechaSalida) {
      table.timestamp('fecha_salida').nullable();
    }
    if (!hasFechaLlegada) {
      table.timestamp('fecha_llegada').nullable();
    }
    // Agregar viaticos como decimal si es necesario (el seed lo usa)
    if (!hasViaticos) {
      table.decimal('viaticos', 12, 2).defaultTo(0);
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_guias', (table) => {
    table.dropColumn('viaticos');
    table.dropColumn('fecha_llegada');
    table.dropColumn('fecha_salida');
  });
};
