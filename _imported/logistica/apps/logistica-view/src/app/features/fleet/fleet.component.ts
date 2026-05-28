import { Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { FleetService } from '../../core/services/logistics.service';
import { FleetFormComponent } from './fleet-form.component';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextarea } from 'primeng/inputtextarea';
import { DatePipe } from '@angular/common';

interface Vehicle {
  id: string;
  placa: string;
  modelo: string;
  marca: string;
  anio: number;
  tipo: string;
  capacidad_kg: number;
  capacidad_cajas: number;
  estado: string;
  ultimo_mantenimiento?: string;
  proximo_mantenimiento?: string;
  km_actual: number;
  observaciones?: string;
}

@Component({
  selector: 'app-fleet',
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
    IconComponent,
    FleetFormComponent,
    ReactiveFormsModule,
    SelectButtonModule,
    InputNumberModule,
    InputTextarea
  ],
  providers: [DatePipe],
  template: `
    <div class="w-full space-y-4 animate-fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-headline text-content-main">Control de <span class="text-content-muted">Flotilla</span></h1>
          <p class="text-body text-content-muted mt-1">Gestión de unidades y mantenimiento</p>
        </div>
        <p-button 
          label="Nueva Unidad" 
          icon="pi pi-plus"
          styleClass="p-button-brand"
          (onClick)="openForm()" />
      </div>

      <!-- KPIs -->
      <div class="relative grid grid-cols-4 gap-3">
        <div class="kpi-card-trace kpi-card-trace-0 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="truck" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Total Unidades</p>
            <p class="text-xl font-black text-content-main text-center">{{ kpis().total }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-3 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="check-circle" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Unidades Activas</p>
            <p class="text-xl font-black text-green-600 text-center">{{ kpis().activas }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-2 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="tool" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Mantenimiento</p>
            <p class="text-xl font-black text-amber-500 text-center">{{ kpis().mantenimiento }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-0 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="package" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Capacidad Total</p>
            <p class="text-xl font-black text-content-main text-center">{{ kpis().capacidadTotal | number }} kg</p>
          </div>
        </div>
      </div>

      <!-- Table & Filters Card -->
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
                placeholder="Buscar por placa o modelo..."
                class="w-80" />
            </p-iconField>
            
            <p-select 
              [(ngModel)]="estadoFilter"
              [options]="estadoFilterOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Filtrar por estado"
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
              (onClick)="loadFleet()"
              pTooltip="Actualizar datos" />
          </div>
        </div>

        <!-- Table -->
        <p-table
          [value]="filteredVehicles()"
          [loading]="loading()"
          [paginator]="true"
          [rows]="10"
          [rowsPerPageOptions]="[10, 25, 50]"
          styleClass="p-datatable-modern"
          [rowHover]="true">
          <ng-template #header>
            <tr>
              <th class="w-32 text-center text-label">Placa</th>
              <th class="text-center text-label">Unidad</th>
              <th class="w-32 text-center text-label">Categoría</th>
              <th class="w-40 text-right text-label">Capacidad</th>
              <th class="w-32 text-center text-label">Kilometraje</th>
              <th class="w-32 text-center text-label">Estado</th>
              <th class="w-24 text-center text-label">Acciones</th>
            </tr>
          </ng-template>

          <ng-template #body let-vehicle>
            <tr class="hover-lift">
              <td class="text-center">
                <span class="folio-badge">{{ vehicle.placa }}</span>
              </td>
              <td class="text-center">
                <div class="flex flex-col items-center">
                  <span class="font-bold text-content-main">{{ vehicle.marca }} {{ vehicle.modelo }}</span>
                  <span class="text-[10px] text-content-faint uppercase font-bold">{{ vehicle.anio }}</span>
                </div>
              </td>
              <td class="text-center">
                <p-tag 
                  [value]="getTipoLabel(vehicle.tipo)" 
                  [severity]="getTipoSeverity(vehicle.tipo)"
                  styleClass="text-[9px] font-bold uppercase" />
              </td>
              <td class="text-right">
                <div class="flex flex-col items-end">
                  <span class="font-mono text-sm font-bold text-content-main">
                    {{ vehicle.capacidad_kg | number }} <span class="text-[10px] text-content-muted">KG</span>
                  </span>
                  <span class="font-mono text-[10px] text-content-faint">{{ vehicle.capacidad_cajas }} CAJAS</span>
                </div>
              </td>
              <td class="text-center">
                <div class="flex flex-col items-center">
                  <span class="font-mono text-xs font-semibold text-content-main">{{ vehicle.km_actual | number }} km</span>
                  <span class="text-[9px] text-content-faint uppercase font-bold mt-1">
                    {{ vehicle.proximo_mantenimiento | date:'dd/MM/yy' }}
                  </span>
                </div>
              </td>
              <td class="text-center">
                <p-tag 
                  [value]="getEstadoLabel(vehicle.estado)" 
                  [styleClass]="'text-[10px] uppercase font-bold status-chip status-' + (vehicle.estado === 'activa' ? 'completado' : vehicle.estado === 'mantenimiento' ? 'en_transito' : 'cancelado')"
                  [severity]="getEstadoSeverity(vehicle.estado)" />
              </td>
              <td class="text-center">
                   <p-button
                    icon="pi pi-eye"
                    severity="secondary"
                    [text]="true"
                    size="small"
                    styleClass="action-view"
                    (onClick)="viewVehicle(vehicle)"
                    pTooltip="Detalle" />
                  <p-button
                    icon="pi pi-pencil"
                    severity="secondary"
                    [text]="true"
                    size="small"
                    styleClass="action-edit"
                    (onClick)="editVehicle(vehicle)"
                    pTooltip="Editar" />
                  <p-button
                    icon="pi pi-wrench"
                    severity="secondary"
                    [text]="true"
                    size="small"
                    styleClass="action-complete"
                    (onClick)="registrarMantenimiento(vehicle.id)"
                    pTooltip="Mantenimiento" />
              </td>
            </tr>
          </ng-template>

          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="7" class="text-center py-12">
                <div class="flex flex-col items-center gap-3">
                  <app-icon name="truck" size="xl" class="text-content-faint"></app-icon>
                  <span class="text-label text-content-faint">No hay unidades en el sistema</span>
                </div>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>

      <!-- New Vehicle Dialog -->
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
        styleClass="fleet-dialog fleet-dialog-fullscreen">
        <app-fleet-form 
          [vehicleToEdit]="selectedVehicle()"
          (saved)="onFleetSaved()" 
          (canceled)="showForm.set(false)" />
      </p-dialog>

      <!-- View Vehicle Detail Modal -->
      <p-dialog
        [visible]="!!selectedVehicleForView()"
        (visibleChange)="selectedVehicleForView.set(null)"
        [modal]="true"
        [style]="{width: '600px'}"
        [dismissableMask]="true"
        header="Ficha Técnica de Unidad"
        styleClass="fleet-detail-dialog">
        @if (selectedVehicleForView(); as vehicle) {
          <div class="space-y-6">
            <!-- Header Info -->
            <div class="grid grid-cols-2 gap-4 pb-4 border-b border-divider">
              <div class="flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-divider bg-surface-ground">
                  <app-icon name="truck" size="md" class="text-brand"></app-icon>
                </div>
                <div>
                  <span class="text-label-xs text-content-faint block uppercase">Placa</span>
                  <span class="text-lg font-black text-content-main">{{ vehicle.placa }}</span>
                </div>
              </div>
              <div class="text-right">
                <span class="text-label-xs text-content-faint block uppercase">Estado</span>
                <p-tag [value]="getEstadoLabel(vehicle.estado)" [severity]="getEstadoSeverity(vehicle.estado)" />
              </div>
            </div>

            <!-- Technical Info -->
            <div class="grid grid-cols-2 gap-6 bg-surface-hover/30 p-4 rounded-xl border border-divider">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <app-icon name="info" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Marca / Modelo</span>
                    <span class="text-sm font-bold text-content-main">{{ vehicle.marca }} {{ vehicle.modelo }} ({{ vehicle.anio }})</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <app-icon name="tool" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Kilometraje Actual</span>
                    <span class="text-sm font-bold text-content-main">{{ vehicle.km_actual | number }} km</span>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <app-icon name="package" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Capacidad Máxima</span>
                    <span class="text-sm font-bold text-content-main">{{ vehicle.capacidad_kg | number }} kg / {{ vehicle.capacidad_cajas }} cajas</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <app-icon name="activity" size="sm" class="text-content-muted"></app-icon>
                  <div>
                    <span class="text-[10px] text-content-faint block uppercase">Tipo de Activo</span>
                    <span class="text-sm font-bold text-content-main capitalize">{{ vehicle.tipo }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Maintenance Info -->
            <div class="space-y-3">
              <p class="text-label-xs text-content-faint uppercase font-bold tracking-widest px-1">Historial de Servicio</p>
              <div class="grid grid-cols-3 gap-3">
                <div class="p-3 border border-divider rounded-lg bg-surface-card">
                  <span class="text-[10px] text-content-faint block uppercase mb-1">Último Servicio</span>
                  <span class="text-sm font-bold text-content-main">{{ vehicle.ultimo_mantenimiento | date:'dd/MM/yyyy' }}</span>
                </div>
                <div class="p-3 border border-divider rounded-lg bg-surface-card">
                  <span class="text-[10px] text-content-faint block uppercase mb-1">Próximo KM</span>
                  <span class="text-sm font-bold text-blue-600 font-mono">{{ (vehicle.km_actual + 5000) | number }} km</span>
                </div>
                <div class="p-3 border border-divider rounded-lg bg-surface-card">
                  <span class="text-[10px] text-content-faint block uppercase mb-1">Fecha Sugerida</span>
                  <span class="text-sm font-bold text-amber-600">{{ vehicle.proximo_mantenimiento | date:'dd/MM/yyyy' }}</span>
                </div>
              </div>
            </div>

            <!-- Alert if Maintenance is needed -->
            @if (isMantenimientoProximo(vehicle)) {
               <div class="p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-3 animate-pulse">
                <app-icon name="alert-triangle" size="md" class="text-amber-600"></app-icon>
                <div>
                  <p class="text-sm font-black text-amber-900 uppercase">Unidad requiere atención</p>
                  <p class="text-xs text-amber-700 font-bold">Esta unidad está próxima a superar el límite de kilometraje para servicio preventivo.</p>
                </div>
              </div>
            }

            <div class="flex justify-end pt-4 border-t border-divider">
              <p-button label="Registrar Servicio" icon="pi pi-wrench" (onClick)="registrarMantenimiento(vehicle.id)" styleClass="mr-auto" />
              <p-button label="Cerrar" severity="secondary" (onClick)="selectedVehicleForView.set(null)" styleClass="px-6" />
            </div>
          </div>
        }
      </p-dialog>

      <!-- Maintenance Dialog -->
      <p-dialog
        [visible]="!!selectedVehicleForMaint()"
        (visibleChange)="selectedVehicleForMaint.set(null)"
        [modal]="true"
        [style]="{width: '450px'}"
        [dismissableMask]="true"
        header="Registrar Servicio de Mantenimiento"
        styleClass="maint-dialog">
        
        @if (selectedVehicleForMaint(); as vehicle) {
          <form [formGroup]="maintForm" (ngSubmit)="guardarMantenimiento()" class="space-y-5 pt-2">
            <div class="p-4 bg-surface-hover/30 rounded-xl border border-divider mb-4">
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg border border-divider bg-surface-card">
                  <app-icon name="truck" size="sm" class="text-brand"></app-icon>
                </div>
                <div>
                  <span class="text-xs font-black text-content-main block">{{ vehicle.marca }} {{ vehicle.modelo }}</span>
                  <span class="text-[10px] text-content-faint uppercase font-bold tracking-widest">{{ vehicle.placa }}</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="text-label-xs uppercase font-bold text-content-muted">KM Actual (Entrada)</label>
                <p-inputNumber formControlName="km_actual" mode="decimal" styleClass="w-full font-mono" />
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-label-xs uppercase font-bold text-content-muted">Costo del Servicio</label>
                <p-inputNumber formControlName="costo" mode="currency" currency="MXN" locale="es-MX" styleClass="w-full font-mono" />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-label-xs uppercase font-bold text-content-muted">Tipo de Mantenimiento</label>
              <p-selectButton [options]="maintTypeOptions" formControlName="tipo" optionLabel="label" optionValue="value" styleClass="w-full" />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-label-xs uppercase font-bold text-content-muted">Observaciones</label>
              <textarea pInputTextarea formControlName="observaciones" rows="3" class="w-full text-sm resize-none" placeholder="Detalle las reparaciones realizadas..."></textarea>
            </div>

            <div class="flex items-center gap-3 pt-2">
              <p-button label="Cancelar" severity="secondary" [text]="true" (onClick)="selectedVehicleForMaint.set(null)" class="flex-1" />
              <p-button 
                type="submit" 
                label="Registrar Servicio" 
                icon="pi pi-check" 
                [loading]="maintSaving()" 
                [disabled]="maintForm.invalid" 
                styleClass="p-button-brand flex-1" />
            </div>
          </form>
        }
      </p-dialog>
    </div>
  `
})
export class FleetComponent implements OnInit {
  private fleetService = inject(FleetService);
  private destroyRef = inject(DestroyRef);
  private messageService = inject(MessageService);
  private fb = inject(FormBuilder);

  vehicles = signal<Vehicle[]>([]);
  loading = signal(true);
  showForm = signal(false);
  selectedVehicle = signal<Vehicle | null>(null);
  selectedVehicleForView = signal<Vehicle | null>(null);
  selectedVehicleForMaint = signal<Vehicle | null>(null);
  maintSaving = signal(false);
  searchTerm = '';
  estadoFilter = '';

  maintForm: FormGroup;
  readonly maintTypeOptions = [
    { label: 'Preventivo', value: 'preventivo' },
    { label: 'Correctivo', value: 'correctivo' }
  ];

  readonly estadoFilterOptions = [
    { label: 'Activa', value: 'activa' },
    { label: 'En Mantenimiento', value: 'mantenimiento' },
    { label: 'Inactiva', value: 'inactiva' }
  ];

  kpis = signal({
    total: 0,
    activas: 0,
    mantenimiento: 0,
    capacidadTotal: 0
  });

  hoveredKpi = signal(-1);
  kpiVisible = signal(false);
  private kpiTimer: any;

  constructor() {
    this.maintForm = this.fb.group({
      km_actual: [0, [Validators.required, Validators.min(0)]],
      costo: [0, Validators.min(0)],
      tipo: ['preventivo', Validators.required],
      observaciones: ['']
    });
  }

  ngOnInit() {
    this.loadFleet();
  }

  loadFleet() {
    this.loading.set(true);
    console.log('[Fleet] Cargando datos desde:', this.fleetService['apiUrl']);
    this.fleetService.findAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        console.log('[Fleet] Datos recibidos:', data.length, 'vehículos');
        // Map database data to Vehicle structure
        const vehicles = data.map((d: any) => ({
          id: d.id,
          placa: d.placa,
          modelo: d.modelo,
          marca: d.modelo, // Using modelo as marca since marca field doesn't exist in DB
          anio: 2024, // Default year since anio field doesn't exist in DB
          tipo: d.tipo || 'camión',
          capacidad_kg: d.capacidad_kg || 0,
          capacidad_cajas: d.capacidad_cajas || 0,
          estado: d.activo ? 'activa' : (d.estado === 'mantenimiento' ? 'mantenimiento' : 'inactiva'),
          ultimo_mantenimiento: d.ultimo_mantenimiento || null,
          proximo_mantenimiento: d.proximo_mantenimiento || null,
          km_actual: 0, // Default since km_actual field doesn't exist in DB
          observaciones: d.observaciones || ''
        }));
        this.vehicles.set(vehicles);
        this.calculateKPIs();
        this.loading.set(false);
      },
      error: (err) => {
        console.error('[Fleet] Error al cargar datos:', err);
        this.loading.set(false);
      }
    });
  }

  clearFilters() {
    this.searchTerm = '';
    this.estadoFilter = '';
    this.loadFleet();
  }

  calculateKPIs() {
    const data = this.vehicles();
    this.kpis.set({
      total: data.length,
      activas: data.filter(v => v.estado === 'activa').length,
      mantenimiento: data.filter(v => v.estado === 'mantenimiento').length,
      capacidadTotal: data.reduce((sum, v) => {
        const capacidad = typeof v.capacidad_kg === 'string' 
          ? parseFloat(v.capacidad_kg) || 0 
          : (v.capacidad_kg || 0);
        return sum + capacidad;
      }, 0)
    });
  }


  filteredVehicles() {
    let result = this.vehicles();
    
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(v => 
        v.placa?.toLowerCase().includes(term) ||
        v.modelo?.toLowerCase().includes(term) ||
        v.marca?.toLowerCase().includes(term)
      );
    }

    if (this.estadoFilter) {
      result = result.filter(v => v.estado === this.estadoFilter);
    }

    return result;
  }

  openForm() {
    this.selectedVehicle.set(null);
    this.showForm.set(true);
  }

  editVehicle(vehicle: Vehicle) {
    this.selectedVehicle.set(vehicle);
    this.showForm.set(true);
  }

  viewVehicle(vehicle: Vehicle) {
    this.selectedVehicleForView.set(vehicle);
  }

  onFleetSaved() {
    this.showForm.set(false);
    this.loadFleet();
  }

  // KPI slider methods
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

  registrarMantenimiento(id: string) {
    const vehicle = this.vehicles().find(v => v.id === id);
    if (vehicle) {
      this.maintForm.patchValue({
        km_actual: vehicle.km_actual,
        costo: 0,
        tipo: 'preventivo',
        observaciones: ''
      });
      this.selectedVehicleForMaint.set(vehicle);
    }
  }

  guardarMantenimiento() {
    if (this.maintForm.invalid || this.maintSaving()) return;

    const vehicle = this.selectedVehicleForMaint();
    if (!vehicle) return;

    this.maintSaving.set(true);
    const data = this.maintForm.value;
    
    // Preparar actualización de la unidad
    const updateData = {
      km_actual: data.km_actual,
      ultimo_mantenimiento: new Date(),
      // Sugerir próximo mantenimiento en 5000km
      proximo_mantenimiento: new Date(new Date().setMonth(new Date().getMonth() + 3)),
      estado: 'activa', // Al registrar mantenimiento asumimos que queda activa
      observaciones: data.observaciones
    };

    this.fleetService.update(vehicle.id, updateData).subscribe({
      next: () => {
        this.maintSaving.set(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Mantenimiento Registrado',
          detail: `Se actualizó la unidad ${vehicle.placa} correctamente.`,
          life: 3000
        });
        this.selectedVehicleForMaint.set(null);
        this.loadFleet();
      },
      error: () => {
        this.maintSaving.set(false);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo registrar el mantenimiento.',
          life: 5000
        });
      }
    });
  }

  isMantenimientoProximo(vehicle: Vehicle): boolean {
    if (!vehicle.proximo_mantenimiento) return false;
    const proximo = new Date(vehicle.proximo_mantenimiento);
    const hoy = new Date();
    const diffDias = Math.ceil((proximo.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    return diffDias <= 7; // Alerta si faltan 7 días o menos
  }

  getEstadoSeverity(estado: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (estado) {
      case 'activa': return 'success';
      case 'mantenimiento': return 'warn';
      case 'inactiva': return 'danger';
      default: return 'secondary';
    }
  }

  getEstadoLabel(estado: string): string {
    switch (estado) {
      case 'activa': return 'Activa';
      case 'mantenimiento': return 'En Mantenimiento';
      case 'inactiva': return 'Inactiva';
      default: return estado;
    }
  }

  getTipoSeverity(tipo: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (tipo) {
      case 'camion': return 'info';
      case 'camioneta': return 'success';
      case 'rabon': return 'warn';
      case 'trailer': return 'danger';
      default: return 'secondary';
    }
  }

  getTipoLabel(tipo: string): string {
    switch (tipo) {
      case 'camion': return 'Camión';
      case 'camioneta': return 'Camioneta';
      case 'rabon': return 'Rabón';
      case 'trailer': return 'Tráiler';
      default: return tipo || 'N/A';
    }
  }
}
