import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@Injectable()
export class GuidesService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll() {
    return this.knex('logistica_guias')
      .leftJoin('logistica_colaboradores as chofer', 'logistica_guias.chofer_id', 'chofer.id')
      .select('logistica_guias.*', 'chofer.nombre as chofer_nombre')
      .orderBy('created_at', 'desc');
  }

  async findOne(id: string) {
    const guia = await this.knex('logistica_guias').where({ id }).first();
    if (!guia) return null;

    const destinatarios = await this.knex('logistica_guias_destinatarios').where({ guia_id: id });
    return { ...guia, destinatarios };
  }

  async create(data: any) {
    return this.knex.transaction(async (trx) => {
      const { destinatarios, ...rawGuiaData } = data;
      
      // Mapear y limpiar para logistica_guias
      const guiaData = {
        folio: rawGuiaData.numero || rawGuiaData.folio,
        embarque_id: rawGuiaData.embarque_id || null,
        tipo: rawGuiaData.tipo || 'entrega',
        estado: rawGuiaData.estado || 'pendiente',
        chofer_id: rawGuiaData.chofer_id,
        ayudante1_id: rawGuiaData.ayudante1_id || null,
        ayudante2_id: rawGuiaData.ayudante2_id || null,
        viaticos: rawGuiaData.viaticos || 0,
        fecha_salida: rawGuiaData.fecha_salida || null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      const [guia] = await trx('logistica_guias').insert(guiaData).returning('*');

      if (destinatarios && Array.isArray(destinatarios) && destinatarios.length > 0) {
        await trx('logistica_guias_destinatarios').insert(
          destinatarios.map(d => ({ 
            ...d, 
            guia_id: guia.id,
            created_at: new Date(),
            updated_at: new Date()
          }))
        );
      }

      return guia;
    });
  }

  async updateStatus(id: string, estado: string) {
    const [guia] = await this.knex('logistica_guias')
      .where({ id })
      .update({ estado, updated_at: new Date() })
      .returning('*');
    return guia;
  }
}
