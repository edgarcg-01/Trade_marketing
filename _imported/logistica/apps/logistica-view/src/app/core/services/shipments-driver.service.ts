import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface DriverShipment {
  id: string;
  folio: string;
  fecha: string;
  origen: string;
  destino: string;
  estado: ShipmentEstado;
  unidad_placa: string;
  chofer_nombre: string;
  guia_id: string;
  guia_tipo: string;
  guia_estado: string;
  paso_actual?: number;
  fecha_salida?: string;
  fecha_llegada?: string;
}

export type ShipmentEstado = 
  | 'programado' 
  | 'checklist_salida' 
  | 'en_transito' 
  | 'fotos_entrega' 
  | 'checklist_llegada' 
  | 'costos_pendientes' 
  | 'completado' 
  | 'cancelado';

export const ESTADO_LABELS: Record<ShipmentEstado, string> = {
  programado: 'Programado',
  checklist_salida: 'Checklist de Salida',
  en_transito: 'En Tránsito',
  fotos_entrega: 'Fotos de Entrega',
  checklist_llegada: 'Checklist de Llegada',
  costos_pendientes: 'Costos Pendientes',
  completado: 'Completado',
  cancelado: 'Cancelado',
};

export const ESTADO_COLORS: Record<ShipmentEstado, string> = {
  programado: 'info',
  checklist_salida: 'warning',
  en_transito: 'info',
  fotos_entrega: 'warning',
  checklist_llegada: 'warning',
  costos_pendientes: 'help',
  completado: 'success',
  cancelado: 'danger',
};

export interface EstadoResponse {
  success: boolean;
  estado: ShipmentEstado;
}

@Injectable({
  providedIn: 'root'
})
export class ShipmentsDriverService {
  private apiUrl = `${environment.apiUrl}/shipments`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener embarques asignados al chofer
   */
  getDriverShipments(userId: string): Observable<DriverShipment[]> {
    return this.http.get<DriverShipment[]>(`${this.apiUrl}/driver/${userId}`);
  }

  /**
   * Iniciar checklist de salida
   */
  iniciarChecklistSalida(embarqueId: string, choferId: string): Observable<EstadoResponse> {
    return this.http.post<EstadoResponse>(`${this.apiUrl}/${embarqueId}/iniciar-checklist-salida`, { choferId });
  }

  /**
   * Confirmar salida (después de completar checklist)
   */
  confirmarSalida(embarqueId: string, checklistId: string): Observable<EstadoResponse> {
    return this.http.post<EstadoResponse>(`${this.apiUrl}/${embarqueId}/confirmar-salida`, { checklistId });
  }

  /**
   * Cambiar estado a fotos de entrega
   */
  subirFotosEntrega(embarqueId: string): Observable<EstadoResponse> {
    return this.http.post<EstadoResponse>(`${this.apiUrl}/${embarqueId}/subir-fotos-entrega`, {});
  }

  /**
   * Confirmar entrega (después de subir fotos)
   */
  confirmarEntrega(embarqueId: string): Observable<EstadoResponse> {
    return this.http.post<EstadoResponse>(`${this.apiUrl}/${embarqueId}/confirmar-entrega`, {});
  }

  /**
   * Completar checklist de llegada
   */
  completarChecklistLlegada(embarqueId: string, checklistId: string): Observable<EstadoResponse> {
    return this.http.post<EstadoResponse>(`${this.apiUrl}/${embarqueId}/completar-checklist-llegada`, { checklistId });
  }

  /**
   * Finalizar embarque
   */
  finalizarEmbarque(embarqueId: string): Observable<EstadoResponse> {
    return this.http.post<EstadoResponse>(`${this.apiUrl}/${embarqueId}/finalizar`, {});
  }

  /**
   * Obtener label del estado
   */
  getEstadoLabel(estado: ShipmentEstado): string {
    return ESTADO_LABELS[estado] || estado;
  }

  /**
   * Obtener color del estado para PrimeNG
   */
  getEstadoColor(estado: ShipmentEstado): string {
    return ESTADO_COLORS[estado] || 'info';
  }

  /**
   * Verificar si el embarque está en un estado donde el chofer puede actuar
   */
  canDriverAct(estado: ShipmentEstado): boolean {
    const actionableStates: ShipmentEstado[] = [
      'programado',
      'checklist_salida',
      'en_transito',
      'fotos_entrega',
      'checklist_llegada',
    ];
    return actionableStates.includes(estado);
  }

  /**
   * Obtener el siguiente paso según el estado actual
   */
  getNextStep(estado: ShipmentEstado): { action: string; label: string } | null {
    const steps: Record<ShipmentEstado, { action: string; label: string }> = {
      programado: { action: 'iniciar_checklist', label: 'Iniciar Checklist de Salida' },
      checklist_salida: { action: 'completar_checklist_salida', label: 'Completar Checklist y Salir' },
      en_transito: { action: 'subir_fotos', label: 'Subir Fotos de Entrega' },
      fotos_entrega: { action: 'confirmar_entrega', label: 'Confirmar Entrega' },
      checklist_llegada: { action: 'completar_checklist_llegada', label: 'Completar Checklist de Llegada' },
      costos_pendientes: { action: 'finalizar', label: 'Finalizar Embarque' },
      completado: { action: 'none', label: 'Embarque Completado' },
      cancelado: { action: 'none', label: 'Embarque Cancelado' },
    };
    
    return steps[estado] || null;
  }
}
