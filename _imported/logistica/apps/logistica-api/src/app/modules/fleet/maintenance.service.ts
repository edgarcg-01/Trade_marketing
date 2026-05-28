import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class MaintenanceService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll(filters: any = {}) {
    const query = this.knex('logistica_mantenimientos')
      .leftJoin('logistica_unidades', 'logistica_mantenimientos.unidad_id', 'logistica_unidades.id')
      .select('logistica_mantenimientos.*', 'logistica_unidades.placa')
      .orderBy('fecha_servicio', 'desc');

    if (filters.unidad_id) query.where('logistica_mantenimientos.unidad_id', filters.unidad_id);
    if (filters.tipo) query.where('logistica_mantenimientos.tipo', filters.tipo);

    return query;
  }

  async create(data: any) {
    return this.knex.transaction(async (trx) => {
      const [result] = await trx('logistica_mantenimientos').insert(data).returning('*');
      
      // Si el mantenimiento tiene un KM de servicio, actualizamos el odómetro de la unidad (opcional/seguridad)
      if (data.km_servicio) {
         const unit = await trx('logistica_unidades').where({ id: data.unidad_id }).first();
         if (data.km_servicio > (unit?.odometro_actual || 0)) {
           await trx('logistica_unidades')
             .where({ id: data.unidad_id })
             .update({ odometro_actual: data.km_servicio });
         }
      }

      return result;
    });
  }

  async findByUnit(unidadId: string) {
    return this.knex('logistica_mantenimientos')
      .where({ unidad_id: unidadId })
      .orderBy('fecha_servicio', 'desc');
  }
}
