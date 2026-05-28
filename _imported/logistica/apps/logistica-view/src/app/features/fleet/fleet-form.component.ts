import { Component, OnInit, inject, signal, output, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextarea } from 'primeng/inputtextarea';
import { SelectModule } from 'primeng/select';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { PopoverModule } from 'primeng/popover';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { FleetService } from '../../core/services/logistics.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fleet-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextarea,
    SelectModule,
    CalendarModule,
    CheckboxModule,
    PopoverModule,
    IconComponent
  ],
  template: `
    <div class="flex h-full min-h-0 flex-col bg-surface-card">
      <form [formGroup]="fleetForm" (ngSubmit)="onSubmit()" class="flex-1 overflow-y-auto p-3">
        <div class="mb-2 flex items-center justify-between rounded-lg border border-divider bg-surface-ground px-3 py-1.5">
          <div class="flex items-center gap-2">
            <div class="flex h-7 w-7 items-center justify-center rounded-md border border-divider bg-surface-card">
              <app-icon name="truck" size="sm" class="text-brand"></app-icon>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <p class="text-sm font-black text-content-main leading-tight uppercase tracking-wider">Nueva Unidad de Flotilla</p>
                <p-button 
                  icon="pi pi-question-circle" 
                  [text]="true" 
                  severity="secondary" 
                  styleClass="p-0 h-4 w-4" 
                  (click)="op.toggle($event)" />
              </div>
              <p class="text-[10px] text-content-muted leading-tight uppercase font-bold tracking-tighter">Gestión de activos y mantenimiento preventivo</p>
            </div>

            <p-popover #op>
              <div class="p-3 w-72">
                <div class="flex items-center gap-2 mb-2">
                  <app-icon name="info-circle" size="sm" class="text-brand-orange"></app-icon>
                  <span class="font-bold text-sm">Ayuda de Flotilla</span>
                </div>
                <div class="text-xs leading-relaxed text-content-muted">
                  Registra los datos técnicos del vehículo para habilitarlo en la asignación de viajes.
                  <br><br>
                  <b>Importante:</b>
                  <ul class="pl-4 mt-1 list-disc font-medium">
                    <li>Verificar el VIN y número de motor.</li>
                    <li>Definir capacidades de carga reales.</li>
                    <li>Programar la próxima fecha de servicio.</li>
                  </ul>
                </div>
              </div>
            </p-popover>
          </div>
          <p-button
            type="button"
            severity="secondary"
            [text]="true"
            styleClass="h-7 w-7"
            (onClick)="canceled.emit()">
            <ng-template pTemplate="icon">
              <app-icon name="close" size="sm"></app-icon>
            </ng-template>
          </p-button>
        </div>

        @if (submitError()) {
          <div class="mb-4 rounded-lg border border-red-400/40 bg-red-100/40 px-4 py-3 text-sm text-content-main">
            <app-icon name="exclamation-triangle" size="sm" class="mr-2"></app-icon>{{ submitError() }}
          </div>
        }

        <div class="shipment-fit-screen grid h-full grid-cols-12 gap-3">
          
          <!-- COLUMNA IZQUIERDA -->
          <div class="col-span-9 space-y-3 overflow-y-auto pr-2 shipment-scroll-column">
            
            <!-- Información Principal -->
            <div class="card-premium p-4 border-2">
              <div class="flex items-center gap-2 mb-3 pb-2 border-b border-divider">
                <app-icon name="file-edit" size="md" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Identificación del Vehículo</span>
              </div>

              <div class="grid grid-cols-4 gap-3">
                <div class="col-span-1 flex flex-col gap-1">
                  <label for="placa" class="text-label mb-1">Placa <span class="text-red-500">*</span></label>
                  <input pInputText formControlName="placa" id="placa" placeholder="ABC-123" 
                    [ngClass]="{'p-invalid ng-dirty': isInvalid('placa')}"
                    class="w-full text-base font-bold uppercase" />
                </div>

                <div class="col-span-1 flex flex-col gap-1">
                  <label for="marca" class="text-label mb-1">Marca <span class="text-red-500">*</span></label>
                  <p-select formControlName="marca" id="marca" [options]="marcaOptions" optionLabel="label" optionValue="value" 
                    [ngClass]="{'p-invalid ng-dirty': isInvalid('marca')}"
                    placeholder="Seleccionar..." styleClass="w-full" [filter]="true" [appendTo]="'body'" />
                </div>

                <div class="col-span-1 flex flex-col gap-1">
                  <label for="modelo" class="text-label mb-1">Modelo <span class="text-red-500">*</span></label>
                  <input pInputText formControlName="modelo" id="modelo" 
                    [ngClass]="{'p-invalid ng-dirty': isInvalid('modelo')}"
                    class="w-full text-base" />
                </div>

                <div class="col-span-1 flex flex-col gap-1">
                  <label for="anio" class="text-label mb-1">Año</label>
                  <p-inputNumber formControlName="anio" id="anio" [useGrouping]="false" styleClass="w-full" />
                </div>

                <div class="col-span-2 flex flex-col gap-1">
                  <label for="tipo" class="text-label mb-1">Tipo de Vehículo</label>
                  <p-select formControlName="tipo" id="tipo" [options]="tipoOptions" optionLabel="label" optionValue="value" 
                    placeholder="Seleccionar..." styleClass="w-full" [appendTo]="'body'" />
                </div>

                <div class="col-span-2 flex flex-col gap-1">
                  <label for="estado" class="text-label mb-1">Estado Operativo</label>
                  <p-select formControlName="estado" id="estado" [options]="estadoOptions" optionLabel="label" optionValue="value" styleClass="w-full" />
                </div>

                <div class="col-span-2 flex flex-col gap-1">
                  <label for="numero_serie" class="text-label mb-1">VIN / Serie</label>
                  <input pInputText formControlName="numero_serie" id="numero_serie" class="w-full font-mono text-sm" />
                </div>

                <div class="col-span-2 flex flex-col gap-1">
                  <label for="numero_motor" class="text-label mb-1">Número de Motor</label>
                  <input pInputText formControlName="numero_motor" id="numero_motor" class="w-full font-mono text-sm" />
                </div>
              </div>
            </div>

            <!-- Capacidades -->
            <div class="card-premium p-4">
              <div class="flex items-center gap-2 mb-3 pb-2 border-b border-divider">
                <app-icon name="box" size="md" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Capacidades y Rendimiento</span>
              </div>

              <div class="grid grid-cols-4 gap-3">
                <div class="flex flex-col gap-1">
                  <label for="capacidad_kg" class="text-label mb-1">Capacidad (kg)</label>
                  <p-inputNumber formControlName="capacidad_kg" id="capacidad_kg" styleClass="w-full font-mono font-bold" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="capacidad_cajas" class="text-label mb-1">Capacidad (cajas)</label>
                  <p-inputNumber formControlName="capacidad_cajas" id="capacidad_cajas" styleClass="w-full font-mono font-bold" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="km_actual" class="text-label mb-1">Kilometraje Actual</label>
                  <p-inputNumber formControlName="km_actual" id="km_actual" styleClass="w-full font-mono text-blue-600 font-bold" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="rendimiento_kml" class="text-label mb-1">Km/L Promedio</label>
                  <p-inputNumber formControlName="rendimiento_kml" id="rendimiento_kml" [minFractionDigits]="2" styleClass="w-full font-mono" />
                </div>
              </div>
            </div>

            <!-- Mantenimiento -->
            <div class="card-premium p-4">
              <div class="flex items-center gap-2 mb-3 pb-2 border-b border-divider">
                <app-icon name="tool" size="md" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Tiempos de Servicio</span>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="flex flex-col gap-1">
                  <label for="ultimo_mantenimiento" class="text-label mb-1">Último Servicio</label>
                  <p-calendar formControlName="ultimo_mantenimiento" id="ultimo_mantenimiento" [showIcon]="true" styleClass="w-full" [appendTo]="'body'" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="proximo_mantenimiento" class="text-label mb-1">Próximo Servicio</label>
                  <p-calendar formControlName="proximo_mantenimiento" id="proximo_mantenimiento" [showIcon]="true" styleClass="w-full" [appendTo]="'body'" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="km_mantenimiento" class="text-label mb-1">Margen KM Servicio</label>
                  <p-inputNumber formControlName="km_mantenimiento" id="km_mantenimiento" styleClass="w-full font-mono" />
                </div>
              </div>
            </div>
          </div>

          <!-- COLUMNA DERECHA -->
          <div class="col-span-3 space-y-3">
            <div class="card-premium sticky top-0 flex min-h-[35rem] flex-col p-4 bg-surface-ground/30">
              <div class="flex items-center gap-2 mb-5 pb-3 border-b border-divider">
                <app-icon name="activity" size="lg" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Diagnóstico de Unidad</span>
              </div>

              <div class="space-y-3">
                <div class="flex justify-between items-center p-3 bg-surface-card border border-divider rounded-xl">
                  <span class="text-[10px] font-black uppercase text-content-muted">Estado</span>
                  <span class="status-chip status-{{ fleetForm.get('estado')?.value }} !text-[10px]">
                    {{ fleetForm.get('estado')?.value || 'ACTIVA' }}
                  </span>
                </div>

                <div class="flex justify-between items-center p-3 bg-surface-card border border-divider rounded-xl">
                  <span class="text-[10px] font-black uppercase text-content-muted">Rendimiento</span>
                  <span class="text-xl font-bold text-content-main font-mono">
                    {{ (fleetForm.get('rendimiento_kml')?.value || 0) | number:'1.1-1' }} <small class="text-[10px] font-medium text-content-faint uppercase">km/l</small>
                  </span>
                </div>

                <div class="pt-2">
                   <p class="text-[9px] font-black uppercase text-content-faint tracking-widest mb-2">Carga Útil</p>
                   <div class="p-4 bg-blue-50/50 border border-blue-100 rounded-xl flex flex-col items-center">
                     <span class="text-3xl font-black text-blue-700 font-mono">
                       {{ (fleetForm.get('capacidad_kg')?.value || 0) | number }}
                     </span>
                     <span class="text-[10px] font-black text-blue-700 uppercase tracking-widest -mt-1">Kilogramos Max.</span>
                   </div>
                </div>
              </div>

              <!-- Warning Box -->
              @if (getMaintenanceWarning()) {
                <div class="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 animate-pulse">
                  <div class="flex items-start gap-2">
                    <app-icon name="alert-triangle" size="sm" class="text-amber-600 mt-0.5"></app-icon>
                    <div>
                      <p class="text-[10px] font-black text-amber-900 uppercase">Alerta de Servicio</p>
                      <p class="mt-0.5 text-[9px] font-bold text-amber-700 leading-tight">
                        {{ getMaintenanceWarning() }}
                      </p>
                    </div>
                  </div>
                </div>
              }

              <!-- Info Box Premium -->
              <div class="mt-auto mb-4 rounded-xl border border-divider bg-surface-card p-3">
                <div class="flex items-start gap-2">
                  <app-icon [name]="fleetForm.valid ? 'check-circle' : 'exclamation-circle'" size="sm" 
                    [class]="fleetForm.valid ? 'text-green-500' : 'text-amber-500'" class="mt-0.5"></app-icon>
                  <div>
                    <p class="text-xs font-black text-content-main uppercase tracking-tight">
                      {{ fleetForm.valid ? 'Unidad Validada' : 'Faltan Requisitos' }}
                    </p>
                    <p class="mt-0.5 text-[9px] font-medium text-content-muted leading-tight">
                      {{ fleetForm.valid ? 'El vehículo puede ser registrado en flotilla.' : 'Completa los campos técnicos obligatorios.' }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <p-button
                  type="button"
                  label="Cancelar"
                  size="large"
                  severity="secondary"
                  [outlined]="true"
                  styleClass="w-full font-bold uppercase"
                  (onClick)="canceled.emit()">
                  <ng-template pTemplate="icon">
                    <app-icon name="close" size="sm" class="mr-2"></app-icon>
                  </ng-template>
                </p-button>
                <p-button
                  type="submit"
                  [label]="saving() ? 'Procesando...' : 'Guardar Unidad'"
                  size="large"
                  styleClass="w-full p-button-brand font-black uppercase tracking-widest"
                  [loading]="saving()">
                  <ng-template pTemplate="icon">
                    <app-icon name="save" size="sm" class="mr-2"></app-icon>
                  </ng-template>
                </p-button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
})
export class FleetFormComponent implements OnInit {
  vehicleToEdit = input<any>();
  saved = output<void>();
  canceled = output<void>();

  private fb = inject(FormBuilder);
  private fleetService = inject(FleetService);
  private messageService = inject(MessageService);

  fleetForm: FormGroup;

  readonly marcaOptions = [
    { label: 'Freightliner', value: 'Freightliner' },
    { label: 'Kenworth', value: 'Kenworth' },
    { label: 'International', value: 'International' },
    { label: 'Isuzu', value: 'Isuzu' },
    { label: 'Hino', value: 'Hino' },
    { label: 'Volvo', value: 'Volvo' },
    { label: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { label: 'Volkswagen', value: 'Volkswagen' },
    { label: 'Nissan', value: 'Nissan' },
    { label: 'Chevrolet', value: 'Chevrolet' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Otra', value: 'Otra' }
  ];

  readonly tipoOptions = [
    { label: 'Camión', value: 'camion' },
    { label: 'Camioneta', value: 'camioneta' },
    { label: 'Rabón', value: 'rabon' },
    { label: 'Tráiler', value: 'trailer' }
  ];

  readonly estadoOptions = [
    { label: 'Activa', value: 'activa' },
    { label: 'En Mantenimiento', value: 'mantenimiento' },
    { label: 'Inactiva', value: 'inactiva' }
  ];

  saving = signal(false);
  submitError = signal<string | null>(null);
  hoy = new Date();

  constructor() {
    this.fleetForm = this.fb.group({
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [new Date().getFullYear()],
      tipo: ['camion'],
      estado: ['activa'],
      numero_serie: [''],
      numero_motor: [''],
      capacidad_kg: [0, Validators.min(0)],
      capacidad_cajas: [0, Validators.min(0)],
      km_actual: [0, Validators.min(0)],
      rendimiento_kml: [0],
      ultimo_mantenimiento: [null],
      proximo_mantenimiento: [null],
      km_mantenimiento: [5000],
      observaciones: ['']
    });

    effect(() => {
      const vehicle = this.vehicleToEdit();
      if (vehicle) {
        this.fleetForm.patchValue({
          ...vehicle,
          ultimo_mantenimiento: vehicle.ultimo_mantenimiento ? new Date(vehicle.ultimo_mantenimiento) : null,
          proximo_mantenimiento: vehicle.proximo_mantenimiento ? new Date(vehicle.proximo_mantenimiento) : null
        });
      }
    }, { allowSignalWrites: true });
  }

  isInvalid(field: string): boolean {
    const control = this.fleetForm.get(field);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }

  getMaintenanceWarning(): string | null {
    const kmActual = this.fleetForm.get('km_actual')?.value || 0;
    const kmMantenimiento = this.fleetForm.get('km_mantenimiento')?.value || 0;

    if (kmActual >= kmMantenimiento) {
      return `⚠️ Kilometraje actual (${kmActual} km) ya superó el límite de mantenimiento (${kmMantenimiento} km)`;
    }

    if (kmActual >= kmMantenimiento * 0.9) {
      return `⚠️ Kilometraje actual (${kmActual} km) está cerca del límite de mantenimiento (${kmMantenimiento} km)`;
    }

    return null;
  }

  ngOnInit() {
    // Inicializar fechas por defecto
    const hoy = new Date();
    const proximo = new Date();
    proximo.setMonth(proximo.getMonth() + 3);
    
    this.fleetForm.patchValue({
      ultimo_mantenimiento: hoy,
      proximo_mantenimiento: proximo
    });
  }

  onSubmit() {
    this.fleetForm.markAllAsTouched();

    if (this.fleetForm.invalid || this.saving()) {
      this.messageService.add({ 
        severity: 'warn', 
        summary: 'Atención', 
        detail: 'Por favor, completa todos los campos obligatorios resaltados en rojo.',
        life: 5000
      });
      return;
    }

    this.saving.set(true);
    this.submitError.set(null);

    const vehicleData = this.fleetForm.value;
    const isEdit = !!this.vehicleToEdit();
    const action$ = isEdit 
      ? this.fleetService.update(this.vehicleToEdit().id, vehicleData)
      : this.fleetService.create(vehicleData);

    action$.subscribe({
      next: () => {
        this.saving.set(false);
        this.messageService.add({ 
            severity: 'success', 
            summary: 'Éxito', 
            detail: isEdit ? 'Unidad actualizada correctamente' : 'Unidad guardada correctamente',
            life: 3000
        });
        this.saved.emit();
      },
      error: (err) => {
        this.saving.set(false);
        this.messageService.add({ 
            severity: 'error', 
            summary: 'Error', 
            detail: 'No se pudo guardar la unidad. Verifica los datos.',
            life: 5000
        });
        this.submitError.set('No se pudo guardar la unidad. Intenta de nuevo.');
        console.error('[Fleet] Error al guardar:', err);
      }
    });
  }
}

// FleetFormComponent exportado
