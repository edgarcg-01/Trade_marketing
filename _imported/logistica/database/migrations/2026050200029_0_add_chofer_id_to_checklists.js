/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('logistica_checklists', (table) => {
      // Agregar columna chofer_id
      table.uuid('chofer_id').references('id').inTable('users').nullable();
      table.index('chofer_id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('logistica_checklists', (table) => {
      table.dropColumn('chofer_id');
    });
};
