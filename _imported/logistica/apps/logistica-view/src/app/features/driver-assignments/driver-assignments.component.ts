import { Component, Input, Output, EventEmitter, signal, inject, effect, type OnInit, type OnChanges, SimpleChanges, ViewEncapsulation, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBar } from 'primeng/progressbar';
import { ProgressSpinner } from 'primeng/progressspinner';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DeliveryWizardComponent } from '../../shared/components/delivery-wizard/delivery-wizard.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SHIPMENT_STATUS } from '../../core/models/logistics.models';
import { AuthService } from '../../core/services/auth.service';
import { ShipmentEstado } from '../../core/services/shipments-driver.service';

interface DriverShipment {
  id: string;
  folio: string;
  fecha: string;
  origen: string;
  destino: string;
  estado: string;
  unidad_placa: string;
  chofer_nombre: string;
  guia_id: string;
  guia_tipo: string;
  guia_estado: string;
}

@Component({
  selector: 'app-driver-assignments',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, TagModule, CardModule, InputTextModule, ProgressBar, ProgressSpinner, DeliveryWizardComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="p-3 sm:p-6">
      <!-- Header móvil simplificado -->
      <div class="mb-4 sm:mb-6">
        <h1 class="text-xl sm:text-2xl font-bold text-logistics-text">Mis Entregas</h1>
        <p class="text-sm sm:text-base text-logistics-text-mid">Gestiona tus embarques asignados</p>
      </div>

      <p-card class="mb-4 sm:mb-6">
        <div class="flex items-start sm:items-center gap-3 sm:gap-4">
          <i class="pi pi-info-circle text-logistics-accent text-xl sm:text-2xl mt-1 sm:mt-0"></i>
          <div class="flex-1">
            <h3 class="font-semibold text-logistics-text text-sm sm:text-base">Instrucciones</h3>
            <p class="text-xs sm:text-sm text-logistics-text-mid">
              1. Inspección antes de salir<br class="sm:hidden">
              <span class="hidden sm:inline">2. Sube foto al llegar</span>
              <span class="sm:hidden">2. Foto al llegar</span><br class="sm:hidden">
              <span class="hidden sm:inline">3. Confirma la entrega</span>
              <span class="sm:hidden">3. Confirma entrega</span>
            </p>
          </div>
        </div>
      </p-card>

      <div *ngIf="loading()" class="text-center py-8">
        <p-progressSpinner></p-progressSpinner>
        <p class="mt-4 text-logistics-text-mid">Cargando embarques...</p>
      </div>

      <div *ngIf="!loading() && shipments().length === 0" class="text-center py-12">
        <i class="pi pi-box text-6xl text-logistics-text-mid mb-4"></i>
        <h3 class="text-xl font-semibold text-logistics-text">No tienes embarques pendientes</h3>
        <p class="text-logistics-text-mid">Cuando se te asigne un embarque, aparecerá aquí</p>
      </div>

      <!-- Cards para móvil -->
      <div class="sm:hidden space-y-3" *ngIf="!loading() && shipments().length > 0">
        <div class="card-mobile" *ngFor="let shipment of shipments()">
          <div class="flex justify-between items-start mb-3">
            <div>
              <p class="font-bold text-lg">{{ shipment.folio }}</p>
              <p class="text-xs opacity-70">{{ formatDate(shipment.fecha) }}</p>
            </div>
            <p-tag [value]="getStatusLabel(shipment.estado)" [severity]="getStatusSeverity(shipment.estado)"></p-tag>
          </div>
          
          <div class="space-y-2 mb-4">
            <div class="flex items-center gap-2 text-sm">
              <i class="pi pi-map-marker"></i>
              <span>{{ shipment.origen }} → {{ shipment.destino }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm opacity-80">
              <i class="pi pi-truck"></i>
              <span>{{ shipment.unidad_placa }}</span>
            </div>
          </div>
          
          <button
            pButton
            type="button"
            [label]="getButtonLabel(shipment.estado)"
            [icon]="getButtonIcon(shipment.estado)"
            (click)="startDelivery(shipment)"
            class="p-button action-btn w-full"
            [disabled]="shipment.estado === 'entregado' || shipment.estado === 'completado' || shipment.guia_estado === 'completado' || shipment.guia_estado === 'completada'">
          </button>
        </div>
        
        <!-- Paginador móvil -->
        <div class="flex justify-center items-center gap-2 text-sm text-logistics-text-mid">
          <span>Mostrando 1-{{ getMobileDisplayCount() }} de {{ shipments().length }}</span>
        </div>
      </div>

      <!-- Tabla para desktop -->
      <div class="hidden sm:block table-responsive">
        <p-table 
          *ngIf="!loading() && shipments().length > 0"
          [value]="shipments()" 
          [paginator]="true"
          [rows]="10"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
          class="p-datatable-sm">
          <ng-template pTemplate="header">
            <tr>
              <th>Folio</th>
              <th>Fecha</th>
              <th>Ruta</th>
              <th>Unidad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </ng-template>
          
          <ng-template pTemplate="body" let-shipment>
            <tr>
              <td class="font-semibold">{{ shipment.folio }}</td>
              <td>{{ formatDate(shipment.fecha) }}</td>
              <td>
                <div class="flex items-center gap-2">
                  <i class="pi pi-map-marker text-logistics-accent"></i>
                  <span>{{ shipment.origen }} → {{ shipment.destino }}</span>
                </div>
              </td>
              <td>{{ shipment.unidad_placa }}</td>
              <td>
                <p-tag [value]="getStatusLabel(shipment.estado)" [severity]="getStatusSeverity(shipment.estado)"></p-tag>
              </td>
              <td>
                <button
                  pButton
                  type="button"
                  [label]="getButtonLabel(shipment.estado)"
                  [icon]="getButtonIcon(shipment.estado)"
                  (click)="startDelivery(shipment)"
                  class="p-button action-btn"
                  [disabled]="shipment.estado === 'entregado' || shipment.estado === 'completado' || shipment.guia_estado === 'completado' || shipment.guia_estado === 'completada'">
                </button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>

      <app-delivery-wizard
        [visible]="showWizard()"
        [embarqueId]="selectedShipmentId()"
        [embarqueEstado]="selectedShipmentEstado()"
        [guiaId]="selectedGuiaId()"
        (visibleChange)="onWizardVisibleChange($event)"
        (deliveryCompleted)="onDeliveryCompleted()"
        (estadoChange)="onEstadoChange($event)">
      </app-delivery-wizard>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    /* Cards para móvil - Modo claro */
    .card-mobile {
      background: #ffffff;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      border: 1px solid #e5e7eb;
      color: #000000;
    }

    /* Cards para móvil - Modo oscuro */
    @media (prefers-color-scheme: dark) {
      .card-mobile {
        background: #000000;
        border-color: #333333;
        color: #ffffff;
      }
    }

    /* Botón monocromático - Negro por defecto (modo claro) - Estilos globales */
    .action-btn,
    .action-btn.p-button,
    .action-btn.p-button-secondary,
    .p-button.action-btn {
      background: #000000 !important;
      background-color: #000000 !important;
      color: #ffffff !important;
      border: 1px solid #000000 !important;
      box-shadow: none !important;
    }

    .action-btn:hover:not(:disabled),
    .action-btn.p-button:hover:not(:disabled),
    .action-btn.p-button-secondary:hover:not(:disabled),
    .p-button.action-btn:hover:not(:disabled) {
      background: #333333 !important;
      background-color: #333333 !important;
      color: #ffffff !important;
      border-color: #333333 !important;
      box-shadow: none !important;
    }

    .action-btn:disabled,
    .action-btn.p-button:disabled,
    .p-button.action-btn:disabled {
      background: #000000 !important;
      background-color: #000000 !important;
      opacity: 0.5 !important;
      cursor: not-allowed !important;
    }

    /* Dark Mode - Blanco */
    @media (prefers-color-scheme: dark) {
      .action-btn,
      .action-btn.p-button,
      .action-btn.p-button-secondary,
      .p-button.action-btn {
        background: #ffffff !important;
        background-color: #ffffff !important;
        color: #000000 !important;
        border: 1px solid #ffffff !important;
        box-shadow: none !important;
      }

      .action-btn:hover:not(:disabled),
      .action-btn.p-button:hover:not(:disabled),
      .action-btn.p-button-secondary:hover:not(:disabled),
      .p-button.action-btn:hover:not(:disabled) {
        background: #e0e0e0 !important;
        background-color: #e0e0e0 !important;
        color: #000000 !important;
        border-color: #e0e0e0 !important;
        box-shadow: none !important;
      }

      .action-btn:disabled,
      .action-btn.p-button:disabled,
      .p-button.action-btn:disabled {
        background: #ffffff !important;
        background-color: #ffffff !important;
      }
    }
  `]
})
export class DriverAssignmentsComponent implements OnInit {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef);
  private apiUrl = environment.apiUrl;

  shipments = signal<DriverShipment[]>([]);
  loading = signal(true);
  showWizard = signal(false);
  selectedShipmentId = signal('');
  selectedShipmentEstado = signal<ShipmentEstado>('programado');
  selectedGuiaId = signal('');

  ngOnInit() {
    this.loadAssignments();
  }

  loadAssignments() {
    this.loading.set(true);
    const user = this.authService.user();
    
    if (!user?.sub) {
      console.error('Usuario no autenticado');
      this.shipments.set([]);
      this.loading.set(false);
      return;
    }
    
    this.http.get<DriverShipment[]>(`${this.apiUrl}/shipments/driver/${user.sub}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          console.log('Datos de embarques recibidos:', data);
          // Módulo Guías: mostrar embarques desde programado hasta costos_pendientes
          // Estados: programado, checklist_salida, en_transito, fotos_entrega, checklist_llegada, costos_pendientes
          const estadosPermitidos = ['programado', 'checklist_salida', 'en_transito', 'fotos_entrega', 'checklist_llegada', 'costos_pendientes'];
          const embarquesFiltrados = data.filter(s => estadosPermitidos.includes(s.estado));
          console.log('Embarques filtrados (guías):', embarquesFiltrados);
          this.shipments.set(embarquesFiltrados);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar embarques:', err);
          this.shipments.set([]);
          this.loading.set(false);
        }
      });
  }

  startDelivery(shipment: DriverShipment) {
    console.log('startDelivery called with shipment:', shipment);
    this.selectedShipmentId.set(shipment.id);
    this.selectedShipmentEstado.set(shipment.estado as ShipmentEstado);
    this.selectedGuiaId.set(shipment.guia_id);
    this.showWizard.set(true);
  }

  onWizardVisibleChange(visible: boolean) {
    console.log('onWizardVisibleChange called:', visible);
    this.showWizard.set(visible);
    if (!visible) {
      console.log('Wizard closing, resetting selectedShipmentId');
      this.selectedShipmentId.set('');
    }
  }

  onDeliveryCompleted() {
    // Recargar la lista de embarques
    this.loadAssignments();
  }

  onEstadoChange(nuevoEstado: ShipmentEstado) {
    // Actualizar el estado local del embarque seleccionado
    this.selectedShipmentEstado.set(nuevoEstado);
    // Recargar la lista para reflejar el cambio
    this.loadAssignments();
  }

  logout() {
    this.authService.logout();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatusLabel(status: string): string {
    const statusMap: Record<string, string> = {
      'generado': 'Generado',
      'programado': 'Programado',
      'checklist_salida': 'Checklist Salida',
      'en_transito': 'En Tránsito',
      'transito': 'En Tránsito',
      'fotos_entrega': 'Fotos Entrega',
      'checklist_llegada': 'Checklist Llegada',
      'costos_pendientes': 'Costos Pendientes',
      'entregado': 'Entregado',
      'completado': 'Completado',
      'completada': 'Completado',
      'cancelado': 'Cancelado',
      'activo': 'Activo',
      'inactivo': 'Inactivo',
      'pendiente': 'Pendiente',
      'en_ruta': 'En Ruta'
    };
    return statusMap[status] || status;
  }

  getStatusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    const severityMap: Record<string, 'success' | 'info' | 'warn' | 'danger' | 'secondary'> = {
      'generado': 'info',
      'programado': 'info',
      'checklist_salida': 'warn',
      'en_transito': 'warn',
      'transito': 'warn',
      'fotos_entrega': 'info',
      'checklist_llegada': 'info',
      'costos_pendientes': 'secondary',
      'entregado': 'success',
      'completado': 'success',
      'completada': 'success',
      'cancelado': 'danger',
      'activo': 'success',
      'inactivo': 'secondary',
      'pendiente': 'secondary',
      'en_ruta': 'warn'
    };
    return severityMap[status] || 'secondary';
  }

  getButtonLabel(status: string): string {
    const labelMap: Record<string, string> = {
      'programado': 'Iniciar Entrega',
      'checklist_salida': 'Continuar Checklist',
      'en_transito': 'Ver Estado',
      'fotos_entrega': 'Subir Fotos',
      'checklist_llegada': 'Completar Llegada',
      'costos_pendientes': 'Completado - Esperando Costos',
      'completado': 'Ver Detalles',
      'entregado': 'Ver Detalles'
    };
    return labelMap[status] || 'Iniciar Entrega';
  }

  getButtonIcon(status: string): string {
    const iconMap: Record<string, string> = {
      'programado': 'pi pi-play',
      'checklist_salida': 'pi pi-clipboard-list',
      'en_transito': 'pi pi-truck',
      'fotos_entrega': 'pi pi-camera',
      'checklist_llegada': 'pi pi-clipboard-check',
      'costos_pendientes': 'pi pi-clock',
      'completado': 'pi pi-check',
      'entregado': 'pi pi-check'
    };
    return iconMap[status] || 'pi pi-play';
  }

  getMobileDisplayCount(): number {
    return Math.min(this.shipments().length, 10);
  }
}
