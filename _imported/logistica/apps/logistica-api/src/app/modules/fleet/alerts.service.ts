import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

export interface FleetAlert {
  tipo: 'mantenimiento' | 'bitacora' | 'consumo';
  prioridad: 'baja' | 'media' | 'alta' | 'critica';
  unidad_id: string;
  placa: string;
  mensaje: string;
}

@Injectable()
export class AlertsService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async getGlobalAlerts(): Promise<FleetAlert[]> {
    const alerts: FleetAlert[] = [];

    // 1. Alertas de Mantenimiento (KM)
    const maintAlerts = await this.knex('logistica_unidades')
      .whereRaw('rendimiento_esperado > 0') // Solo si tenemos dato técnico
      .select('id', 'placa', 'odometro_actual');

    for (const unit of maintAlerts) {
      const lastMaint = await this.knex('logistica_mantenimientos')
        .where({ unidad_id: unit.id })
        .orderBy('fecha_servicio', 'desc')
        .first();

      if (lastMaint && lastMaint.km_proximo) {
        const remaining = lastMaint.km_proximo - unit.odometro_actual;
        if (remaining <= 500) {
          alerts.push({
            tipo: 'mantenimiento',
            prioridad: remaining <= 0 ? 'critica' : 'media',
            unidad_id: unit.id,
            placa: unit.placa,
            mensaje: remaining <= 0 
              ? `Mantenimiento vencido hace ${Math.abs(remaining)} km` 
              : `Mantenimiento próximo (faltan ${remaining} km)`
          });
        }
      }
    }

    // 2. Alertas de Bitácoras Abiertas (> 24h)
    const openLogs = await this.knex('logistica_bitacora_uso')
      .where({ estado: 'abierta' })
      .whereRaw('fecha_salida < NOW() - INTERVAL \'24 hours\'')
      .leftJoin('logistica_unidades', 'logistica_bitacora_uso.unidad_id', 'logistica_unidades.id')
      .select('logistica_bitacora_uso.*', 'logistica_unidades.placa');

    for (const log of openLogs) {
      alerts.push({
        tipo: 'bitacora',
        prioridad: 'alta',
        unidad_id: log.unidad_id,
        placa: log.placa,
        mensaje: `Unidad fuera por más de 24 horas (desde ${log.fecha_salida.toLocaleString()})`
      });
    }

    // 3. Alertas de Consumo (Variación > 20%)
    // Lógica simplificada: comparar última carga con rendimiento esperado
    const fuelAnalysis = await this.knex('logistica_combustible_transacciones')
      .join('logistica_unidades', 'logistica_combustible_transacciones.unidad_id', 'logistica_unidades.id')
      .whereRaw('logistica_unidades.rendimiento_esperado > 0')
      .whereNotNull('logistica_combustible_transacciones.km_inicial')
      .whereNotNull('logistica_combustible_transacciones.km_final')
      .select(
        'logistica_combustible_transacciones.*', 
        'logistica_unidades.placa', 
        'logistica_unidades.rendimiento_esperado'
      )
      .orderBy('fecha', 'desc')
      .limit(20);

    for (const fuel of fuelAnalysis) {
      const kmRecorridos = fuel.km_final - fuel.km_inicial;
      if (kmRecorridos > 0 && fuel.litros > 0) {
        const rendimientoReal = kmRecorridos / fuel.litros;
        const variacion = ((rendimientoReal - fuel.rendimiento_esperado) / fuel.rendimiento_esperado) * 100;
        
        // Si el rendimiento real es 20% menor al esperado (gasta más gasolina)
        if (variacion < -20) {
          alerts.push({
            tipo: 'consumo',
            prioridad: 'alta',
            unidad_id: fuel.unidad_id,
            placa: fuel.placa,
            mensaje: `Rendimiento bajo: ${rendimientoReal.toFixed(2)} km/l (Esperado: ${fuel.rendimiento_esperado} km/l)`
          });
        }
      }
    }

    return alerts;
  }
}
