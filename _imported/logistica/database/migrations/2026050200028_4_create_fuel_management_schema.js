/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // 1. Tabla de transacciones de combustible
  await knex.schema.createTable('logistica_combustible_transacciones', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('unidad_id').references('id').inTable('logistica_unidades').onDelete('CASCADE');
    table.uuid('embarque_id').references('id').inTable('logistica_embarques').onDelete('SET NULL');
    table.uuid('colaborador_id').references('id').inTable('logistica_colaboradores').onDelete('SET NULL');
    
    // Información de la transacción
    table.date('fecha').notNullable();
    table.time('hora').notNullable();
    table.enum('tipo', ['carga', 'consumo_estimado', 'ajuste_manual', 'transferencia']).notNullable();
    table.decimal('litros', 10, 3).notNullable();
    table.decimal('costo_por_litro', 10, 2).defaultTo(0);
    table.decimal('total', 12, 2).defaultTo(0);
    
    // Información de kilometraje
    table.integer('km_inicial').defaultTo(0);
    table.integer('km_final').defaultTo(0);
    table.decimal('rendimiento_real', 8, 2).defaultTo(0); // km/l
    
    // Ubicación y método de registro
    table.string('ubicacion').defaultTo('Base');
    table.enum('metodo_registro', ['manual', 'sistema_automatico', 'importacion']).defaultTo('manual');
    table.string('registrado_por').notNullable();
    table.text('observaciones');
    
    // Campos de auditoría
    table.timestamps(true, true);
    table.uuid('created_by').references('id').inTable('users');
    table.uuid('updated_by').references('id').inTable('users');
    
    // Índices
    table.index(['unidad_id', 'fecha']);
    table.index(['fecha', 'tipo']);
    table.index(['embarque_id']);
  });

  // 2. Tabla de configuración de combustible por unidad
  await knex.schema.createTable('logistica_combustible_config', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('unidad_id').references('id').inTable('logistica_unidades').onDelete('CASCADE').unique();
    
    // Configuración del tanque
    table.decimal('capacidad_tanque', 8, 2).notNullable(); // litros
    table.decimal('nivel_actual', 8, 2).defaultTo(0); // litros
    table.decimal('rendimiento_base', 8, 2).notNullable(); // km/l base
    table.decimal('factor_ajuste', 5, 3).defaultTo(1.0); // factor de ajuste
    
    // Configuración de alertas
    table.decimal('alerta_nivel_minimo', 8, 2).defaultTo(20); // litros
    table.decimal('alerta_consumo_anormal', 8, 2).defaultTo(0); // % sobre consumo normal
    table.decimal('alerta_rendimiento_bajo', 8, 2).defaultTo(0); // km/l mínimo
    
    // Últimos datos conocidos
    table.integer('ultimo_km').defaultTo(0);
    table.date('ultima_fecha_carga');
    table.decimal('ultimo_consumo_promedio', 8, 2).defaultTo(0);
    
    table.timestamps(true, true);
    table.uuid('updated_by').references('id').inTable('users');
  });

  // 3. Tabla de consumos por ruta
  await knex.schema.createTable('logistica_combustible_consumo_ruta', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('embarque_id').references('id').inTable('logistica_embarques').onDelete('CASCADE');
    table.uuid('unidad_id').references('id').inTable('logistica_unidades').onDelete('CASCADE');
    
    // Datos de la ruta
    table.string('origen').notNullable();
    table.string('destino').notNullable();
    table.integer('distancia_km').notNullable();
    
    // Consumo real vs. esperado
    table.decimal('consumo_real_litros', 8, 2).notNullable();
    table.decimal('consumo_esperado_litros', 8, 2).notNullable();
    table.decimal('diferencia_litros', 8, 2).defaultTo(0);
    table.decimal('porcentaje_diferencia', 5, 2).defaultTo(0);
    
    // Rendimiento
    table.decimal('rendimiento_real_km_l', 8, 2).notNullable();
    table.decimal('rendimiento_base_km_l', 8, 2).notNullable();
    table.decimal('eficiencia_porcentaje', 5, 2).defaultTo(0);
    
    // Factores que afectaron el consumo
    table.jsonb('factores_externos'); // clima, tráfico, carga, etc.
    table.text('observaciones');
    
    table.timestamps(true, true);
    
    // Índices
    table.index(['embarque_id']);
    table.index(['unidad_id', 'destino']);
  });

  // 4. Tabla de alertas de combustible
  await knex.schema.createTable('logistica_combustible_alertas', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('unidad_id').references('id').inTable('logistica_unidades').onDelete('CASCADE');
    table.uuid('transaccion_id').references('id').inTable('logistica_combustible_transacciones').onDelete('SET NULL');
    
    // Tipo y severidad de alerta
    table.enum('tipo_alerta', [
      'nivel_bajo', 
      'consumo_anormal', 
      'rendimiento_bajo', 
      'posible_fuga',
      'carga_no_registrada',
      'km_excesivo_sin_carga'
    ]).notNullable();
    
    table.enum('severidad', ['baja', 'media', 'alta', 'critica']).notNullable();
    table.string('titulo').notNullable();
    table.text('descripcion').notNullable();
    
    // Datos de la alerta
    table.decimal('valor_actual', 10, 2);
    table.decimal('valor_esperado', 10, 2);
    table.decimal('diferencia', 10, 2);
    
    // Estado
    table.enum('estado', ['activa', 'revisada', 'resuelta']).defaultTo('activa');
    table.timestamp('fecha_resolucion');
    table.text('solucion_aplicada');
    
    // Auditoría
    table.timestamps(true, true);
    table.uuid('created_by').references('id').inTable('users');
    table.uuid('resolved_by').references('id').inTable('users');
    
    // Índices
    table.index(['unidad_id', 'estado']);
    table.index(['tipo_alerta', 'estado']);
    table.index(['severidad', 'estado']);
  });

  // 5. Vista para resumen de combustible por unidad
  await knex.raw(`
    CREATE VIEW logistica_combustible_resumen_unidades AS
    SELECT 
      u.id as unidad_id,
      u.placa,
      u.modelo,
      u.rendimiento as rendimiento_fabrica,
      COALESCE(conf.capacidad_tanque, 0) as capacidad_tanque,
      COALESCE(conf.nivel_actual, 0) as nivel_actual,
      COALESCE(conf.rendimiento_base, u.rendimiento) as rendimiento_base,
      COALESCE(conf.ultimo_km, 0) as ultimo_km,
      
      -- Última carga
      (SELECT MAX(fecha) 
       FROM logistica_combustible_transacciones 
       WHERE unidad_id = u.id AND tipo = 'carga') as ultima_carga_fecha,
      
      -- Consumo último mes
      COALESCE(SUM(CASE WHEN t.tipo = 'consumo_estimado' AND t.fecha >= CURRENT_DATE - INTERVAL '30 days' 
                   THEN t.litros ELSE 0 END), 0) as consumo_ultimo_mes,
      
      -- Cargas último mes
      COALESCE(SUM(CASE WHEN t.tipo = 'carga' AND t.fecha >= CURRENT_DATE - INTERVAL '30 days' 
                   THEN t.litros ELSE 0 END), 0) as cargas_ultimo_mes,
      
      -- Costo último mes
      COALESCE(SUM(CASE WHEN t.fecha >= CURRENT_DATE - INTERVAL '30 days' 
                   THEN t.total ELSE 0 END), 0) as costo_ultimo_mes,
      
      -- Rendimiento promedio real
      COALESCE(AVG(CASE WHEN t.rendimiento_real > 0 AND t.fecha >= CURRENT_DATE - INTERVAL '30 days' 
                   THEN t.rendimiento_real ELSE NULL END), u.rendimiento) as rendimiento_promedio_real,
      
      -- Alertas activas
      (SELECT COUNT(*) 
       FROM logistica_combustible_alertas 
       WHERE unidad_id = u.id AND estado = 'activa') as alertas_activas,
       
      -- Última actualización
      (SELECT MAX(updated_at) 
       FROM logistica_combustible_transacciones 
       WHERE unidad_id = u.id) as ultima_actualizacion
       
    FROM logistica_unidades u
    LEFT JOIN logistica_combustible_config conf ON u.id = conf.unidad_id
    LEFT JOIN logistica_combustible_transacciones t ON u.id = t.unidad_id
    GROUP BY u.id, u.placa, u.modelo, u.rendimiento, 
             conf.capacidad_tanque, conf.nivel_actual, conf.rendimiento_base, conf.ultimo_km
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.raw('DROP VIEW IF EXISTS logistica_combustible_resumen_unidades');
  await knex.schema.dropTableIfExists('logistica_combustible_alertas');
  await knex.schema.dropTableIfExists('logistica_combustible_consumo_ruta');
  await knex.schema.dropTableIfExists('logistica_combustible_config');
  await knex.schema.dropTableIfExists('logistica_combustible_transacciones');
};
