import { Component, Input, Output, EventEmitter, signal, inject, effect, type OnInit, type OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressBar } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChecklistService, Checklist, ChecklistCategoria } from '../../../core/services/checklist.service';
import { FotosService, Foto, FotoTipo } from '../../../core/services/fotos.service';
import { 
  ShipmentsDriverService, 
  DriverShipment, 
  ShipmentEstado, 
  ESTADO_LABELS,
  ESTADO_COLORS
} from '../../../core/services/shipments-driver.service';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

interface WizardStep {
  label: string;
  icon: string;
  estado: ShipmentEstado;
  completed: boolean;
  active: boolean;
}

@Component({
  selector: 'app-delivery-wizard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ProgressBar,
    ProgressSpinnerModule,
    StepsModule,
    ToastModule,
    CardModule,
    TabViewModule,
    TimelineModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule
  ],
  providers: [MessageService],
  template: `
    <p-toast></p-toast>
    
    <p-dialog 
      [visible]="visible" 
      [modal]="true" 
      [style]="{ width: '95vw', maxWidth: '900px', minHeight: '80vh' }"
      [closable]="false"
      [draggable]="false"
      (visibleChange)="onVisibleChange($event)">
      
      <ng-template pTemplate="header">
        <div class="flex flex-col w-full gap-3">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold text-logistics-text">Proceso de Entrega</h2>
              <p class="text-sm text-logistics-text-mid">Embarque {{ embarqueFolio() }}</p>
            </div>
            <div class="text-right">
              <span class="px-3 py-1 rounded-full text-xs font-medium" 
                    [class]="'bg-' + getEstadoColor(currentEstado()) + '-100 text-' + getEstadoColor(currentEstado()) + '-800'">
                {{ getEstadoLabel(currentEstado()) }}
              </span>
            </div>
          </div>
          
          <!-- Timeline de Pasos -->
          <div class="mt-2">
            <p-timeline [value]="steps()" layout="horizontal">
              <ng-template pTemplate="content" let-step>
                <div class="flex flex-col items-center text-center cursor-pointer" 
                     (click)="goToStep(step.estado)"
                     [class.opacity-50]="!step.active && !step.completed">
                  <span class="text-xs mb-1" [class.font-bold]="step.active">{{ step.label }}</span>
                </div>
              </ng-template>
              <ng-template pTemplate="opposite" let-step>
                <div class="flex justify-center">
                  <i [class]="'pi ' + step.icon + ' text-lg'" 
                     [class.text-green-500]="step.completed"
                     [class.text-blue-500]="step.active"
                     [class.text-gray-400]="!step.active && !step.completed">
                  </i>
                </div>
              </ng-template>
            </p-timeline>
          </div>
          
          <p-progressbar 
            [value]="progress()" 
            [style]="{ height: '6px' }"
            class="mt-1">
          </p-progressbar>
        </div>
      </ng-template>

      <ng-template pTemplate="content">
        <div class="wizard-content p-4">
          
          <!-- PASO 1: CHECKLIST DE SALIDA -->
          <div *ngIf="currentEstado() === 'checklist_salida' || currentEstado() === 'programado'">
            <h3 class="text-lg font-semibold mb-4 text-logistics-text">
              <i class="pi pi-clipboard-list mr-2"></i>
              Checklist de Inspección de Salida
            </h3>
            
            <div class="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p class="text-sm text-blue-700">
                <i class="pi pi-info-circle mr-1"></i>
                Complete todos los campos requeridos antes de salir. Los items marcados como "Malo" requieren foto de evidencia.
              </p>
            </div>

            <!-- Datos Generales -->
            <div *ngIf="checklistSalida()" class="space-y-4">
              <p-card *ngFor="let categoria of checklistSalida()!.estructura" 
                      [header]="categoria.titulo"
                      class="mb-3">
                <div class="space-y-3">
                  <div *ngFor="let item of categoria.items" class="checklist-item">
                    
                    <!-- Campo de Texto - Solo lectura para datos del backend -->
                    <div *ngIf="item.tipo === 'texto' && esCampoSoloLectura(item.id)" class="flex items-center justify-between p-3 surface-ground rounded-lg border border-divider">
                      <span class="text-sm font-medium text-color">{{ item.descripcion }}</span>
                      <span class="text-sm text-primary font-semibold">{{ respuestasSalida()[item.id] || '-' }}</span>
                    </div>

                    <!-- Campo de Texto - Editable -->
                    <div *ngIf="item.tipo === 'texto' && !esCampoSoloLectura(item.id)" class="flex flex-col gap-1">
                      <label class="text-sm font-medium text-color">{{ item.descripcion }}</label>
                      <input
                        pInputText
                        type="text"
                        [name]="'salida_' + item.id"
                        [ngModel]="respuestasSalida()[item.id]"
                        (ngModelChange)="updateRespuestaSalida(item.id, $event)"
                        class="w-full"
                        [placeholder]="'Ingrese ' + item.descripcion.toLowerCase()">
                    </div>

                    <!-- Campo Numérico - Solo lectura para kilometraje -->
                    <div *ngIf="item.tipo === 'numero' && esCampoSoloLectura(item.id)" class="flex items-center justify-between p-3 surface-ground rounded-lg border border-divider">
                      <span class="text-sm font-medium text-color">{{ item.descripcion }}</span>
                      <span class="text-sm text-primary font-semibold">{{ respuestasSalida()[item.id] || '0' }}</span>
                    </div>

                    <!-- Campo Numérico - Editable -->
                    <div *ngIf="item.tipo === 'numero' && !esCampoSoloLectura(item.id)" class="flex flex-col gap-1">
                      <label class="text-sm font-medium text-color">{{ item.descripcion }}</label>
                      <p-inputnumber
                        [name]="'salida_' + item.id"
                        [ngModel]="respuestasSalida()[item.id]"
                        (ngModelChange)="updateRespuestaSalida(item.id, $event)"
                        class="w-full"
                        placeholder="0">
                      </p-inputnumber>
                    </div>

                    <!-- Campo Estado (Bien/Regular/Malo/No aplica) -->
                    <div *ngIf="item.tipo === 'estado'" class="flex items-center justify-between p-3 surface-card rounded-lg border border-divider">
                      <div class="flex items-center gap-2">
                        <span class="text-sm text-color">{{ item.descripcion }}</span>
                        <span *ngIf="item.requiere_foto" class="text-xs text-orange-500">
                          <i class="pi pi-camera mr-1"></i>Requiere foto si está malo
                        </span>
                      </div>
                      <div class="flex gap-2">
                        <button
                          *ngFor="let opcion of ['bien', 'regular', 'malo', 'no_aplica']"
                          (click)="setEstado(item.id, opcion, 'salida')"
                          [class]="'px-3 py-1 text-xs rounded-full transition-colors ' +
                                   (respuestasSalida()[item.id] === opcion ?
                                     (opcion === 'bien' ? 'bg-green-500 text-white' :
                                      opcion === 'regular' ? 'bg-yellow-500 text-white' :
                                      opcion === 'malo' ? 'bg-red-500 text-white' :
                                      'bg-gray-500 text-white') :
                                     'surface-200 text-color hover:surface-300')">
                          {{ opcion === 'no_aplica' ? 'N/A' : opcion | titlecase }}
                        </button>
                      </div>
                    </div>

                    <!-- Si/no -->
                    <div *ngIf="item.tipo === 'si_no'" class="flex items-center justify-between p-3 surface-card rounded-lg border border-divider">
                      <span class="text-sm text-color">{{ item.descripcion }}</span>
                      <p-checkbox
                        [name]="'salida_' + item.id"
                        [ngModel]="respuestasSalida()[item.id]"
                        (ngModelChange)="updateRespuestaSalida(item.id, $event)"
                        [binary]="true">
                      </p-checkbox>
                    </div>

                    <!-- Texto largo -->
                    <div *ngIf="item.tipo === 'texto_largo'" class="flex flex-col gap-1">
                      <label class="text-sm font-medium text-color">{{ item.descripcion }}</label>
                      <textarea
                        #ta
                        [value]="respuestasSalida()[item.id] || ''"
                        (input)="updateRespuestaSalida(item.id, ta.value)"
                        rows="3"
                        class="w-full p-2 surface-card border border-divider rounded text-color">
                      </textarea>
                    </div>

                    <!-- Firma -->
                    <div *ngIf="item.tipo === 'firma'" class="flex flex-col gap-2">
                      <label class="text-sm font-medium text-logistics-text">{{ item.descripcion }}</label>
                      <div class="border-2 border-dashed border-logistics-border rounded-lg p-4 text-center">
                        <canvas 
                          id="firmaCanvas"
                          class="w-full h-32 bg-white rounded cursor-crosshair"
                          (mousedown)="startDrawing($event, 'salida')"
                          (mousemove)="draw($event, 'salida')"
                          (mouseup)="stopDrawing('salida')"
                          (mouseleave)="stopDrawing('salida')">
                        </canvas>
                        <div class="flex gap-2 justify-center mt-2">
                          <button 
                            (click)="clearFirma('salida')"
                            class="px-3 py-1 text-xs bg-logistics-surface2 hover:bg-logistics-border rounded">
                            Limpiar
                          </button>
                          <button 
                            (click)="guardarFirma('salida')"
                            class="px-3 py-1 text-xs bg-logistics-accent text-white rounded">
                            Guardar Firma
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p-card>
            </div>

            <div *ngIf="!checklistSalida()" class="text-center py-8">
              <p-progressSpinner></p-progressSpinner>
              <p class="mt-2 text-logistics-text-mid">Cargando checklist...</p>
            </div>
          </div>

          <!-- PASO 2: EN TRÁNSITO (Mensaje informativo) -->
          <div *ngIf="currentEstado() === 'en_transito'" class="text-center py-8">
            <div class="mb-8">
              <i class="pi pi-truck text-6xl text-logistics-accent mb-4"></i>
              <h3 class="text-2xl font-semibold text-logistics-text mb-2">En Tránsito</h3>
              <p class="text-logistics-text-mid">Dirígete a tu destino. Cuando llegues, presiona el botón para continuar.</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p class="text-green-700 text-sm">
                <i class="pi pi-check-circle mr-1"></i>
                Checklist de salida completado correctamente
              </p>
            </div>

            <p-button
              label="Llegué a Destino"
              icon="pi pi-map-marker"
              (onClick)="onLlegadaADestino()"
              styleClass="p-button-raised p-button-lg">
            </p-button>
          </div>

          <!-- DEBUG: Mostrar estado actual siempre -->
          <div class="text-xs text-gray-500 mt-4">
            DEBUG: Estado actual = {{ currentEstado() }}
          </div>

          <!-- PASO 3: FOTOS DE ENTREGA -->
          <div *ngIf="currentEstado() === 'fotos_entrega'">
            <h3 class="text-lg font-semibold mb-4 text-logistics-text">
              <i class="pi pi-camera mr-2"></i>
              Evidencia de Entrega
            </h3>
            
            <div class="mb-4 p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
              <p class="text-sm text-orange-700">
                <i class="pi pi-exclamation-circle mr-1"></i>
                Obligatorio: Sube la foto del papel firmado y la INE del receptor para continuar.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Foto: Papel Firmado -->
              <p-card header="Papel de Entrega Firmado" class="foto-card">
                <div class="text-center">
                  <div *ngIf="!fotos()['entrega_firmada']"
                       class="upload-area p-6 border-2 border-dashed border-logistics-border rounded-lg cursor-pointer hover:bg-logistics-surface2 transition-colors"
                       (click)="captureFoto('entrega_firmada')">
                    <i class="pi pi-file-edit text-4xl text-logistics-text-mid mb-3"></i>
                    <p class="text-sm text-logistics-text-mid mb-3">Foto del documento firmado por el cliente</p>
                    <button
                      (click)="$event.stopPropagation(); captureFoto('entrega_firmada')"
                      [disabled]="uploadingFoto()"
                      class="px-4 py-2 bg-logistics-accent text-white rounded text-sm">
                      <i class="pi pi-camera mr-1"></i>
                      Tomar Foto
                    </button>
                  </div>

                  <div *ngIf="fotos()['entrega_firmada']" class="preview-container">
                    <img [src]="fotos()['entrega_firmada']" class="max-h-48 mx-auto rounded-lg border">
                    <button
                      (click)="eliminarFoto('entrega_firmada')"
                      class="mt-2 px-3 py-1 text-xs text-red-500 hover:text-red-600">
                      <i class="pi pi-trash mr-1"></i>Eliminar
                    </button>
                  </div>
                </div>
              </p-card>

              <!-- Foto: INE Receptor -->
              <p-card header="INE del Receptor" class="foto-card">
                <div class="text-center">
                  <div *ngIf="!fotos()['ine_receptor']"
                       class="upload-area p-6 border-2 border-dashed border-logistics-border rounded-lg cursor-pointer hover:bg-logistics-surface2 transition-colors"
                       (click)="captureFoto('ine_receptor')">
                    <i class="pi pi-id-card text-4xl text-logistics-text-mid mb-3"></i>
                    <p class="text-sm text-logistics-text-mid mb-3">Foto de la identificación oficial</p>
                    <button
                      (click)="$event.stopPropagation(); captureFoto('ine_receptor')"
                      [disabled]="uploadingFoto()"
                      class="px-4 py-2 bg-logistics-accent text-white rounded text-sm">
                      <i class="pi pi-camera mr-1"></i>
                      Tomar Foto
                    </button>
                  </div>

                  <div *ngIf="fotos()['ine_receptor']" class="preview-container">
                    <img [src]="fotos()['ine_receptor']" class="max-h-48 mx-auto rounded-lg border">
                    <button
                      (click)="eliminarFoto('ine_receptor')"
                      class="mt-2 px-3 py-1 text-xs text-red-500 hover:text-red-600">
                      <i class="pi pi-trash mr-1"></i>Eliminar
                    </button>
                  </div>
                </div>
              </p-card>
            </div>

            <div class="mt-6 text-center">
              <button 
                (click)="onConfirmarEntrega()"
                [disabled]="!puedeConfirmarEntrega() || uploadingFoto()"
                class="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <i class="pi pi-check-circle mr-2"></i>
                Confirmar Entrega
              </button>
              <p *ngIf="!puedeConfirmarEntrega()" class="mt-2 text-xs text-red-500">
                Debes subir ambas fotos para continuar
              </p>
            </div>
          </div>

          <!-- PASO 4: CHECKLIST DE LLEGADA -->
          <div *ngIf="currentEstado() === 'checklist_llegada'">
            <h3 class="text-lg font-semibold mb-4 text-logistics-text">
              <i class="pi pi-clipboard-check mr-2"></i>
              Checklist de Inspección de Llegada
            </h3>
            
            <div class="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p class="text-sm text-blue-700">
                <i class="pi pi-info-circle mr-1"></i>
                Reporta cualquier incidente o daño ocurrido durante el viaje. La firma es obligatoria.
              </p>
            </div>

            <div *ngIf="checklistLlegada()" class="space-y-4">
              <p-card *ngFor="let categoria of checklistLlegada()!.estructura" 
                      [header]="categoria.titulo"
                      class="mb-3">
                <div class="space-y-3">
                  <div *ngFor="let item of categoria.items" class="checklist-item">
                    
                    <!-- Campo Estado -->
                    <div *ngIf="item.tipo === 'estado'" class="flex items-center justify-between p-3 surface-card rounded-lg border border-divider">
                      <div class="flex items-center gap-2">
                        <span class="text-sm text-color">{{ item.descripcion }}</span>
                        <span *ngIf="item.requiere_foto" class="text-xs text-orange-500">
                          <i class="pi pi-camera mr-1"></i>Requiere foto si está malo
                        </span>
                      </div>
                      <div class="flex gap-2">
                        <button
                          *ngFor="let opcion of ['bien', 'regular', 'malo', 'no_aplica']"
                          (click)="setEstado(item.id, opcion, 'llegada')"
                          [class]="'px-3 py-1 text-xs rounded-full transition-colors ' +
                                   (respuestasLlegada()[item.id] === opcion ?
                                     (opcion === 'bien' ? 'bg-green-500 text-white' :
                                      opcion === 'regular' ? 'bg-yellow-500 text-white' :
                                      opcion === 'malo' ? 'bg-red-500 text-white' :
                                      'bg-gray-500 text-white') :
                                     'surface-200 text-color hover:surface-300')">
                          {{ opcion === 'no_aplica' ? 'N/A' : opcion | titlecase }}
                        </button>
                      </div>
                    </div>

                    <!-- Si/No -->
                    <div *ngIf="item.tipo === 'si_no'" class="flex items-center justify-between p-3 surface-card rounded-lg border border-divider">
                      <span class="text-sm text-color">{{ item.descripcion }}</span>
                      <div class="flex gap-3">
                        <p-radiobutton
                          [name]="'llegada_' + item.id"
                          [value]="true"
                          [ngModel]="respuestasLlegada()[item.id]"
                          (ngModelChange)="updateRespuestaLlegada(item.id, $event)">
                        </p-radiobutton>
                        <label class="text-sm text-color cursor-pointer" (click)="updateRespuestaLlegada(item.id, true)">Sí</label>
                        <p-radiobutton
                          [name]="'llegada_' + item.id"
                          [value]="false"
                          [ngModel]="respuestasLlegada()[item.id]"
                          (ngModelChange)="updateRespuestaLlegada(item.id, $event)">
                        </p-radiobutton>
                        <label class="text-sm text-color cursor-pointer" (click)="updateRespuestaLlegada(item.id, false)">No</label>
                      </div>
                    </div>

                    <!-- Texto largo -->
                    <div *ngIf="item.tipo === 'texto_largo'" class="flex flex-col gap-1">
                      <label class="text-sm font-medium text-color">{{ item.descripcion }}</label>
                      <textarea
                        #ta
                        [value]="respuestasLlegada()[item.id] || ''"
                        (input)="updateRespuestaLlegada(item.id, ta.value)"
                        rows="3"
                        class="w-full p-2 surface-card border border-divider rounded text-color">
                      </textarea>
                    </div>

                    <!-- Firma -->
                    <div *ngIf="item.tipo === 'firma'" class="flex flex-col gap-2">
                      <label class="text-sm font-medium text-logistics-text">{{ item.descripcion }} *</label>
                      <div class="border-2 border-dashed border-logistics-border rounded-lg p-4 text-center">
                        <canvas 
                          id="firmaCanvasLlegada"
                          class="w-full h-32 bg-white rounded cursor-crosshair"
                          (mousedown)="startDrawing($event, 'llegada')"
                          (mousemove)="draw($event, 'llegada')"
                          (mouseup)="stopDrawing('llegada')"
                          (mouseleave)="stopDrawing('llegada')">
                        </canvas>
                        <div class="flex gap-2 justify-center mt-2">
                          <button 
                            (click)="clearFirma('llegada')"
                            class="px-3 py-1 text-xs bg-logistics-surface2 hover:bg-logistics-border rounded">
                            Limpiar
                          </button>
                          <button 
                            (click)="guardarFirma('llegada')"
                            class="px-3 py-1 text-xs bg-logistics-accent text-white rounded">
                            Guardar Firma
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p-card>
            </div>

            <div *ngIf="!checklistLlegada()" class="text-center py-8">
              <p class="text-green-700 text-sm">
                <i class="pi pi-star-fill mr-1"></i>
                Has completado tu parte del envío. El operador finalizará el embarque.
              </p>
            </div>
          </div>

          <!-- PASO FINAL: ENVÍO COMPLETADO POR EL CHOFER -->
          <div *ngIf="currentEstado() === 'completado'" class="text-center py-8">
            <div class="mb-8">
              <i class="pi pi-check-circle text-6xl text-green-500 mb-4"></i>
              <h3 class="text-2xl font-semibold text-logistics-text mb-2">¡Felicidades!</h3>
              <p class="text-logistics-text-mid text-lg">Has completado exitosamente tu parte del envío.</p>
              <p class="text-logistics-text-mid mt-2">El operador finalizará el embarque.</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p class="text-green-700">
                <i class="pi pi-star-fill mr-1"></i>
                Tu parte ha sido completada. Este embarque se ocultará de tu lista.
              </p>
            </div>

            <div class="text-green-600">
              <i class="pi pi-verified text-4xl"></i>
              <p class="font-semibold mt-2">Envío Completado</p>
            </div>
          </div>

        </div>
      </ng-template>

      <ng-template pTemplate="footer">
        <div class="flex justify-between items-center">
          <button
            (click)="cancel()"
            class="px-4 py-2 text-logistics-text-mid hover:text-logistics-text transition-colors">
            <i class="pi pi-times mr-1"></i>
            Cerrar
          </button>

          <div class="flex gap-2" *ngIf="currentEstado() === 'checklist_salida' || currentEstado() === 'checklist_llegada' || currentEstado() === 'programado'">
            <!-- Botón Guardar: Solo guarda progreso sin completar -->
            <button
              (click)="guardarChecklistTemporal()"
              [disabled]="guardando()"
              class="px-4 py-2 surface-200 hover:surface-300 text-color rounded transition-colors disabled:opacity-50">
              <i class="pi pi-save mr-1"></i>
              {{ guardando() ? 'Guardando...' : 'Guardar' }}
            </button>

            <!-- Botón Completar: Valida, guarda y avanza -->
            <button
              (click)="completarChecklistYContinuar()"
              [disabled]="guardando()"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-opacity-90 transition-colors disabled:opacity-50">
              <i class="pi pi-check-circle mr-1"></i>
              {{ guardando() ? 'Completando...' : 'Completar' }}
            </button>
          </div>
        </div>
      </ng-template>
    </p-dialog>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .wizard-content {
      min-height: 400px;
    }
    
    .checklist-item {
      transition: all 0.2s ease;
    }
    
    .upload-area {
      transition: all 0.2s ease;
    }
    
    .upload-area:hover {
      background-color: var(--surface2);
    }
    
    :host ::ng-deep .p-timeline-event-opposite {
      display: none;
    }
    
    :host ::ng-deep .p-timeline-event-content {
      padding: 0 0.5rem;
    }
    
    :host ::ng-deep .p-card {
      margin-bottom: 1rem;
    }
    
    canvas {
      touch-action: none;
    }
  `]
})
export class DeliveryWizardComponent implements OnInit, OnChanges {
  @Input() visible = false;
  @Input() embarqueId = '';
  @Input() guiaId = '';
  @Input() embarqueEstado: import('../../../core/services/shipments-driver.service').ShipmentEstado = 'programado';
  
  // Signals internos para reactividad
  private isVisibleSignal = signal<boolean>(false);
  private embarqueIdSignal = signal<string>('');
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() deliveryCompleted = new EventEmitter<void>();
  @Output() estadoChange = new EventEmitter<import('../../../core/services/shipments-driver.service').ShipmentEstado>();

  // Servicios
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  private checklistService = inject(ChecklistService);
  private fotosService = inject(FotosService);
  private shipmentsDriverService = inject(ShipmentsDriverService);

  // Signals
  currentEstado = signal<ShipmentEstado>('programado');
  embarqueFolio = signal<string>('');
  progress = signal<number>(0);
  
  // Checklists
  checklistSalida = signal<Checklist | null>(null);
  checklistLlegada = signal<Checklist | null>(null);
  respuestasSalida = signal<Record<string, any>>({});
  respuestasLlegada = signal<Record<string, any>>({});
  
  // Fotos
  fotos = signal<Record<string, string | undefined>>({});
  uploadingFoto = signal<boolean>(false);
  
  // Estado UI
  guardando = signal<boolean>(false);
  cambiosPendientes = signal<boolean>(false);
  
  // Pasos del wizard
  steps = signal<WizardStep[]>([
    { label: 'Checklist Salida', icon: 'pi-clipboard-list', estado: 'checklist_salida', completed: false, active: false },
    { label: 'En Tránsito', icon: 'pi-truck', estado: 'en_transito', completed: false, active: false },
    { label: 'Fotos Entrega', icon: 'pi-camera', estado: 'fotos_entrega', completed: false, active: false },
    { label: 'Checklist Llegada', icon: 'pi-clipboard-check', estado: 'checklist_llegada', completed: false, active: false },
  ]);

  // Canvas para firma
  private drawing = false;
  private currentCanvas: HTMLCanvasElement | null = null;
  private currentContext: CanvasRenderingContext2D | null = null;

  // Guard para prevenir múltiples inicializaciones
  private initializing = false;

  constructor() {
    // Efecto para actualizar progreso cuando cambia el estado
    effect(() => {
      const estado = this.currentEstado();
      console.log('Progress effect triggered, estado:', estado);
      this.updateProgress();
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    // No hacer nada aquí, initialize se llama desde ngOnChanges
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:', changes);
    if (changes['visible']) {
      this.isVisibleSignal.set(changes['visible'].currentValue);
    }
    if (changes['embarqueId']) {
      this.embarqueIdSignal.set(changes['embarqueId'].currentValue);
    }

    // Solo inicializar si visible pasa a true y tenemos embarqueId
    if (changes['visible']?.currentValue === true && this.embarqueId) {
      this.initialize();
    }
    // Si el embarqueId cambia y el wizard ya está visible, reinicializar
    else if (changes['embarqueId'] && this.visible) {
      this.initialize();
    }
  }

  onVisibleChange(visible: boolean) {
    console.log('onVisibleChange called, visible:', visible);
    this.visibleChange.emit(visible);
    if (!visible) {
      this.reset();
    }
  }

  async initialize() {
    if (this.initializing) {
      console.log('initialize() already running, skipping');
      return;
    }
    this.initializing = true;

    console.log('initialize() called with embarqueId:', this.embarqueId, 'estado:', this.embarqueEstado);
    // Establecer estado inicial
    this.currentEstado.set(this.embarqueEstado);
    
    try {
      // Cargar datos según el estado
      if (this.embarqueEstado === 'programado') {
        // Crear checklist de salida
        await this.crearChecklistSalida();
      } else if (this.embarqueEstado === 'checklist_salida') {
        // Cargar checklist existente
        await this.cargarChecklistSalida();
      } else if (this.embarqueEstado === 'fotos_entrega') {
        // Cargar fotos existentes
        await this.cargarFotos();
      } else if (this.embarqueEstado === 'checklist_llegada') {
        // Crear o cargar checklist de llegada
        await this.crearOCargarChecklistLlegada();
      }
      
      this.updateProgress();
    } finally {
      this.initializing = false;
    }
  }

  async crearChecklistSalida() {
    const user = this.authService.user();
    if (!user?.sub) {
      console.error('No user found or no user.sub');
      return;
    }

    console.log('Creando checklist salida para embarque:', this.embarqueId, 'usuario:', user.sub);
    try {
      const checklist = await this.checklistService.create(this.embarqueId, 'salida', user.sub).toPromise();
      console.log('Checklist creado:', checklist);
      if (checklist) {
        this.checklistSalida.set(checklist);
        this.respuestasSalida.set(checklist.respuestas || {});
        this.currentEstado.set('checklist_salida');
      }
    } catch (error) {
      console.error('Error creando checklist salida:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo crear el checklist de salida'
      });
    }
  }

  async cargarChecklistSalida() {
    console.log('Cargando checklist salida para embarque:', this.embarqueId);
    try {
      const checklist = await this.checklistService.getByEmbarque(this.embarqueId, 'salida').toPromise();
      console.log('Checklist recibido:', checklist);
      if (checklist) {
        this.checklistSalida.set(checklist);
        this.respuestasSalida.set(checklist.respuestas || {});
      } else {
        console.log('No existe checklist, creando nuevo...');
        // Si no existe, crearlo
        await this.crearChecklistSalida();
      }
    } catch (error) {
      console.error('Error loading checklist salida:', error);
      // Si no existe, crearlo
      await this.crearChecklistSalida();
    }
  }

  async crearOCargarChecklistLlegada() {
    const user = this.authService.user();
    if (!user?.sub) return;

    try {
      let checklist = await this.checklistService.getByEmbarque(this.embarqueId, 'llegada').toPromise();
      if (!checklist) {
        checklist = await this.checklistService.create(this.embarqueId, 'llegada', user.sub).toPromise();
      }
      if (checklist) {
        this.checklistLlegada.set(checklist);
        this.respuestasLlegada.set(checklist.respuestas || {});
      }
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo cargar el checklist de llegada'
      });
    }
  }

  async cargarFotos() {
    try {
      const fotos = await this.fotosService.getByEmbarque(this.embarqueId).toPromise();
      const fotosMap: { entrega_firmada?: string; ine_receptor?: string } = {};
      
      fotos?.forEach(foto => {
        if (foto.tipo === 'entrega_firmada') {
          fotosMap.entrega_firmada = foto.url;
        } else if (foto.tipo === 'ine_receptor') {
          fotosMap.ine_receptor = foto.url;
        }
      });
      
      this.fotos.set(fotosMap);
    } catch (error) {
      console.error('Error cargando fotos:', error);
    }
  }

  // ===== MÉTODOS DE ACCIÓN =====

  async completarChecklistSalida() {
    if (!this.checklistSalida()) return;
    
    this.guardando.set(true);
    console.log('=== COMPLETAR CHECKLIST SALIDA ===');
    console.log('Checklist ID:', this.checklistSalida()!.id);
    console.log('Respuestas actuales:', this.respuestasSalida());
    
    try {
      // Validar que esté completo usando respuestas actuales
      const checklistConRespuestas = {
        ...this.checklistSalida()!,
        respuestas: this.respuestasSalida()
      };
      const validacion = this.checklistService.validateCompleteness(checklistConRespuestas);
      console.log('Validación:', validacion);
      if (!validacion.valid) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Checklist Incompleto',
          detail: 'Faltan campos requeridos: ' + validacion.missing.slice(0, 3).join(', ') + (validacion.missing.length > 3 ? '...' : '')
        });
        this.guardando.set(false);
        return;
      }

      // Guardar respuestas
      console.log('Guardando respuestas...');
      const saved = await this.checklistService.updateRespuestas(
        this.checklistSalida()!.id,
        this.respuestasSalida()
      ).toPromise();
      console.log('Respuestas guardadas:', saved);

      // Completar checklist
      console.log('Marcando checklist como completado...');
      const completed = await this.checklistService.complete(this.checklistSalida()!.id).toPromise();
      console.log('Checklist completado:', completed);

      // Confirmar salida
      console.log('Confirmando salida del embarque...');
      const result = await this.shipmentsDriverService.confirmarSalida(
        this.embarqueId,
        this.checklistSalida()!.id
      ).toPromise();
      console.log('Resultado confirmar salida:', result);

      if (result?.success) {
        this.currentEstado.set('en_transito');
        this.estadoChange.emit('en_transito');
        this.updateProgress();
        this.messageService.add({
          severity: 'success',
          summary: '¡Listo para salir!',
          detail: 'El checklist de salida ha sido completado. Puedes comenzar tu viaje.'
        });
      }
    } catch (error: any) {
      console.error('Error en completarChecklistSalida:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'No se pudo completar el checklist'
      });
    } finally {
      this.guardando.set(false);
      console.log('=== FIN COMPLETAR CHECKLIST ===');
    }
  }

  async onLlegadaADestino() {
    try {
      const result = await this.shipmentsDriverService.subirFotosEntrega(this.embarqueId).toPromise();
      if (result?.success) {
        this.currentEstado.set('fotos_entrega');
        this.estadoChange.emit('fotos_entrega');
        this.updateProgress();
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'No se pudo cambiar el estado'
      });
    }
  }

  async onConfirmarEntrega() {
    try {
      const result = await this.shipmentsDriverService.confirmarEntrega(this.embarqueId).toPromise();
      if (result?.success) {
        // Crear checklist de llegada
        await this.crearOCargarChecklistLlegada();
        this.currentEstado.set('checklist_llegada');
        this.estadoChange.emit('checklist_llegada');
        this.updateProgress();
        this.messageService.add({
          severity: 'success',
          summary: 'Entrega Confirmada',
          detail: 'Ahora completa el checklist de llegada'
        });
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'No se pudo confirmar la entrega'
      });
    }
  }

  async completarChecklistLlegada() {
    if (!this.checklistLlegada()) return;
    
    this.guardando.set(true);
    console.log('=== COMPLETAR CHECKLIST LLEGADA ===');
    console.log('Checklist ID:', this.checklistLlegada()!.id);
    console.log('Respuestas actuales:', this.respuestasLlegada());
    
    try {
      // Validar que esté completo usando respuestas actuales
      const checklistConRespuestas = {
        ...this.checklistLlegada()!,
        respuestas: this.respuestasLlegada()
      };
      const validacion = this.checklistService.validateCompleteness(checklistConRespuestas);
      console.log('Validación:', validacion);
      if (!validacion.valid) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Checklist Incompleto',
          detail: 'Faltan campos requeridos: ' + validacion.missing.slice(0, 3).join(', ') + (validacion.missing.length > 3 ? '...' : '')
        });
        this.guardando.set(false);
        return;
      }

      // Guardar respuestas
      console.log('Guardando respuestas...');
      await this.checklistService.updateRespuestas(
        this.checklistLlegada()!.id,
        this.respuestasLlegada()
      ).toPromise();
      console.log('Respuestas guardadas');

      // Completar checklist
      console.log('Marcando checklist como completado...');
      await this.checklistService.complete(this.checklistLlegada()!.id).toPromise();
      console.log('Checklist completado');

      // Completar checklist de llegada en el embarque
      console.log('Confirmando llegada del embarque...');
      const result = await this.shipmentsDriverService.completarChecklistLlegada(
        this.embarqueId,
        this.checklistLlegada()!.id
      ).toPromise();
      console.log('Resultado confirmar llegada:', result);

      if (result?.success) {
        this.currentEstado.set('completado');
        this.estadoChange.emit('completado');
        this.updateProgress();
        this.messageService.add({
          severity: 'success',
          summary: 'Checklist Completado',
          detail: 'Has completado tu parte del envío. El operador finalizará el embarque.'
        });
      }
    } catch (error: any) {
      console.error('Error en completarChecklistLlegada:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'No se pudo completar el checklist'
      });
    } finally {
      this.guardando.set(false);
      console.log('=== FIN COMPLETAR CHECKLIST LLEGADA ===');
    }
  }

  // ===== MÉTODOS DE FOTOS =====

  async captureFoto(tipo: FotoTipo) {
    this.uploadingFoto.set(true);
    
    try {
      const file = await this.fotosService.captureFromCamera();
      if (!file) {
        this.uploadingFoto.set(false);
        return;
      }

      // Obtener ubicación
      const location = await this.fotosService.getCurrentLocation();
      
      const user = this.authService.user();
      if (!user?.sub) {
        this.uploadingFoto.set(false);
        return;
      }

      // Subir foto
      const foto = await this.fotosService.uploadFoto(
        file,
        this.embarqueId,
        this.guiaId,
        user.sub,
        tipo,
        location ? { lat: location.lat, lng: location.lng, timestamp: new Date().toISOString() } : undefined
      ).toPromise();

      if (foto) {
        this.fotos.update(fotos => ({ ...fotos, [tipo]: foto.url }));
        this.messageService.add({
          severity: 'success',
          summary: 'Foto Subida',
          detail: 'La foto se ha subido correctamente'
        });
      }
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo subir la foto'
      });
    } finally {
      this.uploadingFoto.set(false);
    }
  }

  async eliminarFoto(tipo: FotoTipo) {
    // TODO: Implementar eliminación de foto
    this.fotos.update(fotos => {
      const newFotos = { ...fotos };
      delete newFotos[tipo];
      return newFotos;
    });
  }

  puedeConfirmarEntrega(): boolean {
    return !!this.fotos()['entrega_firmada'] && !!this.fotos()['ine_receptor'];
  }

  // ===== MÉTODOS DE CHECKLIST =====

  setEstado(itemId: string, valor: string, tipo: 'salida' | 'llegada') {
    if (tipo === 'salida') {
      this.respuestasSalida.update(r => ({ ...r, [itemId]: valor }));
    } else {
      this.respuestasLlegada.update(r => ({ ...r, [itemId]: valor }));
    }
    this.cambiosPendientes.set(true);
  }

  onRespuestaChange(tipo: 'salida' | 'llegada') {
    this.cambiosPendientes.set(true);
  }

  updateRespuestaSalida(itemId: string, valor: any) {
    this.respuestasSalida.update(respuestas => ({
      ...respuestas,
      [itemId]: valor
    }));
    this.cambiosPendientes.set(true);
  }

  updateRespuestaLlegada(itemId: string, valor: any) {
    console.log(`[updateRespuestaLlegada] itemId: ${itemId}, valor:`, valor);
    this.respuestasLlegada.update(respuestas => {
      const nuevo = { ...respuestas, [itemId]: valor };
      console.log(`[updateRespuestaLlegada] nuevo estado:`, nuevo);
      return nuevo;
    });
    this.cambiosPendientes.set(true);
  }

  // Solo guarda progreso SIN completar el checklist
  async guardarChecklistTemporal() {
    this.guardando.set(true);
    console.log('=== GUARDAR PROGRESO TEMPORAL ===');
    console.log('[guardarChecklistTemporal] estado actual:', this.currentEstado());
    console.log('[guardarChecklistTemporal] checklistSalida existe:', !!this.checklistSalida());
    console.log('[guardarChecklistTemporal] checklistLlegada existe:', !!this.checklistLlegada());

    try {
      if (!this.checklistSalida() && !this.checklistLlegada()) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Sin checklist',
          detail: 'No hay checklist cargado aún'
        });
        return;
      }

      if ((this.currentEstado() === 'checklist_salida' || this.currentEstado() === 'programado') && this.checklistSalida()) {
        console.log('Guardando progreso checklist salida ID:', this.checklistSalida()!.id);
        await this.checklistService.updateRespuestas(
          this.checklistSalida()!.id,
          this.respuestasSalida()
        ).toPromise();

        this.cambiosPendientes.set(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Progreso guardado',
          detail: 'Tu avance ha sido guardado. Puedes continuar después.'
        });
      } else if (this.currentEstado() === 'checklist_llegada' && this.checklistLlegada()) {
        console.log('Guardando progreso checklist llegada ID:', this.checklistLlegada()!.id);
        console.log('[guardarChecklistTemporal] respuestasLlegada a enviar:', this.respuestasLlegada());
        console.log('[guardarChecklistTemporal] estructura del checklist:', this.checklistLlegada()?.estructura);
        const result = await this.checklistService.updateRespuestas(
          this.checklistLlegada()!.id,
          this.respuestasLlegada()
        ).toPromise();
        console.log('[guardarChecklistTemporal] resultado:', result);

        this.cambiosPendientes.set(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Progreso guardado',
          detail: 'Tu avance ha sido guardado. Puedes continuar después.'
        });
      }
    } catch (error) {
      console.error('Error guardando progreso:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo guardar el progreso'
      });
    } finally {
      this.guardando.set(false);
      console.log('=== FIN GUARDAR PROGRESO ===');
    }
  }

  // Completa el checklist y avanza al siguiente paso
  async completarChecklistYContinuar() {
    this.guardando.set(true);
    console.log('=== COMPLETAR CHECKLIST ===');

    try {
      if ((this.currentEstado() === 'checklist_salida' || this.currentEstado() === 'programado') && this.checklistSalida()) {
        // Validar que esté completo
        const validacion = this.checklistService.validateCompleteness({
          ...this.checklistSalida()!,
          respuestas: this.respuestasSalida()
        });

        if (!validacion.valid) {
          this.messageService.add({
            severity: 'error',
            summary: 'Checklist incompleto',
            detail: `Faltan campos: ${validacion.missing.join(', ')}`
          });
          return;
        }

        // Guardar respuestas
        await this.checklistService.updateRespuestas(
          this.checklistSalida()!.id,
          this.respuestasSalida()
        ).toPromise();

        // Completar checklist
        await this.checklistService.complete(this.checklistSalida()!.id).toPromise();

        // Confirmar salida
        const resultSalida = await this.shipmentsDriverService.confirmarSalida(
          this.embarqueId,
          this.checklistSalida()!.id
        ).toPromise();

        if (resultSalida?.success) {
          this.currentEstado.set('en_transito');
          this.estadoChange.emit('en_transito');
          this.updateProgress();
          this.messageService.add({
            severity: 'success',
            summary: '¡Listo para salir!',
            detail: 'El checklist de salida ha sido completado. Puedes comenzar tu viaje.'
          });
          this.cancel();
        }
      } else if (this.currentEstado() === 'checklist_llegada' && this.checklistLlegada()) {
        // Validar que esté completo
        console.log('[completarChecklistYContinuar] respuestasLlegada actual:', this.respuestasLlegada());
        console.log('[completarChecklistYContinuar] checklistLlegada estructura:', this.checklistLlegada()?.estructura);

        const validacion = this.checklistService.validateCompleteness({
          ...this.checklistLlegada()!,
          respuestas: this.respuestasLlegada()
        });

        console.log('[completarChecklistYContinuar] resultado validacion:', validacion);

        if (!validacion.valid) {
          this.messageService.add({
            severity: 'error',
            summary: 'Checklist incompleto',
            detail: `Faltan campos: ${validacion.missing.join(', ')}`
          });
          return;
        }

        // Guardar respuestas
        await this.checklistService.updateRespuestas(
          this.checklistLlegada()!.id,
          this.respuestasLlegada()
        ).toPromise();

        // Completar checklist
        await this.checklistService.complete(this.checklistLlegada()!.id).toPromise();

        // Confirmar llegada
        const resultLlegada = await this.shipmentsDriverService.completarChecklistLlegada(
          this.embarqueId,
          this.checklistLlegada()!.id
        ).toPromise();

        if (resultLlegada?.success) {
          this.currentEstado.set('completado');
          this.estadoChange.emit('completado');
          this.updateProgress();
          this.messageService.add({
            severity: 'success',
            summary: 'Checklist Completado',
            detail: 'Has completado tu parte del envío. El operador finalizará el embarque.'
          });
          this.cancel();
        }
      }
    } catch (error) {
      console.error('Error completando checklist:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo completar el checklist'
      });
    } finally {
      this.guardando.set(false);
      console.log('=== FIN COMPLETAR CHECKLIST ===');
    }
  }

  puedeCompletarChecklist(tipo: 'salida' | 'llegada'): boolean {
    const checklist = tipo === 'salida' ? this.checklistSalida() : this.checklistLlegada();
    if (!checklist) {
      console.log('puedeCompletarChecklist: No checklist found for', tipo);
      return false;
    }
    
    // Verificar que el estado sea correcto para completar
    const estadoValido = tipo === 'salida' 
      ? (this.currentEstado() === 'checklist_salida' || this.currentEstado() === 'programado')
      : this.currentEstado() === 'checklist_llegada';
    
    if (!estadoValido) {
      console.log('puedeCompletarChecklist: Estado no válido para completar', tipo, 'estado actual:', this.currentEstado());
      return false;
    }
    
    // Usar respuestas actuales del signal, no las del objeto original
    const respuestasActuales = tipo === 'salida' ? this.respuestasSalida() : this.respuestasLlegada();
    const checklistConRespuestas = { ...checklist, respuestas: respuestasActuales };
    
    const validacion = this.checklistService.validateCompleteness(checklistConRespuestas);
    console.log('puedeCompletarChecklist:', tipo, 'valid:', validacion.valid, 'missing:', validacion.missing);
    return validacion.valid;
  }

  // Campos que vienen prellenados del backend y no deben ser editables
  esCampoSoloLectura(itemId: string): boolean {
    const camposSoloLectura = ['nombre_operador', 'unidad', 'kilometraje', 'fecha'];
    return camposSoloLectura.includes(itemId);
  }

  // ===== MÉTODOS DE FIRMA =====

  startDrawing(event: MouseEvent, tipo: 'salida' | 'llegada') {
    this.drawing = true;
    const canvas = event.target as HTMLCanvasElement;
    this.currentCanvas = canvas;
    this.currentContext = canvas.getContext('2d');
    
    if (this.currentContext) {
      this.currentContext.beginPath();
      this.currentContext.moveTo(event.offsetX, event.offsetY);
      this.currentContext.strokeStyle = '#000';
      this.currentContext.lineWidth = 2;
    }
  }

  draw(event: MouseEvent, tipo: 'salida' | 'llegada') {
    if (!this.drawing || !this.currentContext) return;
    
    this.currentContext.lineTo(event.offsetX, event.offsetY);
    this.currentContext.stroke();
  }

  stopDrawing(tipo: 'salida' | 'llegada') {
    this.drawing = false;
    this.currentContext = null;
    this.currentCanvas = null;
  }

  clearFirma(tipo: 'salida' | 'llegada') {
    const canvasId = tipo === 'salida' ? 'firmaCanvas' : 'firmaCanvasLlegada';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  async guardarFirma(tipo: 'salida' | 'llegada') {
    console.log('=== GUARDAR FIRMA ===');
    const canvasId = tipo === 'salida' ? 'firmaCanvas' : 'firmaCanvasLlegada';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas no encontrado:', canvasId);
      return;
    }

    const base64 = canvas.toDataURL('image/png');
    console.log('Base64 generado, length:', base64.length);
    
    // Subir como foto
    const user = this.authService.user();
    console.log('User:', user?.sub);
    if (!user?.sub) {
      console.error('No hay usuario logueado');
      return;
    }

    console.log('Datos para subir:', {
      embarqueId: this.embarqueId,
      guiaId: this.guiaId,
      choferId: user.sub,
      tipo: 'general'
    });

    try {
      const foto = await this.fotosService.uploadFotoBase64(
        base64,
        this.embarqueId,
        this.guiaId,
        user.sub,
        'general'
      ).toPromise();

      console.log('Foto guardada:', foto);

      // Guardar referencia en respuestas
      // Usar el ID correcto según el tipo de checklist
      const firmaKey = tipo === 'salida' ? 'firma' : 'firma_operador';

      if (tipo === 'salida') {
        // Construir objeto una sola vez para evitar datos stale
        const respuestasActualizadas = { ...this.respuestasSalida(), [firmaKey]: foto?.url };
        this.respuestasSalida.set(respuestasActualizadas);
        // Guardar checklist automáticamente en backend
        if (this.checklistSalida()?.id) {
          await this.checklistService.updateRespuestas(
            this.checklistSalida()!.id,
            respuestasActualizadas
          ).toPromise();
          console.log('Checklist salida actualizado con firma en backend');
        }
      } else {
        // Construir objeto una sola vez para evitar datos stale
        const respuestasActualizadas = { ...this.respuestasLlegada(), [firmaKey]: foto?.url };
        this.respuestasLlegada.set(respuestasActualizadas);
        // Guardar checklist automáticamente en backend
        if (this.checklistLlegada()?.id) {
          await this.checklistService.updateRespuestas(
            this.checklistLlegada()!.id,
            respuestasActualizadas
          ).toPromise();
          console.log('Checklist llegada actualizado con firma en backend');
        }
      }

      this.messageService.add({
        severity: 'success',
        summary: 'Firma Guardada',
        detail: 'La firma se ha guardado correctamente'
      });
    } catch (error: any) {
      console.error('Error guardando firma:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'No se pudo guardar la firma'
      });
    }
    console.log('=== FIN GUARDAR FIRMA ===');
  }

  // ===== UTILIDADES =====

  updateProgress() {
    const estado = this.currentEstado();
    const estadosOrden: ShipmentEstado[] = ['programado', 'checklist_salida', 'en_transito', 'fotos_entrega', 'checklist_llegada', 'completado'];
    const index = estadosOrden.indexOf(estado);
    const progress = index >= 0 ? Math.round(((index + 1) / estadosOrden.length) * 100) : 0;
    this.progress.set(progress);
    
    // Actualizar steps
    this.steps.update(steps => 
      steps.map(step => ({
        ...step,
        active: step.estado === estado,
        completed: estadosOrden.indexOf(step.estado) < index
      }))
    );
  }

  goToStep(estado: ShipmentEstado) {
    // Solo permitir navegar a pasos completados o el actual
    const steps = this.steps();
    const step = steps.find(s => s.estado === estado);
    if (step && (step.completed || step.active)) {
      this.currentEstado.set(estado);
    }
  }

  getEstadoLabel(estado: ShipmentEstado): string {
    return ESTADO_LABELS[estado] || estado;
  }

  getEstadoColor(estado: ShipmentEstado): string {
    return ESTADO_COLORS[estado] || 'gray';
  }

  cancel() {
    this.visibleChange.emit(false);
    this.reset();
  }

  reset() {
    this.currentEstado.set('programado');
    this.checklistSalida.set(null);
    this.checklistLlegada.set(null);
    this.respuestasSalida.set({});
    this.respuestasLlegada.set({});
    this.fotos.set({});
    this.cambiosPendientes.set(false);
    this.progress.set(0);
  }
}
