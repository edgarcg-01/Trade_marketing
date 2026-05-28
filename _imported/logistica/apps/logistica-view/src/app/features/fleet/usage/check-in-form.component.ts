import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { FleetService } from '../../../core/services/logistics.service';
import { FotosService } from '../../../core/services/fotos.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    InputNumberModule,
    InputTextModule,
    TextareaModule,
    IconComponent
  ],
  template: `
    <div class="min-h-screen bg-surface-ground p-4 animate-fade-in">
      <!-- Header Móvil -->
      <div class="flex items-center gap-3 mb-6">
        <p-button icon="pi pi-arrow-left" [text]="true" (onClick)="router.navigate(['/fleet'])" />
        <h1 class="text-xl font-black text-content-main uppercase tracking-tight">Registro de <span class="text-brand">Salida</span></h1>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6 pb-20">
        <!-- Selección de Unidad -->
        <div class="card-premium p-4 space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <app-icon name="truck" class="text-brand"></app-icon>
            <span class="text-label-xs uppercase font-bold text-content-muted">Información del Vehículo</span>
          </div>
          
          <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-content-faint">Seleccionar Unidad</label>
            <p-select 
              [options]="units()" 
              formControlName="unidad_id" 
              optionLabel="placa" 
              optionValue="id"
              placeholder="Ej. ABC-123"
              styleClass="w-full h-12"
              (onChange)="onUnitChange($event)" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold text-content-faint">KM Salida</label>
              <p-inputNumber 
                formControlName="km_salida" 
                mode="decimal" 
                [useGrouping]="false"
                placeholder="0"
                styleClass="w-full font-mono" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold text-content-faint">Destino</label>
              <input pInputText formControlName="destino" placeholder="Ej. Ruta Norte" class="w-full h-12" />
            </div>
          </div>
        </div>

        <!-- Evidencia Fotográfica -->
        <div class="card-premium p-4 space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <app-icon name="camera" class="text-brand"></app-icon>
            <span class="text-label-xs uppercase font-bold text-content-muted">Evidencia de Salida</span>
          </div>
          
          <div class="grid grid-cols-3 gap-2">
             @for (foto of photos(); track $index) {
                <div class="relative aspect-square rounded-lg overflow-hidden border border-divider">
                  <img [src]="foto" class="w-full h-full object-cover" />
                  <button type="button" (click)="removePhoto($index)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-lg">
                    <i class="pi pi-times text-[10px]"></i>
                  </button>
                </div>
             }
             @if (photos().length < 3) {
                <div 
                  (click)="takePhoto()"
                  class="aspect-square rounded-lg border-2 border-dashed border-divider flex flex-col items-center justify-center bg-surface-hover/30 active:scale-95 transition-all">
                  <app-icon name="plus" size="md" class="text-content-faint"></app-icon>
                  <span class="text-[9px] uppercase font-bold text-content-faint mt-1">Añadir</span>
                </div>
             }
          </div>
          <p class="text-[10px] text-content-faint italic text-center">Capture fotos del estado general y odómetro.</p>
        </div>

        <!-- Observaciones -->
        <div class="card-premium p-4">
          <label class="text-label-xs uppercase font-bold text-content-muted block mb-2">Observaciones</label>
          <textarea 
            pTextarea 
            formControlName="observaciones" 
            rows="3" 
            class="w-full resize-none border-none focus:ring-0 p-0 text-sm"
            placeholder="¿Algún daño previo o comentario?"></textarea>
        </div>

        <!-- Acciones -->
        <div class="fixed bottom-0 left-0 right-0 p-4 bg-surface-ground border-t border-divider flex gap-3">
           <p-button 
            type="submit" 
            label="CONFIRMAR SALIDA" 
            icon="pi pi-check" 
            styleClass="p-button-brand w-full h-14 font-black tracking-widest"
            [loading]="saving()"
            [disabled]="form.invalid" />
        </div>
      </form>
    </div>
  `
})
export class CheckInFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private fleetService = inject(FleetService);
  private fotosService = inject(FotosService);
  private messageService = inject(MessageService);
  router = inject(Router);

  form: FormGroup;
  units = signal<any[]>([]);
  photos = signal<string[]>([]);
  saving = signal(false);

  constructor() {
    this.form = this.fb.group({
      unidad_id: ['', Validators.required],
      km_salida: [null, [Validators.required, Validators.min(0)]],
      destino: ['', Validators.required],
      observaciones: [''],
      fotos_salida: [[]]
    });
  }

  ngOnInit() {
    this.loadUnits();
  }

  loadUnits() {
    this.fleetService.findAll().subscribe(data => {
      this.units.set(data.filter(u => u.estado_unidad !== 'baja'));
    });
  }

  onUnitChange(event: any) {
    const unit = this.units().find(u => u.id === event.value);
    if (unit) {
      this.form.patchValue({ km_salida: unit.odometro_actual });
    }
  }

  async takePhoto() {
    const file = await this.fotosService.captureFromCamera();
    if (file) {
      this.fotosService.uploadGeneric(file, 'fleet-usage').subscribe({
        next: (res) => {
          this.photos.set([...this.photos(), res.url]);
          this.form.patchValue({ fotos_salida: this.photos() });
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo subir la foto' });
        }
      });
    }
  }

  removePhoto(index: number) {
    const current = this.photos();
    current.splice(index, 1);
    this.photos.set([...current]);
    this.form.patchValue({ fotos_salida: this.photos() });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.saving.set(true);

    const payload = {
      ...this.form.value,
      responsable_id: null // TODO: Obtener del AuthService
    };

    this.fleetService.checkIn(payload).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Salida Registrada', detail: 'Buen viaje' });
        this.router.navigate(['/fleet']);
      },
      error: (err) => {
        this.saving.set(false);
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Error', 
          detail: err.error?.message || 'No se pudo registrar la salida' 
        });
      }
    });
  }
}
