/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('logistica_embarques', (table) => {
    // Agregar operador_id si no existe
    table.uuid('operador_id').references('id').inTable('logistica_colaboradores').onDelete('SET NULL').nullable();
    
    // Agregar destino_id y destino_texto si no existen
    table.uuid('destino_id').references('id').inTable('logistica_catalogo_destinos').onDelete('SET NULL').nullable();
    table.string('destino_texto').nullable();
    
    // Agregar montos para KPIs
    table.decimal('monto_carga', 12, 2).defaultTo(0);
    table.decimal('monto_descarga', 12, 2).defaultTo(0);
    table.decimal('monto_maniobra', 12, 2).defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_embarques', (table) => {
    table.dropColumn('monto_maniobra');
    table.dropColumn('monto_descarga');
    table.dropColumn('monto_carga');
    table.dropColumn('destino_texto');
    table.dropColumn('destino_id');
    table.dropColumn('operador_id');
  });
};
