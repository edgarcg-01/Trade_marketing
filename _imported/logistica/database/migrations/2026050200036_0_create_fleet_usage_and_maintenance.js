/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // 1. Bitácora de Uso (Check-in / Check-out)
  await knex.schema.createTable('logistica_bitacora_uso', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('unidad_id').references('id').inTable('logistica_unidades').onDelete('CASCADE');
    table.uuid('responsable_id').references('id').inTable('logistica_colaboradores').onDelete('SET NULL');
    
    // Salida
    table.timestamp('fecha_salida').defaultTo(knex.fn.now());
    table.integer('km_salida').notNullable();
    table.jsonb('fotos_salida'); // Array de URLs
    
    // Regreso
    table.timestamp('fecha_regreso');
    table.integer('km_regreso');
    table.jsonb('fotos_regreso'); // Array de URLs
    
    table.string('destino').notNullable();
    table.text('observaciones');
    table.enum('estado', ['abierta', 'cerrada']).defaultTo('abierta');
    
    table.timestamps(true, true);
    
    table.index(['unidad_id', 'estado']);
    table.index(['responsable_id']);
  });

  // 2. Mantenimientos (Preventivos y Correctivos)
  await knex.schema.createTable('logistica_mantenimientos', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('unidad_id').references('id').inTable('logistica_unidades').onDelete('CASCADE');
    
    table.enum('tipo', ['preventivo', 'correctivo']).notNullable();
    table.text('descripcion').notNullable();
    table.date('fecha_servicio').notNullable();
    table.integer('km_servicio').notNullable();
    
    // Programación futura
    table.date('fecha_proximo');
    table.integer('km_proximo');
    
    // Costos y Administrativo
    table.decimal('costo', 12, 2).defaultTo(0);
    table.string('proveedor');
    table.string('factura_url', 500);
    table.uuid('registrado_por').references('id').inTable('users');
    
    table.timestamps(true, true);
    
    table.index(['unidad_id', 'fecha_servicio']);
    table.index(['tipo']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('logistica_mantenimientos');
  await knex.schema.dropTableIfExists('logistica_bitacora_uso');
};
