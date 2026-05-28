const { Knex } = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = function(knex) {
  return knex.schema.alterTable('logistica_unidades', (table) => {
    table.string('tipo', 50).defaultTo('camion');
  });
};

/**
 * @param {Knex} knex
 */
exports.down = function(knex) {
  return knex.schema.alterTable('logistica_unidades', (table) => {
    table.dropColumn('tipo');
  });
};
