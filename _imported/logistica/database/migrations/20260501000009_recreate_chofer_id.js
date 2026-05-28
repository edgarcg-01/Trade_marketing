/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // Verificar si la columna chofer_id existe
  const hasChoferId = await knex.schema.hasColumn('logistica_fotos_entrega', 'chofer_id');
  
  if (!hasChoferId) {
    await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
      table.uuid('chofer_id').references('id').inTable('users').onDelete('SET NULL').nullable();
    });
  }
  
  // Verificar si la columna subido_por existe y eliminarla
  const hasSubidoPor = await knex.schema.hasColumn('logistica_fotos_entrega', 'subido_por');
  
  if (hasSubidoPor) {
    await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
      table.dropColumn('subido_por');
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  // Recrear subido_por
  const hasSubidoPor = await knex.schema.hasColumn('logistica_fotos_entrega', 'subido_por');
  
  if (!hasSubidoPor) {
    await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
      table.uuid('subido_por').references('id').inTable('users').onDelete('SET NULL').nullable();
    });
  }
  
  // Eliminar chofer_id
  const hasChoferId = await knex.schema.hasColumn('logistica_fotos_entrega', 'chofer_id');
  
  if (hasChoferId) {
    await knex.schema.alterTable('logistica_fotos_entrega', (table) => {
      table.dropColumn('chofer_id');
    });
  }
};
