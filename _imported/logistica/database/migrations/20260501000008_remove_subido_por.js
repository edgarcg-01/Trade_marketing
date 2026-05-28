/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    // Eliminar columna duplicada (usamos chofer_id como el subidor de la foto)
    table.dropColumn('subido_por');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    // Recrear columna subido_por
    table.uuid('subido_por').references('id').inTable('users').onDelete('SET NULL').nullable();
  });
};
