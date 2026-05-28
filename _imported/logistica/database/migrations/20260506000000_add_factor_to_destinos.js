exports.up = function(knex) {
  return knex.schema.alterTable('logistica_catalogo_destinos', function(table) {
    table.decimal('factor', 10, 4).defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('logistica_catalogo_destinos', function(table) {
    table.dropColumn('factor');
  });
};
