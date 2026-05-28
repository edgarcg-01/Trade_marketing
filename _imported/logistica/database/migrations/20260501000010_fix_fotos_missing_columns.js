/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Verificar y agregar columnas faltantes a logistica_fotos_entrega
  const hasColumnTipo = await knex.schema.hasColumn('logistica_fotos_entrega', 'tipo');
  const hasColumnMetadata = await knex.schema.hasColumn('logistica_fotos_entrega', 'metadata');
  const hasColumnGuiaId = await knex.schema.hasColumn('logistica_fotos_entrega', 'guia_id');
  const hasColumnChoferId = await knex.schema.hasColumn('logistica_fotos_entrega', 'chofer_id');

  await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
    if (!hasColumnTipo) {
      table.string('tipo', 50).defaultTo('general');
      table.index('tipo');
    }
    
    if (!hasColumnMetadata) {
      table.jsonb('metadata');
    }
    
    if (!hasColumnGuiaId) {
      table.uuid('guia_id').references('id').inTable('logistica_guias').onDelete('SET NULL').nullable();
      table.index('guia_id');
    }
    
    if (!hasColumnChoferId) {
      table.uuid('chofer_id').references('id').inTable('users').onDelete('SET NULL').nullable();
      table.index('chofer_id');
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  // No revertir para evitar pérdida de datos
};
