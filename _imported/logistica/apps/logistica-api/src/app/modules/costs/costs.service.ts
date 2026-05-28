import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class CostsService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll() {
    return this.knex('logistica_costos')
      .leftJoin('logistica_embarques', 'logistica_costos.embarque_id', 'logistica_embarques.id')
      .select('logistica_costos.*', 'logistica_embarques.folio as embarque_folio', 'logistica_embarques.fecha as embarque_fecha')
      .orderBy('logistica_costos.created_at', 'desc');
  }

  async findByEmbarque(embarqueId: string) {
    return this.knex('logistica_costos').where({ embarque_id: embarqueId }).first();
  }

  async create(data: any) {
    // Verificar que el embarque exista y obtener su estado
    const embarque = await this.knex('logistica_embarques').where({ id: data.embarque_id }).first();
    if (!embarque) {
      throw new NotFoundException(`No se encontró el embarque con ID ${data.embarque_id}`);
    }

    // Verificar que no existan costos ya registrados
    const existing = await this.knex('logistica_costos').where({ embarque_id: data.embarque_id }).first();
    if (existing) {
      throw new Error('Ya existen costos registrados para este embarque. Usa editar.');
    }

    // Verificar que el chofer haya completado la ruta
    // Estados permitidos: checklist_llegada, costos_pendientes, completado
    const estadosPermitidos = ['checklist_llegada', 'costos_pendientes', 'completado'];
    if (!estadosPermitidos.includes(embarque.estado)) {
      throw new Error(`No se pueden registrar costos. El embarque está en estado "${embarque.estado}". El chofer debe completar la ruta primero.`);
    }

    const [costo] = await this.knex('logistica_costos').insert(data).returning('*');

    // Actualizar el estado del embarque a 'completado' con fecha y hora
    const now = new Date();
    await this.knex('logistica_embarques')
      .where({ id: data.embarque_id })
      .update({ 
        estado: 'completado',
        fecha_hora_completado: now,
        updated_at: now
      });

    // Registrar en historial
    await this.knex('logistica_embarque_historial').insert({
      embarque_id: data.embarque_id,
      estado_anterior: embarque.estado,
      estado_nuevo: 'completado',
      fecha_hora: now,
      usuario_id: data.usuario_id || null,
      observacion: 'Costos registrados, embarque completado'
    });

    return costo;
  }

  async update(id: string, data: any) {
    const [costo] = await this.knex('logistica_costos')
      .where({ id })
      .update({ ...data, updated_at: this.knex.fn.now() })
      .returning('*');
      
    if (!costo) {
      throw new NotFoundException(`No se encontró el registro de costos con ID ${id}`);
    }

    // Obtener el estado actual del embarque
    const embarque = await this.knex('logistica_embarques').where({ id: costo.embarque_id }).first();

    // Asegurar que el embarque esté en estado 'completado' con fecha y hora
    const now = new Date();
    await this.knex('logistica_embarques')
      .where({ id: costo.embarque_id })
      .update({ 
        estado: 'completado',
        fecha_hora_completado: now,
        updated_at: now
      });

    // Registrar en historial si el estado cambió
    if (embarque && embarque.estado !== 'completado') {
      await this.knex('logistica_embarque_historial').insert({
        embarque_id: costo.embarque_id,
        estado_anterior: embarque.estado,
        estado_nuevo: 'completado',
        fecha_hora: now,
        usuario_id: data.usuario_id || null,
        observacion: 'Costos actualizados, embarque completado'
      });
    }

    return costo;
  }

  async remove(id: string) {
    const deleted = await this.knex('logistica_costos').where({ id }).del();
    if (!deleted) {
      throw new NotFoundException(`No se encontró el registro de costos con ID ${id}`);
    }
    return { success: true };
  }
}
