/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    // Agregar columna chofer_id si no existe
    table.uuid('chofer_id').references('id').inTable('users').onDelete('SET NULL').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    table.dropColumn('chofer_id');
  });
};
