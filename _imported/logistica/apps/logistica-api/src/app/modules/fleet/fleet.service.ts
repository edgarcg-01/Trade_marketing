import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class FleetService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll() {
    return this.knex('logistica_unidades').select('*').orderBy('placa', 'asc');
  }

  async findOne(id: string) {
    return this.knex('logistica_unidades').where({ id }).first();
  }

  async create(data: any) {
    const [result] = await this.knex('logistica_unidades').insert(data).returning('*');
    return result;
  }

  async update(id: string, data: any) {
    const [result] = await this.knex('logistica_unidades')
      .where({ id })
      .update({
        ...data,
        updated_at: new Date()
      })
      .returning('*');
    return result;
  }

  async remove(id: string) {
    return this.knex('logistica_unidades').where({ id }).del();
  }

  async getHistory(id: string) {
    const bitacora = await this.knex('logistica_bitacora_uso')
      .where({ unidad_id: id })
      .orderBy('fecha_salida', 'desc');
    
    const mantenimientos = await this.knex('logistica_mantenimientos')
      .where({ unidad_id: id })
      .orderBy('fecha_servicio', 'desc');

    const combustible = await this.knex('logistica_combustible_transacciones')
      .where({ unidad_id: id })
      .orderBy('fecha', 'desc');

    return { bitacora, mantenimientos, combustible };
  }
}
