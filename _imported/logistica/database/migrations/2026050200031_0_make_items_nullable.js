/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('logistica_checklists', (table) => {
      // Hacer la columna items nullable ya que ahora usamos respuestas
      table.jsonb('items').nullable().alter();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('logistica_checklists', (table) => {
      table.jsonb('items').notNull().alter();
    });
};
