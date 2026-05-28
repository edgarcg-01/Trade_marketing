import { Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { GuideFormComponent } from './guide-form.component';
import { GuidesService } from '../../core/services/logistics.service';

interface Guide {
  id: string;
  folio: string;
  embarque_id: string;
  embarque_folio?: string;
  chofer_id: string;
  chofer_nombre: string;
  tipo: string;
  estado: string;
  viaticos: number;
  fecha_salida: string;
  fecha_regreso?: string;
  km_salida: number;
  km_regreso?: number;
  monto_maniobras: number;
  monto_ayudantes: number;
  monto_permisos: number;
  monto_talachas: number;
  obs?: string;
  created_at: string;
}

interface StatusOption {
  label: string;
  value: string | null;
}

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TagModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    SelectModule,
    TooltipModule,
    ChipModule,
    IconComponent,
    GuideFormComponent
  ],
  template: `
    <div class="w-full space-y-4 animate-fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-headline text-content-main">Guías de Viaje</h1>
          <p class="text-body text-content-muted mt-1">Control de viáticos y rutas</p>
        </div>
        <p-button
          label="Nueva Guía"
          icon="pi pi-plus"
          styleClass="p-button-brand"
          (onClick)="openForm()" />
      </div>

      <!-- KPIs -->
      <div class="relative grid grid-cols-4 gap-3">
        <div class="kpi-card-trace kpi-card-trace-0 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="file-text" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Total Guías</p>
            <p class="text-xl font-black text-content-main text-center">{{ kpis().total }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-2 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="send" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">En Ruta</p>
            <p class="text-xl font-black text-amber-500 text-center">{{ kpis().enRuta }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-3 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="check-circle" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Completadas</p>
            <p class="text-xl font-black text-green-600 text-center">{{ kpis().completadas }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-0 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="dollar-sign" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Viáticos Total</p>
            <p class="text-xl font-black text-content-main text-center">{{ kpis().viaticos | currency:'MXN':'symbol':'1.0-0' }}</p>
          </div>
        </div>
      </div>

      <!-- Table Card -->
      <div class="card-premium overflow-hidden">
        <!-- Toolbar -->
        <div class="flex items-center justify-between p-3 border-b border-divider bg-surface-ground/50">
          <div class="flex items-center gap-3">
            <p-iconField iconPosition="left">
              <p-inputIcon styleClass="pi pi-search" />
              <input 
                pInputText 
                type="text" 
                [(ngModel)]="searchTerm"
                placeholder="Buscar por número o chofer..."
                class="w-80" />
            </p-iconField>
            
            <p-select 
              [(ngModel)]="selectedStatus"
              [options]="statusOptions"
              optionLabel="label"
              optionValue="value"
              (onChange)="onStatusChange($event)"
              placeholder="Filtrar estado"
              styleClass="w-48" />
          </div>

          <div class="flex items-center gap-2">
            <p-button
              icon="pi pi-filter-slash"
              severity="secondary"
              [text]="true"
              size="small"
              styleClass="action-clear"
              (onClick)="clearFilters()"
              pTooltip="Limpiar filtros" />
            <p-button
              icon="pi pi-refresh"
              severity="secondary"
              [text]="true"
              size="small"
              styleClass="action-export"
              (onClick)="loadGuides()"
              pTooltip="Actualizar datos" />
          </div>
        </div>

        <!-- Table -->
        <p-table 
          #dt
          [value]="filteredGuides()" 
          [loading]="loading()"
          [paginator]="true" 
          [rows]="10"
          [rowsPerPageOptions]="[10, 25, 50]"
          styleClass="p-datatable-modern"
          [rowHover]="true"
          dataKey="id">
          <ng-template #header>
            <tr>
              <th class="w-32 text-center text-label">Número</th>
              <th class="w-28 text-center text-label">Salida</th>
              <th class="text-center text-label">Chofer</th>
              <th class="w-32 text-center text-label">Tipo</th>
              <th class="w-32 text-center text-label">Estado</th>
              <th class="w-36 text-center text-label">Embarque</th>
              <th class="w-36 text-right text-label">Viáticos</th>
              <th class="w-24 text-center text-label">Acciones</th>
            </tr>
          </ng-template>

          <ng-template #body let-guide>
            <tr class="hover-lift">
              <td class="text-center">
                <span class="folio-badge">{{ guide.folio }}</span>
              </td>
              <td class="text-center text-xs text-content-muted">
                {{ guide.fecha_salida | date:'dd/MM/yyyy' }}
              </td>
              <td class="text-center">
                <div class="flex flex-col items-center">
                  <span class="text-sm font-semibold">{{ guide.chofer_nombre || 'Sin chofer' }}</span>
                </div>
              </td>
              <td class="text-center">
                <p-tag 
                  [value]="getTipoLabel(guide.tipo)" 
                  [severity]="getTipoSeverity(guide.tipo)"
                  styleClass="text-[10px] font-bold uppercase" />
              </td>
              <td class="text-center">
                <p-tag 
                  [value]="getEstadoLabel(guide.estado)" 
                  [styleClass]="'text-[10px] uppercase font-bold status-chip status-' + normalizeEstado(guide.estado)"
                  [severity]="getEstadoSeverity(guide.estado)" />
              </td>
              <td class="text-center text-xs text-content-faint">
                <div class="flex items-center justify-center">
                  <span [pTooltip]="guide.embarque_id" tooltipPosition="top" class="folio-badge !bg-content-faint/10">
                    {{ guide.embarque_folio || (guide.embarque_id ? '#' + guide.embarque_id.slice(0, 8) : 'N/A') }}
                  </span>
                </div>
              </td>
              <td class="text-right">
                <p-chip
                  [label]="(guide.viaticos | currency:'MXN':'symbol':'1.0-0') || ''"
                  styleClass="flete-chip" />
              </td>
              <td class="text-center">
                <div class="flex items-center justify-center gap-1">
                  <p-button
                    icon="pi pi-eye"
                    severity="secondary"
                    [text]="true"
                    size="small"
                    styleClass="action-view"
                    (onClick)="viewGuide(guide)"
                    pTooltip="Ver detalle" />
                  <p-button
                    icon="pi pi-pencil"
                    severity="secondary"
                    [text]="true"
                    size="small"
                    styleClass="action-edit"
                    (onClick)="editGuide(guide)"
                    pTooltip="Editar" />
                </div>
              </td>
            </tr>
          </ng-template>

          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="8" class="text-center py-12">
                <div class="flex flex-col items-center gap-3">
                  <app-icon name="database" size="xl" class="text-content-faint"></app-icon>
                  <span class="text-label text-content-faint">No se encontraron guías registradas</span>
                </div>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>

      <!-- Guide Success Dialog -->
      <p-dialog
        [(visible)]="showSuccessDialog"
        [modal]="true"
        [style]="{width: '500px'}"
        [breakpoints]="{'960px': '90vw'}"
        [draggable]="false"
        [resizable]="false"
        [closable]="false"
        [showHeader]="false"
        styleClass="success-dialog">
        <div class="p-6 text-center">
          <!-- Success Icon -->
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <app-icon name="check-circle" size="xl" class="text-green-600"></app-icon>
          </div>

          <h2 class="text-xl font-bold text-content-main mb-2">¡Guía Registrada!</h2>
          <p class="text-sm text-content-muted mb-4">
            La guía <strong>{{ lastSavedGuide()?.folio }}</strong> ha sido creada exitosamente.
          </p>

          <div class="mb-6 p-4 bg-surface-ground rounded-lg border border-divider">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-left">
                <span class="text-content-muted text-xs uppercase">Chofer:</span>
                <p class="font-medium">{{ lastSavedGuide()?.chofer_nombre }}</p>
              </div>
              <div class="text-left">
                <span class="text-content-muted text-xs uppercase">Viáticos:</span>
                <p class="font-medium text-green-600">{{ lastSavedGuide()?.viaticos | currency:'MXN' }}</p>
              </div>
            </div>
          </div>

          <p class="text-sm font-medium text-content-main mb-4">¿Qué deseas hacer ahora?</p>

          <div class="flex flex-col gap-3">
            <p-button
              label="Registrar Costos (Cierre)"
              icon="pi pi-calculator"
              styleClass="p-button-brand w-full"
              (onClick)="goToCosts()" />
            <p-button
              label="Cerrar"
              icon="pi pi-check"
              severity="secondary"
              styleClass="w-full"
              (onClick)="closeSuccessDialog()" />
          </div>
        </div>
      </p-dialog>

      <!-- New Guide Dialog -->
      <p-dialog 
        [visible]="showForm()"
        (visibleChange)="showForm.set($event)" 
        [modal]="true"
        [style]="{width: '100vw', height: '100vh', margin: '0', 'max-height': '100vh'}"
        [contentStyle]="{height: 'calc(100vh - 3.5rem)', padding: '0', overflow: 'hidden'}"
        [dismissableMask]="true"
        [draggable]="false"
        [resizable]="false"
        [maximizable]="false"
        [appendTo]="'body'"
        [closable]="false"
        [showHeader]="false"
        styleClass="guide-dialog guide-dialog-fullscreen">
        <app-guide-form
          [guideToEdit]="selectedGuide()"
          [prefillFromShipment]="prefillFromShipment()"
          (saved)="onGuideSaved($event)"
          (canceled)="onFormCanceled()" />
      </p-dialog>

      <!-- View Guide Detail Modal -->
      <p-dialog
        [visible]="!!selectedGuideForView()"
        (visibleChange)="selectedGuideForView.set(null)"
        [modal]="true"
        [style]="{width: '600px'}"
        [dismissableMask]="true"
        header="Detalle de Guía de Viaje"
        styleClass="guide-detail-dialog">
        @if (selectedGuideForView(); as guide) {
          <div class="space-y-6">
            <!-- Header Info -->
            <div class="grid grid-cols-2 gap-4 pb-4 border-b border-divider">
              <div>
                <span class="text-label-xs text-content-faint block uppercase">Número de Guía</span>
                <span class="text-lg font-black text-content-main">{{ guide.folio }}</span>
              </div>
              <div class="text-right">
                <span class="text-label-xs text-content-faint block uppercase">Estado</span>
                <p-tag [value]="getEstadoLabel(guide.estado)" [severity]="getEstadoSeverity(guide.estado)" />
              </div>
            </div>

            <!-- Main Logistics -->
            <div class="grid grid-cols-2 gap-6 bg-surface-hover/30 p-4 rounded-xl border border-divider">
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <app-icon name="user" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Chofer</span>
                    <span class="text-sm font-bold text-content-main">{{ guide.chofer_nombre || 'N/A' }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <app-icon name="calendar" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Fecha Salida</span>
                    <span class="text-sm font-bold text-content-main">{{ guide.fecha_salida | date:'dd/MM/yyyy' }}</span>
                  </div>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <app-icon name="map-pin" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Tipo de Ruta</span>
                    <span class="text-sm font-bold text-content-main capitalize">{{ guide.tipo }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <app-icon name="hash" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">KM Salida</span>
                    <span class="text-sm font-bold text-content-main">{{ guide.km_salida | number }} km</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Financial Details -->
            <div class="space-y-3">
              <p class="text-label-xs text-content-faint uppercase font-bold tracking-widest">Desglose de Gastos</p>
              <div class="grid grid-cols-2 gap-3">
                <div class="p-3 border border-divider rounded-lg flex justify-between items-center bg-surface-card">
                  <span class="text-xs text-content-muted">Viáticos</span>
                  <span class="font-bold text-content-main">{{ guide.viaticos | currency:'MXN' }}</span>
                </div>
                <div class="p-3 border border-divider rounded-lg flex justify-between items-center bg-surface-card">
                  <span class="text-xs text-content-muted">Maniobras</span>
                  <span class="font-bold text-content-main">{{ guide.monto_maniobras | currency:'MXN' }}</span>
                </div>
                <div class="p-3 border border-divider rounded-lg flex justify-between items-center bg-surface-card">
                  <span class="text-xs text-content-muted">Ayudantes</span>
                  <span class="font-bold text-content-main">{{ guide.monto_ayudantes | currency:'MXN' }}</span>
                </div>
                <div class="p-3 border border-divider rounded-lg flex justify-between items-center bg-surface-card">
                  <span class="text-xs text-content-muted">Permisos/Talachas</span>
                  <span class="font-bold text-content-main">{{ (guide.monto_permisos + guide.monto_talachas) | currency:'MXN' }}</span>
                </div>
              </div>
            </div>

            <!-- Observations -->
            @if (guide.obs) {
              <div class="p-4 bg-amber-50/50 border border-amber-100 rounded-xl">
                <span class="text-label-xs text-amber-700 block uppercase mb-1">Observaciones</span>
                <p class="text-sm text-content-main italic">"{{ guide.obs }}"</p>
              </div>
            }

            <div class="flex justify-end pt-4 border-t border-divider">
              <p-button label="Cerrar" severity="secondary" (onClick)="selectedGuideForView.set(null)" styleClass="px-6" />
            </div>
          </div>
        }
      </p-dialog>
    </div>
  `
})
export class GuidesComponent implements OnInit {
  private guidesService = inject(GuidesService);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  guides = signal<Guide[]>([]);
  loading = signal(true);
  showForm = signal(false);
  selectedGuide = signal<Guide | null>(null);
  selectedGuideForView = signal<Guide | null>(null);
  prefillFromShipment = signal<any>(null);
  showSuccessDialog = signal(false);
  lastSavedGuide = signal<Guide | null>(null);
  hoveredKpi = signal(-1);
  kpiVisible = signal(false);
  private kpiTimer: any;
  searchTerm = '';

  kpis = signal({
    total: 0,
    enRuta: 0,
    completadas: 0,
    viaticos: 0
  });

  selectedStatus = signal<string | null>(null);
  statusOptions: StatusOption[] = [
    { label: 'Todos los estados', value: null },
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'En Ruta', value: 'en_ruta' },
    { label: 'Completada', value: 'completada' },
    { label: 'Cancelada', value: 'cancelada' }
  ];

  ngOnInit() {
    this.loadGuides();

    // Check if we have prefill data from a newly created shipment
    const prefillData = sessionStorage.getItem('prefill_guide_from_shipment');
    if (prefillData) {
      try {
        const data = JSON.parse(prefillData);
        this.prefillFromShipment.set(data);
        this.openForm();
        // Clear the sessionStorage so it doesn't open again on refresh
        sessionStorage.removeItem('prefill_guide_from_shipment');
      } catch (e) {
        console.error('Error parsing prefill data', e);
      }
    }
  }

  onStatusChange(event: any) {
    this.loadGuides(); // Should filter in a real app, here we re-fetch or filter signal
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedStatus.set(null);
    this.loadGuides();
  }


  loadGuides() {
    this.loading.set(true);
    this.guidesService.getGuides().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        // Convertir valores numéricos de string a number
        const normalizedData = data.map((g: any) => ({
          ...g,
          viaticos: parseFloat(String(g.viaticos)) || 0,
          monto_maniobras: parseFloat(String(g.monto_maniobras)) || 0,
          monto_ayudantes: parseFloat(String(g.monto_ayudantes)) || 0,
          monto_permisos: parseFloat(String(g.monto_permisos)) || 0,
          monto_talachas: parseFloat(String(g.monto_talachas)) || 0
        }));
        this.guides.set(normalizedData);
        this.calculateKPIs();
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  calculateKPIs() {
    const data = this.guides();
    this.kpis.set({
      total: data.length,
      enRuta: data.filter(g => g.estado === 'en_ruta').length,
      completadas: data.filter(g => g.estado === 'completada').length,
      viaticos: data.reduce((sum, g) => sum + (parseFloat(String(g.viaticos)) || 0), 0)
    });
  }

  filteredGuides() {
    if (!this.searchTerm) return this.guides();
    const term = this.searchTerm.toLowerCase();
    return this.guides().filter(g =>
      g.folio?.toLowerCase().includes(term) ||
      g.chofer_nombre?.toLowerCase().includes(term)
    );
  }

  openForm() {
    this.selectedGuide.set(null);
    this.showForm.set(true);
  }

  editGuide(guide: Guide) {
    this.selectedGuide.set(guide);
    this.showForm.set(true);
  }

  viewGuide(guide: Guide) {
    this.selectedGuideForView.set(guide);
  }

  onGuideSaved(guide?: Guide) {
    if (guide) {
      this.lastSavedGuide.set(guide);
      this.showSuccessDialog.set(true);
    }
    this.showForm.set(false);
    this.selectedGuide.set(null);
    this.prefillFromShipment.set(null);
    this.loadGuides();
  }

  onFormCanceled() {
    this.showForm.set(false);
    this.selectedGuide.set(null);
    this.prefillFromShipment.set(null);
  }

  // KPI slider methods
  closeSuccessDialog() {
    this.showSuccessDialog.set(false);
    this.lastSavedGuide.set(null);
  }

  goToCosts() {
    const guide = this.lastSavedGuide();
    if (guide && guide.embarque_id) {
      sessionStorage.setItem('prefill_cost_from_guide', JSON.stringify({
        embarque_id: guide.embarque_id,
        embarque_folio: guide.embarque_folio
      }));
      this.showSuccessDialog.set(false);
      this.router.navigate(['/costs']);
    } else {
      this.closeSuccessDialog();
    }
  }

  onKpiEnter(index: number) {
    clearTimeout(this.kpiTimer);
    this.kpiVisible.set(false);
    this.kpiTimer = setTimeout(() => {
      this.hoveredKpi.set(index);
      this.kpiVisible.set(true);
    }, 120);
  }

  onKpiLeave() {
    clearTimeout(this.kpiTimer);
    this.kpiVisible.set(false);
    this.kpiTimer = setTimeout(() => {
      this.hoveredKpi.set(-1);
    }, 120);
  }

  completeGuide(id: string) {
    this.guidesService.updateStatus(id, 'completada').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => this.loadGuides()
    });
  }

  getEstadoSeverity(estado: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (estado) {
      case 'completada': return 'success';
      case 'en_ruta': return 'info';
      case 'cancelada': return 'danger';
      default: return 'secondary';
    }
  }

  getEstadoLabel(estado: string): string {
    switch (estado) {
      case 'completada': return 'Completada';
      case 'en_ruta': return 'En Ruta';
      case 'cancelada': return 'Cancelada';
      case 'pendiente': return 'Pendiente';
      default: return estado;
    }
  }

  normalizeEstado(estado: string): string {
    // Normalizar estado para asegurar consistencia con clases CSS
    const estadoLower = estado.toLowerCase().replace(/ /g, '_');
    const estadoMap: Record<string, string> = {
      'completada': 'completado',
      'entregado': 'completado',
      'en_ruta': 'en_transito',
      'cancelada': 'cancelado',
      'pendiente': 'programado'
    };
    return estadoMap[estadoLower] || estadoLower;
  }

  getTipoSeverity(tipo: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (tipo) {
      case 'local': return 'info';
      case 'foraneo': return 'warn';
      case 'especial': return 'danger';
      default: return 'secondary';
    }
  }

  getTipoLabel(tipo: string): string {
    switch (tipo) {
      case 'local': return 'Local';
      case 'foraneo': return 'Foráneo';
      case 'especial': return 'Especial';
      default: return tipo || 'N/A';
    }
  }

  formatMoney(value: number): string {
    return new Intl.NumberFormat('es-MX', { 
      style: 'currency', 
      currency: 'MXN',
      maximumFractionDigits: 0
    }).format(value || 0);
  }
}
