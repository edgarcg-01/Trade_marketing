import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { FleetService } from '../../../core/services/logistics.service';
import { FotosService } from '../../../core/services/fotos.service';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-out-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    TextareaModule,
    IconComponent
  ],
  template: `
    <div class="min-h-screen bg-surface-ground p-4 animate-fade-in">
      <div class="flex items-center gap-3 mb-6">
        <p-button icon="pi pi-arrow-left" [text]="true" (onClick)="router.navigate(['/fleet'])" />
        <h1 class="text-xl font-black text-content-main uppercase tracking-tight">Registro de <span class="text-amber-500">Llegada</span></h1>
      </div>

      @if (activeLog(); as log) {
        <div class="mb-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
           <div class="flex items-center gap-3">
              <app-icon name="truck" class="text-amber-600"></app-icon>
              <div>
                <span class="text-[10px] uppercase font-bold text-amber-700 block">Unidad Registrada</span>
                <span class="text-lg font-black text-amber-900">{{ log.placa }} - {{ log.modelo }}</span>
              </div>
           </div>
           <div class="mt-3 flex gap-4 text-xs font-bold text-amber-800">
              <span>SALIDA: {{ log.km_salida | number }} KM</span>
              <span>DESTINO: {{ log.destino }}</span>
           </div>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6 pb-20">
          <div class="card-premium p-4 space-y-4">
            <div class="flex items-center gap-2 mb-2">
              <app-icon name="activity" class="text-brand"></app-icon>
              <span class="text-label-xs uppercase font-bold text-content-muted">Control de Kilometraje</span>
            </div>
            
            <div class="flex flex-col gap-1">
              <label class="text-xs font-bold text-content-faint">KM de Llegada</label>
              <p-inputNumber 
                formControlName="km_regreso" 
                mode="decimal" 
                [useGrouping]="false"
                placeholder="0"
                styleClass="w-full font-mono text-xl" />
              <p class="text-[10px] text-content-faint mt-1">KM Recorridos: {{ (form.get('km_regreso')?.value || 0) - log.km_salida | number }} km</p>
            </div>
          </div>

          <div class="card-premium p-4 space-y-4">
            <div class="flex items-center gap-2 mb-2">
              <app-icon name="camera" class="text-brand"></app-icon>
              <span class="text-label-xs uppercase font-bold text-content-muted">Fotos de Evidencia</span>
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
                  <div (click)="takePhoto()" class="aspect-square rounded-lg border-2 border-dashed border-divider flex flex-col items-center justify-center bg-surface-hover/30">
                    <app-icon name="plus" size="md" class="text-content-faint"></app-icon>
                  </div>
               }
            </div>
          </div>

          <div class="card-premium p-4">
            <label class="text-label-xs uppercase font-bold text-content-muted block mb-2">Observaciones de Entrega</label>
            <textarea pTextarea formControlName="observaciones" rows="3" class="w-full text-sm" placeholder="¿Novedades durante el trayecto?"></textarea>
          </div>

          <div class="fixed bottom-0 left-0 right-0 p-4 bg-surface-ground border-t border-divider">
             <p-button 
              type="submit" 
              label="CERRAR BITÁCORA" 
              icon="pi pi-flag" 
              styleClass="p-button-brand w-full h-14 font-black"
              [loading]="saving()"
              [disabled]="form.invalid" />
          </div>
        </form>
      } @else {
        <div class="flex flex-col items-center justify-center py-20 text-content-faint">
           <app-icon name="alert-circle" size="xl"></app-icon>
           <p class="mt-4 font-bold">No se encontró la bitácora activa</p>
           <p-button label="Volver" [text]="true" (onClick)="router.navigate(['/fleet'])" />
        </div>
      }
    </div>
  `
})
export class CheckOutFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private fleetService = inject(FleetService);
  private fotosService = inject(FotosService);
  private messageService = inject(MessageService);
  private route = inject(ActivatedRoute);
  router = inject(Router);

  form: FormGroup;
  activeLog = signal<any>(null);
  photos = signal<string[]>([]);
  saving = signal(false);

  constructor() {
    this.form = this.fb.group({
      km_regreso: [null, [Validators.required, Validators.min(0)]],
      observaciones: [''],
      fotos_regreso: [[]]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
       this.loadLog(id);
    }
  }

  loadLog(id: string) {
    // En una implementación real, buscaríamos el log específico.
    // Por ahora, simulamos trayendo de los activos.
    this.fleetService.getActiveLogs().subscribe(logs => {
       const found = logs.find(l => l.id === id);
       if (found) {
         this.activeLog.set(found);
         this.form.get('km_regreso')?.setValidators([Validators.required, Validators.min(found.km_salida)]);
       }
    });
  }

  async takePhoto() {
    const file = await this.fotosService.captureFromCamera();
    if (file) {
      this.fotosService.uploadGeneric(file, 'fleet-usage').subscribe({
        next: (res) => {
          this.photos.set([...this.photos(), res.url]);
          this.form.patchValue({ fotos_regreso: this.photos() });
        }
      });
    }
  }

  removePhoto(index: number) {
    const current = this.photos();
    current.splice(index, 1);
    this.photos.set([...current]);
    this.form.patchValue({ fotos_regreso: this.photos() });
  }

  onSubmit() {
    if (this.form.invalid || !this.activeLog()) return;
    this.saving.set(true);

    this.fleetService.checkOut(this.activeLog().id, this.form.value).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Regreso Registrado', detail: 'Bitácora cerrada con éxito' });
        this.router.navigate(['/fleet']);
      },
      error: (err) => {
        this.saving.set(false);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.message });
      }
    });
  }
}
