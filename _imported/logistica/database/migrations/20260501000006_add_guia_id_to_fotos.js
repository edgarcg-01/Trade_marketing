/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    // Agregar columna guia_id si no existe
    table.uuid('guia_id').references('id').inTable('logistica_guias').onDelete('CASCADE').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    table.dropColumn('guia_id');
  });
};
