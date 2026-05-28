import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class UsageLogService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async checkIn(data: { unidad_id: string; responsable_id: string; km_salida: number; destino: string; fotos_salida?: string[]; observaciones?: string }) {
    return this.knex.transaction(async (trx) => {
      // 1. Verificar si la unidad ya tiene una bitácora abierta
      const activeLog = await trx('logistica_bitacora_uso')
        .where({ unidad_id: data.unidad_id, estado: 'abierta' })
        .leftJoin('logistica_colaboradores', 'logistica_bitacora_uso.responsable_id', 'logistica_colaboradores.id')
        .select('logistica_bitacora_uso.*', 'logistica_colaboradores.nombre as responsable_nombre')
        .first();

      if (activeLog) {
        throw new BadRequestException(`La unidad ya está asignada a ${activeLog.responsable_nombre} desde ${activeLog.fecha_salida}`);
      }

      // 2. Crear registro de bitácora
      const [log] = await trx('logistica_bitacora_uso')
        .insert({
          ...data,
          fotos_salida: data.fotos_salida ? JSON.stringify(data.fotos_salida) : null,
          estado: 'abierta',
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');

      // 3. Actualizar estado de la unidad
      await trx('logistica_unidades')
        .where({ id: data.unidad_id })
        .update({ estado_unidad: 'en_uso', updated_at: new Date() });

      return log;
    });
  }

  async checkOut(id: string, data: { km_regreso: number; fotos_regreso?: string[]; observaciones?: string }) {
    return this.knex.transaction(async (trx) => {
      const log = await trx('logistica_bitacora_uso').where({ id, estado: 'abierta' }).first();
      if (!log) {
        throw new BadRequestException('No se encontró una bitácora abierta con este ID');
      }

      if (data.km_regreso < log.km_salida) {
        throw new BadRequestException('El kilometraje de regreso no puede ser menor al de salida');
      }

      // 1. Cerrar bitácora
      const [updatedLog] = await trx('logistica_bitacora_uso')
        .where({ id })
        .update({
          ...data,
          fotos_regreso: data.fotos_regreso ? JSON.stringify(data.fotos_regreso) : null,
          fecha_regreso: new Date(),
          estado: 'cerrada',
          updated_at: new Date()
        })
        .returning('*');

      // 2. Actualizar odómetro y estado de la unidad
      await trx('logistica_unidades')
        .where({ id: log.unidad_id })
        .update({ 
          odometro_actual: data.km_regreso,
          estado_unidad: 'operativa',
          updated_at: new Date() 
        });

      return updatedLog;
    });
  }

  async getActiveLogs() {
    return this.knex('logistica_bitacora_uso')
      .where({ 'logistica_bitacora_uso.estado': 'abierta' })
      .leftJoin('logistica_unidades', 'logistica_bitacora_uso.unidad_id', 'logistica_unidades.id')
      .leftJoin('logistica_colaboradores', 'logistica_bitacora_uso.responsable_id', 'logistica_colaboradores.id')
      .select(
        'logistica_bitacora_uso.*',
        'logistica_unidades.placa',
        'logistica_unidades.modelo',
        'logistica_colaboradores.nombre as responsable_nombre'
      );
  }
}
