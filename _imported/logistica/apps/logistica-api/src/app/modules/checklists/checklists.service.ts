import { Injectable, Inject } from '@nestjs/common';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';
import { CHECKLIST_ITEMS_CONFIG, ChecklistTipo } from './checklist-items.config';

@Injectable()
export class ChecklistsService {
  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex: Knex,
  ) {}

  async createChecklist(embarqueId: string, choferId: string, tipo: ChecklistTipo) {
    const config = CHECKLIST_ITEMS_CONFIG[tipo];
    
    // Obtener datos del chofer
    const chofer = await this.knex('users')
      .where('id', choferId)
      .first();
    
    // Obtener datos del embarque con la unidad asignada
    const embarque = await this.knex('logistica_embarques')
      .where('id', embarqueId)
      .first();
    
    // Obtener datos de la unidad (kilometraje)
    let unidad: any = null;
    if (embarque?.unidad_id) {
      unidad = await this.knex('logistica_unidades')
        .where('id', embarque.unidad_id)
        .first();
    }
    
    console.log('Creating checklist - chofer:', chofer?.nombre, 'unidad:', unidad?.placa, 'kilometraje:', unidad?.kilometraje_actual);
    
    // Generar estructura inicial de respuestas con datos prellenados
    const datosPrellenados = {
      nombre_operador: chofer?.nombre || '',
      unidad: unidad?.placa || embarque?.unidad_id || '',
      kilometraje: unidad?.kilometraje_actual || 0,
    };
    console.log('Datos prellenados:', datosPrellenados);
    
    const respuestas = this.generarRespuestasIniciales(config, datosPrellenados);
    console.log('Respuestas generadas:', respuestas);
    
    const [checklist] = await this.knex('logistica_checklists')
      .insert({
        embarque_id: embarqueId,
        chofer_id: choferId,
        tipo: tipo,
        respuestas: respuestas, // Knex maneja JSONB automáticamente
        completado: false,
        created_at: new Date(),
        updated_at: new Date(),
      })
      .returning('*');

    return {
      ...checklist,
      respuestas: typeof checklist.respuestas === 'string' ? JSON.parse(checklist.respuestas) : checklist.respuestas,
      estructura: config,
    };
  }

  async getChecklistById(checklistId: string) {
    const checklist = await this.knex('logistica_checklists')
      .where('id', checklistId)
      .first();

    if (!checklist) {
      return null;
    }

    const config = CHECKLIST_ITEMS_CONFIG[checklist.tipo as ChecklistTipo];

    return {
      ...checklist,
      respuestas: typeof checklist.respuestas === 'string' ? JSON.parse(checklist.respuestas) : checklist.respuestas,
      estructura: config,
    };
  }

  async getChecklistByEmbarque(embarqueId: string, tipo: ChecklistTipo) {
    const checklist = await this.knex('logistica_checklists')
      .where({ embarque_id: embarqueId, tipo })
      .first();

    if (!checklist) {
      return null;
    }

    // Combinar con la configuración para enviar al frontend
    const config = CHECKLIST_ITEMS_CONFIG[tipo];

    return {
      ...checklist,
      respuestas: typeof checklist.respuestas === 'string' ? JSON.parse(checklist.respuestas) : checklist.respuestas,
      estructura: config,
    };
  }

  async updateChecklistRespuestas(
    checklistId: string, 
    respuestas: Record<string, any>,
    fotos?: string[]
  ) {
    console.log('updateChecklistRespuestas - ID:', checklistId);
    console.log('updateChecklistRespuestas - respuestas recibidas:', respuestas);
    
    const updateData: any = {
      respuestas: respuestas, // Knex maneja JSONB automáticamente
      updated_at: new Date(),
    };

    if (fotos && fotos.length > 0) {
      // Obtener fotos existentes y agregar nuevas
      const checklist = await this.knex('logistica_checklists')
        .where('id', checklistId)
        .first();
      
      const fotosExistentes = checklist?.fotos_danos 
        ? (typeof checklist.fotos_danos === 'string' ? JSON.parse(checklist.fotos_danos) : checklist.fotos_danos)
        : [];
      
      updateData.fotos_danos = [...fotosExistentes, ...fotos];
    }

    const [updated] = await this.knex('logistica_checklists')
      .where('id', checklistId)
      .update(updateData)
      .returning('*');
    
    console.log('updateChecklistRespuestas - resultado:', updated);

    return {
      ...updated,
      respuestas: typeof updated.respuestas === 'string' ? JSON.parse(updated.respuestas) : updated.respuestas,
    };
  }

  async completeChecklist(checklistId: string) {
    const [checklist] = await this.knex('logistica_checklists')
      .where('id', checklistId)
      .update({
        completado: true,
        fecha_completado: new Date(),
        updated_at: new Date(),
      })
      .returning('*');

    return {
      ...checklist,
      respuestas: typeof checklist.respuestas === 'string' ? JSON.parse(checklist.respuestas) : checklist.respuestas,
    };
  }

  async validateChecklistCompleto(checklistId: string): Promise<boolean> {
    const checklist = await this.knex('logistica_checklists')
      .where('id', checklistId)
      .first();

    if (!checklist) {
      return false;
    }

    const respuestas = typeof checklist.respuestas === 'string' ? JSON.parse(checklist.respuestas) : checklist.respuestas;

    const config = CHECKLIST_ITEMS_CONFIG[checklist.tipo as ChecklistTipo];
    
    // Validar que todos los items requeridos tengan respuesta
    for (const categoria of config) {
      for (const item of categoria.items) {
        if (item.requerido && !respuestas[item.id]) {
          return false;
        }
      }
    }

    return true;
  }

  private generarRespuestasIniciales(
    config: any[], 
    datosPrellenados?: { nombre_operador?: string; unidad?: string; kilometraje?: number }
  ): Record<string, any> {
    const respuestas: Record<string, any> = {};
    
    for (const categoria of config) {
      for (const item of categoria.items) {
        // Prellenar con datos del backend si están disponibles
        if (datosPrellenados && item.id in datosPrellenados) {
          respuestas[item.id] = datosPrellenados[item.id as keyof typeof datosPrellenados];
          continue;
        }
        
        // Valores por defecto según tipo
        switch (item.tipo) {
          case 'texto':
          case 'texto_largo':
            respuestas[item.id] = '';
            break;
          case 'numero':
            respuestas[item.id] = 0;
            break;
          case 'fecha':
            respuestas[item.id] = new Date().toISOString();
            break;
          case 'estado':
            respuestas[item.id] = null; // 'bien', 'regular', 'malo', 'no_aplica'
            break;
          case 'si_no':
            respuestas[item.id] = false;
            break;
          case 'firma':
            respuestas[item.id] = null; // base64 de la firma
            break;
        }
      }
    }
    
    return respuestas;
  }

  async getChecklistsByEmbarque(embarqueId: string) {
    const checklists = await this.knex('logistica_checklists')
      .where('embarque_id', embarqueId)
      .orderBy('created_at', 'asc');

    return checklists.map(c => ({
      ...c,
      respuestas: typeof c.respuestas === 'string' ? JSON.parse(c.respuestas) : c.respuestas,
    }));
  }
}
