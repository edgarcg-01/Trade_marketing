/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // 1. Ampliar logistica_unidades
  const hasOdometro = await knex.schema.hasColumn('logistica_unidades', 'odometro_actual');
  const hasRendimiento = await knex.schema.hasColumn('logistica_unidades', 'rendimiento_esperado');
  const hasEstado = await knex.schema.hasColumn('logistica_unidades', 'estado_unidad');

  await knex.schema.alterTable('logistica_unidades', (table) => {
    if (!hasOdometro) {
      table.integer('odometro_actual').defaultTo(0);
    }
    if (!hasRendimiento) {
      table.decimal('rendimiento_esperado', 10, 2).defaultTo(0);
    }
    if (!hasEstado) {
      table.enum('estado_unidad', ['operativa', 'en_uso', 'en_servicio', 'baja']).defaultTo('operativa');
    }
  });

  // 2. Ampliar logistica_combustible_transacciones
  const hasFacturaXml = await knex.schema.hasColumn('logistica_combustible_transacciones', 'factura_xml_url');
  const hasFacturaPdf = await knex.schema.hasColumn('logistica_combustible_transacciones', 'factura_pdf_url');
  const hasFolio = await knex.schema.hasColumn('logistica_combustible_transacciones', 'folio_factura');

  await knex.schema.alterTable('logistica_combustible_transacciones', (table) => {
    // Nota: 'litros', 'km_inicial', 'km_final' ya existen en la tabla 20260427000004
    // Pero agregaremos metadatos para factura XML
    if (!hasFacturaXml) {
      table.string('factura_xml_url', 500);
    }
    if (!hasFacturaPdf) {
      table.string('factura_pdf_url', 500);
    }
    if (!hasFolio) {
      table.string('folio_factura', 100);
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('logistica_combustible_transacciones', (table) => {
    table.dropColumn('folio_factura');
    table.dropColumn('factura_pdf_url');
    table.dropColumn('factura_xml_url');
  });

  await knex.schema.alterTable('logistica_unidades', (table) => {
    table.dropColumn('estado_unidad');
    table.dropColumn('rendimiento_esperado');
    table.dropColumn('odometro_actual');
  });
};
