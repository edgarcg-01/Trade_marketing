/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('logistica_checklists', (table) => {
      // Agregar columna respuestas (jsonb) para almacenar las respuestas del checklist
      table.jsonb('respuestas');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('logistica_checklists', (table) => {
      table.dropColumn('respuestas');
    });
};
