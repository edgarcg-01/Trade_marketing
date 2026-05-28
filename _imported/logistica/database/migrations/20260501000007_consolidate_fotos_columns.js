/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    // 1. Eliminar columna duplicada (subido_por ya cumple esta función)
    table.dropColumn('chofer_id');
    
    // 2. Agregar columna tipo para distinguir entre 'entrega_firmada', 'ine_receptor', etc.
    table.string('tipo', 50).defaultTo('general');
    
    // 3. Agregar columna metadata para guardar datos GPS y otros metadatos
    table.jsonb('metadata');
    
    // 4. Índices para búsquedas eficientes
    table.index('tipo');
    table.index('guia_id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    // Revertir cambios
    table.dropIndex('tipo');
    table.dropIndex('guia_id');
    table.dropColumn('tipo');
    table.dropColumn('metadata');
    
    // Recrear columna chofer_id (aunque es duplicada)
    table.uuid('chofer_id').references('id').inTable('users').onDelete('SET NULL').nullable();
  });
};
