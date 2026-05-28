/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('logistica_embarques', (table) => {
    // Agregar columnas para fechas de salida y llegada
    table.timestamp('fecha_salida').nullable();
    table.timestamp('fecha_llegada').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_embarques', (table) => {
    table.dropColumn('fecha_salida');
    table.dropColumn('fecha_llegada');
  });
};
