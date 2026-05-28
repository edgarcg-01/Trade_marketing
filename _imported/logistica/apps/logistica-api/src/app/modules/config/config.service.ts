import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class ConfigService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  // --- Períodos ---
  async findAllPeriods() {
    return this.knex('logistica_periodos').select('*').orderBy('numero', 'asc');
  }

  async findCurrentPeriod() {
    const today = new Date().toISOString().split('T')[0];
    return this.knex('logistica_periodos')
      .where('inicio', '<=', today)
      .andWhere('fin', '>=', today)
      .first();
  }

  // --- Finanzas ---
  async findAllFinanzas() {
    return this.knex('logistica_config_finanzas').select('*');
  }

  async getFinanceValue(clave: string) {
    const row = await this.knex('logistica_config_finanzas').where({ clave }).first();
    return row ? parseFloat(row.valor) : 0;
  }

  async updateFinanceValue(clave: string, valor: number) {
    return this.knex('logistica_config_finanzas')
      .where({ clave })
      .update({ valor, updated_at: new Date() });
  }

  // --- Destinos ---
  async findAllDestinos() {
    return this.knex('logistica_catalogo_destinos').select('*').orderBy('nombre', 'asc');
  }

  async createDestino(data: any) {
    try {
      const baseNombre = data.destino || data.nombre || 'NUEVO DESTINO';
      let nombre = baseNombre;
      let counter = 1;

      while (true) {
        try {
          const [result] = await this.knex('logistica_catalogo_destinos').insert({
            nombre: nombre,
            comision_chofer: parseFloat(data.comision_chofer) || parseFloat(data.comision_chofer) || 0,
            comision_repartidor: parseFloat(data.comision_repartidor) || parseFloat(data.comision_repartidor) || 0,
            comision_ayudante: parseFloat(data.comision_ayudante) || parseFloat(data.comision_ayudante) || 0,
            km: parseFloat(data.km_referencia) || parseFloat(data.km) || 0,
            factor: 1 // Factor predeterminado: 1
          }).returning('*');
          return result;
        } catch (insertError: any) {
          if (insertError.code === '23505' && insertError.constraint === 'logistica_catalogo_destinos_nombre_unique') {
            nombre = `${baseNombre} ${counter}`;
            counter++;
            continue;
          }
          throw insertError;
        }
      }
    } catch (error) {
      console.error('Error creating destino:', error);
      throw error;
    }
  }

  async updateDestino(id: string, data: any) {
    console.log('[ConfigService] updateDestino called with id:', id, 'data:', data);
    
    try {
      const updateData: any = {
        updated_at: new Date()
      };
      
      // Manejar nombre/destino
      if (data.nombre !== undefined) {
        updateData.nombre = String(data.nombre);
      } else if (data.destino !== undefined) {
        updateData.nombre = String(data.destino);
      }
      
      // Manejar comisiones (convertir a string para la BD)
      if (data.comision_chofer !== undefined) updateData.comision_chofer = String(data.comision_chofer);
      if (data.comision_repartidor !== undefined) updateData.comision_repartidor = String(data.comision_repartidor);
      if (data.comision_ayudante !== undefined) updateData.comision_ayudante = String(data.comision_ayudante);
      if (data.km_referencia !== undefined) updateData.km = String(data.km_referencia);
      if (data.km !== undefined) updateData.km = String(data.km);
      
      // Manejar factor
      if (data.factor !== undefined) updateData.factor = String(data.factor);
      
      console.log('[ConfigService] updateData to send:', updateData);
      
      const [result] = await this.knex('logistica_catalogo_destinos')
        .where({ id })
        .update(updateData)
        .returning('*');
      
      console.log('[ConfigService] updateDestino result:', result);
      return result;
    } catch (error) {
      console.error('[ConfigService] updateDestino error:', error);
      throw error;
    }
  }

  async deleteDestino(id: string) {
    return this.knex('logistica_catalogo_destinos').where({ id }).del();
  }
}
