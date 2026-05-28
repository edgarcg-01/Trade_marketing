import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export type ChecklistTipo = 'salida' | 'llegada';

export interface ChecklistItemDefinition {
  id: string;
  descripcion: string;
  tipo: 'texto' | 'numero' | 'fecha' | 'estado' | 'si_no' | 'texto_largo' | 'firma';
  requerido: boolean;
  requiere_foto?: boolean;
}

export interface ChecklistCategoria {
  categoria: string;
  titulo: string;
  items: ChecklistItemDefinition[];
}

export interface ChecklistItem {
  id: string;
  nombre?: string;
  descripcion?: string;
  completado: boolean;
  observaciones?: string;
  respuesta?: any;
}

export interface Checklist {
  id: string;
  embarque_id: string;
  chofer_id: string;
  tipo: ChecklistTipo;
  respuestas: Record<string, any>;
  estructura?: ChecklistCategoria[];
  items?: ChecklistItem[]; // Formato alternativo del backend
  fotos_danos?: string[];
  completado: boolean;
  completado_at?: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private apiUrl = `${environment.apiUrl}/checklists`;

  constructor(private http: HttpClient) {}

  /**
   * Crear un nuevo checklist para un embarque
   */
  create(embarqueId: string, tipo: ChecklistTipo, choferId: string): Observable<Checklist> {
    return this.http.post<Checklist>(`${this.apiUrl}/${embarqueId}/${tipo}`, { choferId });
  }

  /**
   * Obtener checklist por embarque y tipo
   */
  getByEmbarque(embarqueId: string, tipo: ChecklistTipo): Observable<Checklist> {
    return this.http.get<Checklist>(`${this.apiUrl}/${embarqueId}/${tipo}`);
  }

  /**
   * Obtener todos los checklists de un embarque
   */
  getAllByEmbarque(embarqueId: string): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(`${this.apiUrl}/${embarqueId}`);
  }

  /**
   * Actualizar respuestas del checklist
   */
  updateRespuestas(
    checklistId: string, 
    respuestas: Record<string, any>, 
    fotos?: string[]
  ): Observable<Checklist> {
    return this.http.patch<Checklist>(`${this.apiUrl}/${checklistId}/respuestas`, { 
      respuestas, 
      fotos 
    });
  }

  /**
   * Marcar checklist como completado
   */
  complete(checklistId: string): Observable<Checklist> {
    return this.http.patch<Checklist>(`${this.apiUrl}/${checklistId}/completar`, {});
  }

  /**
   * Validar que el checklist tenga todos los campos requeridos
   */
  validateCompleteness(checklist: Checklist): { valid: boolean; missing: string[] } {
    const missing: string[] = [];
    
    console.log('validateCompleteness - respuestas:', checklist.respuestas);
    
    if (!checklist.estructura) {
      return { valid: false, missing: ['estructura'] };
    }
    
    for (const categoria of checklist.estructura) {
      for (const item of categoria.items) {
        if (item.requerido) {
          const respuesta = checklist.respuestas[item.id];
          console.log(`Validando ${item.id}:`, respuesta, 'tipo:', item.tipo);
          
          let isMissing = false;
          
          // Para items de tipo 'estado', validar que tenga un valor de la lista permitida
          if (item.tipo === 'estado') {
            const valoresValidos = ['bien', 'regular', 'malo', 'no_aplica'];
            if (!respuesta || !valoresValidos.includes(respuesta)) {
              isMissing = true;
            }
          }
          // Para items de tipo 'si_no', validar que sea booleano (true o false)
          else if (item.tipo === 'si_no') {
            if (typeof respuesta !== 'boolean') {
              isMissing = true;
            }
          }
          // Para items de tipo 'texto_largo', permitir string vacío (campos opcionales como "si hubo", "si existen")
          else if (item.tipo === 'texto_largo') {
            // No validar - campo opcional
            isMissing = false;
          }
          // Para otros tipos, validar que no esté vacío
          else {
            if (respuesta === null || respuesta === undefined || respuesta === '' || respuesta === 0) {
              // El valor 0 es válido para algunos campos numéricos como kilometraje
              if (item.tipo !== 'numero' || respuesta === null || respuesta === undefined || respuesta === '') {
                isMissing = true;
              }
            }
          }
          
          if (isMissing) {
            missing.push(`${categoria.titulo}: ${item.descripcion}`);
          }

          // Nota: La foto ya no es requerida para completar el checklist
          // El chofer puede subir fotos opcionalmente después
        }
      }
    }
    
    console.log('validateCompleteness - missing:', missing);
    return { valid: missing.length === 0, missing };
  }

  /**
   * Inicializar respuestas vacías según la estructura
   */
  initializeRespuestas(estructura: ChecklistCategoria[]): Record<string, any> {
    const respuestas: Record<string, any> = {};
    
    for (const categoria of estructura) {
      for (const item of categoria.items) {
        switch (item.tipo) {
          case 'texto':
            respuestas[item.id] = '';
            break;
          case 'texto_largo':
            respuestas[item.id] = '';
            break;
          case 'numero':
            respuestas[item.id] = null;
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
}
