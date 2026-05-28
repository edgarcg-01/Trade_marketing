import { Component, OnInit, inject, signal, output, DestroyRef, input, effect } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { StaffService } from '../../core/services/logistics.service';

@Component({
  selector: 'app-staff-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    IconComponent
  ],
  template: `
    <div class="flex h-full min-h-0 flex-col bg-surface-card">
      <form [formGroup]="staffForm" (ngSubmit)="onSubmit()" class="flex-1 overflow-y-auto p-3">
        <div class="mb-2 flex items-center justify-between rounded-lg border border-divider bg-surface-ground px-3 py-1.5">
          <div class="flex items-center gap-2">
            <div class="flex h-7 w-7 items-center justify-center rounded-md border border-divider bg-surface-card">
              <app-icon name="user-plus" size="sm" class="text-brand"></app-icon>
            </div>
            <div>
              <p class="text-sm font-black text-content-main leading-tight uppercase tracking-wider">
                {{ personToEdit() ? 'Editar Colaborador' : 'Nuevo Colaborador' }}
              </p>
              <p class="text-[10px] text-content-muted leading-tight uppercase font-bold tracking-tighter">Gestión de capital humano</p>
            </div>
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
          <div class="mb-4 rounded-lg border border-red-400/40 bg-red-100/40 px-4 py-3 text-sm text-content-main font-bold">
            <app-icon name="exclamation-triangle" size="sm" class="mr-2"></app-icon>{{ submitError() }}
          </div>
        }

        <div class="shipment-fit-screen grid h-full grid-cols-12 gap-3">
          
          <!-- COLUMNA IZQUIERDA -->
          <div class="col-span-9 space-y-3 overflow-y-auto pr-2 shipment-scroll-column">
            
            <!-- Información Básica -->
            <div class="card-premium p-4 border-2">
              <div class="flex items-center gap-2 mb-3 pb-2 border-b border-divider">
                <app-icon name="id-card" size="md" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Información Básica</span>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col gap-1">
                  <label for="nombre" class="text-label mb-1">Nombre(s) <span class="text-red-500">*</span></label>
                  <input pInputText formControlName="nombre" id="nombre" placeholder="Ej: Juan" class="w-full text-base font-bold" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="telefono" class="text-label mb-1">Teléfono</label>
                  <input pInputText formControlName="telefono" id="telefono" placeholder="000 000 0000" class="w-full text-base" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="nss" class="text-label mb-1">Número de Seguro Social</label>
                  <input pInputText formControlName="nss" id="nss" class="w-full font-mono" />
                </div>
              </div>
            </div>

            <!-- Información Laboral -->
            <div class="card-premium p-4">
              <div class="flex items-center gap-2 mb-3 pb-2 border-b border-divider">
                <app-icon name="briefcase" size="md" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Información Laboral</span>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="flex flex-col gap-1">
                  <label for="roles" class="text-label mb-1">Rol Asignado <span class="text-red-500">*</span></label>
                  <p-select formControlName="roles" id="roles" [options]="rolesOptions()" optionLabel="label" optionValue="value" 
                    placeholder="Seleccionar..." styleClass="w-full" [appendTo]="'body'" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="tipo" class="text-label mb-1">Tipo de Contrato</label>
                  <p-select formControlName="tipo" id="tipo" [options]="tipoOptions" optionLabel="label" optionValue="value" styleClass="w-full" />
                </div>
                <div class="flex flex-col gap-1">
                  <label for="estado" class="text-label mb-1">Estado</label>
                  <p-select formControlName="estado" id="estado" [options]="estadoOptions" optionLabel="label" optionValue="value" styleClass="w-full" />
                </div>
              </div>
            </div>
          </div>

          <!-- COLUMNA DERECHA -->
          <div class="col-span-3 space-y-3">
            <div class="card-premium sticky top-0 flex min-h-[35rem] flex-col p-4 bg-surface-ground/30">
              <div class="flex items-center gap-2 mb-5 pb-3 border-b border-divider">
                <app-icon name="user-circle" size="lg" class="text-content-main"></app-icon>
                <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Perfil</span>
              </div>

              <div class="space-y-3">
                <div class="flex flex-col items-center p-4 bg-surface-card border border-divider rounded-xl mb-2">
                  <div class="h-16 w-16 rounded-full bg-brand/10 border-2 border-brand flex items-center justify-center mb-3">
                    <span class="text-2xl font-black text-brand">{{ (staffForm.get('nombre')?.value || '?')[0] }}</span>
                  </div>
                  <p class="text-sm font-black text-content-main uppercase truncate w-full text-center">
                    {{ staffForm.get('nombre')?.value || 'NUEVO INGRESO' }}
                  </p>
                  <p class="text-[10px] font-bold text-content-muted uppercase tracking-tighter">{{ getRolLabel() }}</p>
                </div>

                <div class="flex justify-between items-center p-3 bg-surface-card border border-divider rounded-xl">
                  <span class="text-[10px] font-black uppercase text-content-muted">Estado</span>
                  <span class="status-chip status-{{ staffForm.get('estado')?.value }} !text-[10px]">
                    {{ staffForm.get('estado')?.value || 'ACTIVO' }}
                  </span>
                </div>

                <div class="flex justify-between items-center p-3 bg-surface-card border border-divider rounded-xl">
                  <span class="text-[10px] font-black uppercase text-content-muted">Contrato</span>
                  <span class="text-xs font-black text-content-main uppercase">
                    {{ staffForm.get('tipo')?.value || 'INTERNO' }}
                  </span>
                </div>
              </div>

              <div class="mt-auto mb-4 rounded-xl border border-divider bg-surface-card p-3">
                <div class="flex items-start gap-2">
                  <app-icon [name]="staffForm.valid ? 'check-circle' : 'exclamation-circle'" size="sm" 
                    [class]="staffForm.valid ? 'text-green-500' : 'text-amber-500'" class="mt-0.5"></app-icon>
                  <div>
                    <p class="text-xs font-black text-content-main uppercase tracking-tight">
                      {{ staffForm.valid ? 'Listo' : 'Campos Pendientes' }}
                    </p>
                    <p class="mt-0.5 text-[9px] font-medium text-content-muted leading-tight">
                      {{ staffForm.valid ? 'El colaborador puede ser dado de alta.' : 'Verifica los campos obligatorios (*)' }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <p-button
                  type="button"
                  label="Cancelar"
                  severity="secondary"
                  [outlined]="true"
                  styleClass="w-full py-2 text-xs font-bold uppercase transition-all hover:bg-surface-hover"
                  (onClick)="canceled.emit()" />
                <p-button
                  type="submit"
                  [label]="saving() ? 'Procesando...' : (personToEdit() ? 'Guardar Cambios' : 'Dar de Alta')"
                  styleClass="w-full p-button-brand py-4 text-xs font-black uppercase tracking-widest"
                  [loading]="saving()"
                  [disabled]="staffForm.invalid || saving()" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
})
export class StaffFormComponent implements OnInit {
  personToEdit = input<any>(null);
  saved = output<void>();
  canceled = output<void>();

  private fb = inject(FormBuilder);
  private staffService = inject(StaffService);
  private destroyRef = inject(DestroyRef);

  staffForm: FormGroup;
  rolesOptions = signal<{ label: string; value: string }[]>([]);

  readonly tipoOptions = [
    { label: 'Interno', value: 'interno' },
    { label: 'Externo', value: 'externo' }
  ];

  readonly estadoOptions = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
    { label: 'Suspendido', value: 'suspendido' }
  ];

  saving = signal(false);
  submitError = signal<string | null>(null);

  constructor() {
    this.staffForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: [''],
      nss: [''],
      roles: ['chofer', Validators.required],
      tipo: ['interno'],
      estado: ['activo']
    });

    // Cargar roles desde la API
    this.staffService.getRoles().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (roles) => this.rolesOptions.set(roles),
      error: () => this.rolesOptions.set([
        { label: 'Chofer', value: 'chofer' },
        { label: 'Ayudante', value: 'ayudante' },
        { label: 'Cargador', value: 'cargador' }
      ])
    });

    effect(() => {
      const person = this.personToEdit();
      if (person) {
        this.staffForm.patchValue({
          nombre: person.nombre || '',
          telefono: person.telefono || '',
          nss: person.nss || '',
          roles: person.roles?.[0] || 'chofer',
          tipo: person.tipo || 'interno',
          estado: person.estado || 'activo'
        });
      } else {
        this.staffForm.reset({
          roles: 'chofer',
          tipo: 'interno',
          estado: 'activo'
        });
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit() {}

  getRolLabel(): string {
    const rol = this.staffForm.get('roles')?.value;
    const found = this.rolesOptions().find(r => r.value === rol);
    return found ? found.label.toUpperCase() : 'SIN ROL';
  }

  isInvalid(field: string): boolean {
    const control = this.staffForm.get(field);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }

  onSubmit() {
    if (this.staffForm.invalid || this.saving()) return;

    this.saving.set(true);
    this.submitError.set(null);

    const person = this.personToEdit();
    const data = this.staffForm.value;
    
    // Convertir roles a array para la BD
    const payload = {
      ...data,
      roles: [data.roles]
    };

    const request = person 
      ? this.staffService.update(person.id, payload)
      : this.staffService.create(payload);

    request.subscribe({
      next: () => {
        this.saving.set(false);
        this.saved.emit();
      },
      error: (err) => {
        this.saving.set(false);
        this.submitError.set(err.message || 'Error al procesar la solicitud');
      }
    });
  }
}
