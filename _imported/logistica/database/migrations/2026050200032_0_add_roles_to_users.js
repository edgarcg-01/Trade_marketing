/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Agregar campo roles como array de texto
  await knex.schema.alterTable('users', (table) => {
    table.specificType('roles', 'text[]').defaultTo('{}');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('users', (table) => {
    table.dropColumn('roles');
  });
};
