import { Component, OnInit, inject, signal, computed, effect, DestroyRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ConfigService } from '../../core/services/logistics.service';
import { CatalogService, CatalogEntry } from '../../core/services/catalog.service';

interface ComisionRuta {
  id: string;
  destino: string;
  comision_chofer: number;
  comision_repartidor: number;
  comision_ayudante: number;
  km_referencia: number;
}

interface FactorRegion {
  id: string;
  region: string;
  factor: number;
  referencia: string;
}

interface CostoUnidad {
  id: string;
  nombre: string;
  costo_km: number;
}

interface ViaticosConfig {
  cafe: number;
  desayuno: number;
  comida: number;
  cena: number;
}

interface TarifasManiobra {
  carga_por_persona: number;
  descarga_por_caja: number;
}

@Component({
  selector: 'app-config',
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    DialogModule,
    TabViewModule,
    TooltipModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    ListboxModule,
    ToastModule,
    IconComponent
  ],
   template: `
    <p-toast position="bottom-right" [baseZIndex]="9999" />
    <div class="w-full space-y-4 animate-fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-headline text-content-main">Configuración de <span class="text-content-muted">Catálogos</span></h1>
          <p class="text-body text-content-muted mt-1">Parámetros maestros y tablas de comisiones</p>
        </div>
        <p-button 
          label="Restaurar Valores" 
          icon="pi pi-refresh"
          styleClass="p-button-brand"
          (onClick)="resetData()" />
      </div>

      <!-- Tab Navigation -->
      <div class="relative flex gap-2 p-1 bg-surface-ground border border-divider rounded-[2rem] mb-8 w-fit mx-auto shadow-inner group">
        <!-- Sliding Indicator -->
        <div class="absolute bg-slate-950 rounded-[1.5rem] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl shadow-slate-950/20"
             [style.left.px]="sliderStyle().left"
             [style.width.px]="sliderStyle().width"
             [style.height.px]="sliderStyle().height"
             [style.top.px]="sliderStyle().top">
        </div>

        @for (item of menuItems; track item.key; let i = $index) {
          <button 
            #tabBtn
            class="relative z-10 flex items-center gap-2 px-8 py-3 rounded-[1.5rem] text-[10px] font-black transition-all uppercase tracking-[0.2em]"
            [class.text-white]="seccionActiva() === item.key"
            [class.text-content-muted]="seccionActiva() !== item.key"
            [class.hover:text-content-main]="seccionActiva() !== item.key"
            (click)="seccionActiva.set(item.key)">
            <app-icon [name]="item.icon" [size]="seccionActiva() === item.key ? 'md' : 'sm'"></app-icon>
            {{ item.label }}
          </button>
        }
      </div>

      <!-- ═══════════════════════════════════════ CONTENIDO: COMISIONES ═══════════════════════════════════════ -->
      @if (seccionActiva() === 'comisiones') {
        <div class="card-premium animate-fade-in-up">
          <div class="flex items-center justify-between p-3 border-b border-divider bg-surface-ground/50 rounded-t-xl">
            <div class="flex items-center gap-2">
              <app-icon name="map-pin" class="text-brand"></app-icon>
              <span class="font-bold text-content-main uppercase tracking-widest text-xs">Tabulador de Comisiones</span>
            </div>
            <div class="flex items-center gap-2">
              <p-iconField iconPosition="left">
                <p-inputIcon styleClass="pi pi-search" />
                <input 
                  pInputText 
                  [(ngModel)]="filtroRuta" 
                  placeholder="Buscar destino..."
                  class="w-48" />
              </p-iconField>
              <p-button 
                label="Nueva Ruta" 
                icon="pi pi-plus"
                size="small"
                styleClass="p-button-brand"
                (onClick)="nuevaRuta()" />
            </div>
          </div>

          <p-table
            [value]="filteredComisiones()"
            styleClass="p-datatable-modern"
            [rowHover]="true">
            <ng-template #header>
              <tr>
                <th class="text-left text-label">Destino</th>
                <th class="text-center text-label w-40">Chofer</th>
                <th class="text-center text-label w-40">Repartidor</th>
                <th class="text-center text-label w-40">Ayudante</th>
                <th class="text-center text-label w-32">KM Ref.</th>
                <th class="text-center text-label w-20"></th>
              </tr>
            </ng-template>
            <ng-template #body let-ruta let-i="rowIndex">
              <tr [id]="'ruta-' + ruta.id" [class.new-row-highlight]="nuevaRutaId() === ruta.id" class="hover-lift">
                <td>
                  <input 
                    pInputText 
                    [ngModel]="ruta.destino" 
                    (ngModelChange)="onDestinoChange(ruta, 'destino', $event)"
                    placeholder="DESTINO"
                    class="w-full !font-bold !text-brand uppercase" />
                </td>
                <td class="text-center">
                  <p-inputNumber 
                    [ngModel]="ruta.comision_chofer" 
                    (ngModelChange)="onDestinoChange(ruta, 'comision_chofer', $event)"
                    mode="currency" 
                    currency="MXN" 
                    locale="es-MX"
                    styleClass="w-full input-mono" />
                </td>
                <td class="text-center">
                  <p-inputNumber 
                    [ngModel]="ruta.comision_repartidor" 
                    (ngModelChange)="onDestinoChange(ruta, 'comision_repartidor', $event)"
                    mode="currency" 
                    currency="MXN" 
                    locale="es-MX"
                    styleClass="w-full input-mono" />
                </td>
                <td class="text-center">
                  <p-inputNumber 
                    [ngModel]="ruta.comision_ayudante" 
                    (ngModelChange)="onDestinoChange(ruta, 'comision_ayudante', $event)"
                    mode="currency" 
                    currency="MXN" 
                    locale="es-MX"
                    styleClass="w-full input-mono" />
                </td>
                <td class="text-center">
                  <p-inputNumber 
                    [ngModel]="ruta.km_referencia" 
                    (ngModelChange)="onDestinoChange(ruta, 'km_referencia', $event)"
                    [min]="0"
                    suffix=" km"
                    [useGrouping]="false"
                    styleClass="w-full input-mono" />
                </td>
                <td class="text-center">
                  <p-button 
                    icon="pi pi-trash" 
                    severity="danger" 
                    [text]="true" 
                    size="small"
                    styleClass="action-delete"
                    (onClick)="eliminarRuta($event, i)" />
                </td>
              </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
              <tr>
                <td colspan="6" class="text-center py-12">
                  <div class="flex flex-col items-center text-content-muted">
                    <i class="pi pi-map text-4xl mb-3 opacity-30"></i>
                    <span class="text-lg uppercase tracking-wider font-medium">Sin destinos registrados</span>
                  </div>
                </td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      }

      <!-- ═══════════════════════════════════════ CONTENIDO: FACTORES ═══════════════════════════════════════ -->
      @if (seccionActiva() === 'factores') {
        <div class="card-premium animate-fade-in-up">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-divider">
            <i class="pi pi-percentage text-content-main text-lg"></i>
            <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Factores de Costo por Km por Región</span>
          </div>
          <p class="text-sm text-content-muted mb-4">
            Regla: en rutas mayores a 300 km se suman $0.30 al factor para obtener la tarifa final.
          </p>

          <p-table
            [value]="factores()"
            styleClass="p-datatable-modern"
            [tableStyle]="{'min-width': '40rem'}">
            <ng-template pTemplate="header">
              <tr class="bg-surface-ground">
                <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Región</th>
                <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Factor $/km</th>
                <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Referencia</th>
                <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Acciones</th>
              </tr>
            </ng-template>
            <ng-template pTemplate="body" let-factor let-i="rowIndex">
              <tr class="border-t border-divider hover:bg-surface-hover/50 transition-colors">
                <td class="py-3 px-4 text-center">
                  <input 
                    pInputText 
                    [(ngModel)]="factor.region" 
                    class="w-full bg-surface-ground border border-divider rounded px-2 py-1 text-sm text-content-main text-center" />
                </td>
                <td class="py-3 px-4 text-center">
                  <span class="font-mono font-bold text-lg">
                    {{ factor.factor === 1.30 ? '1.30' : '1.00' }}
                  </span>
                  <small class="text-xs text-content-muted mt-1 block">
                    {{ factor.km > 300 ? 'Incluye +$0.30 (km > 300)' : 'Factor base' }}
                  </small>
                </td>
                <td class="py-3 px-4 text-center">
                  <input 
                    pInputText 
                    [(ngModel)]="factor.referencia" 
                    placeholder="Ej: Rutas locales"
                    class="w-full bg-surface-ground border border-divider rounded px-2 py-1 text-sm text-content-main text-center" />
                </td>
                <td class="py-3 px-4 text-center">
                  <p-button 
                    icon="pi pi-trash" 
                    severity="danger" 
                    text 
                    size="small"
                    styleClass="action-delete"
                    (onClick)="eliminarFactor($event, i)" />
                </td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      }

      <!-- ═══════════════════════════════════════ CONTENIDO: COSTO KM ═══════════════════════════════════════ -->
      @if (seccionActiva() === 'costos') {
        <div class="space-y-4 animate-fade-in-up">
          <div class="card-premium">
            <div class="flex items-center gap-2 mb-4 pb-3 border-b border-divider">
              <i class="pi pi-truck text-content-main text-lg"></i>
              <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Costo Fijo por Km por Unidad</span>
            </div>
            <p class="text-sm text-content-muted mb-4">
              Este costo se usa para calcular el costo fijo real de cada viaje según los km recorridos.
            </p>

            <p-table
              [value]="costosUnidad()"
              styleClass="p-datatable-modern"
              [tableStyle]="{'min-width': '40rem'}">
              <ng-template pTemplate="header">
                <tr class="bg-surface-ground">
                  <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Unidad / Modelo</th>
                  <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Costo Fijo $/km</th>
                  <th class="text-xl uppercase tracking-[0.05em] text-content-muted font-bold py-3 px-4 text-center">Acciones</th>
                </tr>
              </ng-template>
              <ng-template pTemplate="body" let-unidad let-i="rowIndex">
                <tr class="border-t border-divider hover:bg-surface-hover/50 transition-colors">
                  <td class="py-3 px-4 text-center">
                    <input 
                      pInputText 
                      [(ngModel)]="unidad.nombre" 
                      class="w-full bg-surface-ground border border-divider rounded px-2 py-1 text-sm text-content-main text-center" />
                  </td>
                  <td class="py-3 px-4 text-center">
                    <p-inputNumber 
                      [(ngModel)]="unidad.costo_km" 
                      mode="currency" 
                      currency="MXN" 
                      locale="es-MX"
                      [minFractionDigits]="2"
                      [maxFractionDigits]="2"
                      styleClass="w-32 text-center" />
                  </td>
                  <td class="py-3 px-4 text-center">
                    <p-button 
                      icon="pi pi-trash" 
                      severity="danger" 
                      text 
                      size="small"
                      styleClass="action-delete"
                      (onClick)="eliminarUnidad($event, i)" />
                  </td>
                </tr>
              </ng-template>
            </p-table>
          </div>

          <!-- Agregar Unidad -->
          <div class="card-premium">
            <div class="flex items-center gap-2 mb-4 pb-3 border-b border-divider">
              <i class="pi pi-plus-circle text-content-main text-lg"></i>
              <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Agregar Unidad al Catálogo de Km</span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="text-[10px] uppercase tracking-[0.2em] text-content-muted">Nombre / Modelo</label>
                <input 
                  pInputText 
                  [(ngModel)]="nuevaUnidad.nombre" 
                  placeholder="HINO 500, INTERNATIONAL..."
                  class="w-full bg-surface-ground border border-divider rounded px-3 py-2 text-sm" />
              </div>
              <div class="flex flex-col gap-1">
                <label for="nuevaUnidad-costo_km" class="text-[10px] uppercase tracking-[0.2em] text-content-muted">Costo $/km</label>
                <p-inputNumber 
                  [(ngModel)]="nuevaUnidad.costo_km" 
                  mode="currency"
                  currency="MXN"
                  locale="es-MX"
                  [minFractionDigits]="2"
                  [maxFractionDigits]="2"
                  placeholder="0.00"
                  styleClass="w-full" />
              </div>
            </div>
            <p-button 
              label="+ Agregar" 
              severity="contrast"
              styleClass="mt-4"
              (onClick)="agregarUnidad()" />
          </div>
        </div>
      }

      <!-- ═══════════════════════════════════════ CONTENIDO: VIÁTICOS ═══════════════════════════════════════ -->
      @if (seccionActiva() === 'viaticos') {
        <div class="grid grid-cols-3 gap-6 animate-fade-in-up">
          <!-- Main Breakdown Card -->
          <div class="col-span-2 space-y-6">
            <div class="card-premium p-6">
              <div class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-lg">
                    <app-icon name="credit-card" size="md"></app-icon>
                  </div>
                  <div>
                    <h3 class="text-sm font-black uppercase tracking-widest text-content-main">Tabulador de Viáticos</h3>
                    <p class="text-[10px] text-content-faint uppercase font-bold tracking-wider">Configuración de montos diarios por persona</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-[10px] text-content-faint uppercase font-black mb-1">Presupuesto Sugerido</p>
                  <p class="text-2xl font-black text-slate-950">{{ maximoViaticos() | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-8">
                <!-- Breakfast & Coffee -->
                <div class="space-y-4">
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <label class="text-[10px] font-black uppercase tracking-widest text-content-muted flex items-center gap-2">
                        <app-icon name="coffee" size="sm" class="text-amber-600"></app-icon> Cafetería (Antes 6 AM)
                      </label>
                    </div>
                    <p-inputNumber [(ngModel)]="viaticos.cafe" mode="currency" currency="MXN" locale="es-MX" 
                      styleClass="w-full !rounded-2xl" class="premium-input-giant" (onInput)="calcularMaximoViaticos()" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <label class="text-[10px] font-black uppercase tracking-widest text-content-muted flex items-center gap-2">
                        <app-icon name="sun" size="sm" class="text-orange-500"></app-icon> Desayuno (Antes 7 AM)
                      </label>
                    </div>
                    <p-inputNumber [(ngModel)]="viaticos.desayuno" mode="currency" currency="MXN" locale="es-MX" 
                      styleClass="w-full !rounded-2xl" class="premium-input-giant" (onInput)="calcularMaximoViaticos()" />
                  </div>
                </div>

                <!-- Lunch & Dinner -->
                <div class="space-y-4">
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <label class="text-[10px] font-black uppercase tracking-widest text-content-muted flex items-center gap-2">
                        <app-icon name="utensils" size="sm" class="text-blue-600"></app-icon> Comida (Posterior 3 PM)
                      </label>
                    </div>
                    <p-inputNumber [(ngModel)]="viaticos.comida" mode="currency" currency="MXN" locale="es-MX" 
                      styleClass="w-full !rounded-2xl" class="premium-input-giant" (onInput)="calcularMaximoViaticos()" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <label class="text-[10px] font-black uppercase tracking-widest text-content-muted flex items-center gap-2">
                        <app-icon name="moon" size="sm" class="text-indigo-900"></app-icon> Cena / Pernocta (Posterior 8 PM)
                      </label>
                    </div>
                    <p-inputNumber [(ngModel)]="viaticos.cena" mode="currency" currency="MXN" locale="es-MX" 
                      styleClass="w-full !rounded-2xl" class="premium-input-giant" (onInput)="calcularMaximoViaticos()" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Maniobras Pricing Board -->
            <div class="card-premium p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg">
                  <app-icon name="package" size="md"></app-icon>
                </div>
                <div>
                  <h3 class="text-sm font-black uppercase tracking-widest text-content-main">Costos de Maniobra</h3>
                  <p class="text-[10px] text-content-faint uppercase font-bold tracking-wider">Cargadores y descarga de regreso</p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-6">
                <div class="p-4 bg-surface-ground rounded-2xl border border-divider">
                  <label class="text-[9px] font-black uppercase tracking-widest text-content-faint block mb-2">Tarifa Carga (Por Persona)</label>
                  <p-inputNumber [(ngModel)]="tarifasManiobra.carga_por_persona" mode="currency" currency="MXN" locale="es-MX" 
                    styleClass="w-full !bg-transparent !border-0 text-xl font-black" />
                </div>
                <div class="p-4 bg-surface-ground rounded-2xl border border-divider">
                  <label class="text-[9px] font-black uppercase tracking-widest text-content-faint block mb-2">Tarifa Descarga (Por Caja)</label>
                  <p-inputNumber [(ngModel)]="tarifasManiobra.descarga_por_caja" mode="currency" currency="MXN" locale="es-MX" 
                    styleClass="w-full !bg-transparent !border-0 text-xl font-black" />
                </div>
              </div>
            </div>
          </div>

          <!-- Summary / Rules Card -->
          <div class="space-y-6">
            <div class="card-premium p-6 bg-slate-950 text-white border-0 shadow-2xl relative overflow-hidden">
               <div class="absolute -right-10 -top-10 opacity-10">
                 <app-icon name="info" size="xl" class="text-[10rem]"></app-icon>
               </div>
               <h4 class="text-xs font-black uppercase tracking-[0.2em] mb-6 text-brand">Políticas de Viáticos</h4>
               
               <div class="space-y-6">
                 <div class="flex gap-4">
                   <div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <span class="text-[10px] font-black">01</span>
                   </div>
                   <p class="text-[11px] leading-relaxed opacity-80">El sistema autoriza <b>automáticamente</b> los viáticos basándose en la hora de carga y el registro de retorno.</p>
                 </div>
                 <div class="flex gap-4">
                   <div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <span class="text-[10px] font-black">02</span>
                   </div>
                   <p class="text-[11px] leading-relaxed opacity-80">La <b>Cena</b> solo se acredita si el colaborador pernocta en ruta o arriba después del cierre operativo.</p>
                 </div>
                 <div class="flex gap-4">
                   <div class="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <span class="text-[10px] font-black">03</span>
                   </div>
                   <p class="text-[11px] leading-relaxed opacity-80">Las tarifas de maniobra son <b>base</b> y pueden ser ajustadas por el supervisor de logística en casos especiales.</p>
                 </div>
               </div>

               <div class="mt-8 pt-6 border-t border-white/10">
                 <p class="text-[9px] font-black uppercase tracking-widest opacity-40">Última Actualización</p>
                 <p class="text-[10px] font-bold">23 de Abril, 2026</p>
               </div>
            </div>
          </div>
        </div>
      }

      <!-- ═══════════════════════════════════════ CONTENIDO: CATÁLOGOS ═══════════════════════════════════════ -->
      @if (seccionActiva() === 'catalogos') {
        <div class="shipment-fit-screen grid grid-cols-12 gap-6 animate-fade-in-up h-[70vh]">
          
          <!-- Sidebar: Categorías -->
          <div class="col-span-3 flex flex-col gap-4">
            <div class="card-premium h-full flex flex-col overflow-hidden bg-surface-ground/30">
              <div class="p-4 border-b border-divider flex items-center justify-between">
                <span class="text-xs font-black uppercase tracking-widest text-content-main">Categorías</span>
                <app-icon name="filter" size="sm" class="text-content-faint"></app-icon>
              </div>
              
              <div class="flex-1 overflow-y-auto p-2 space-y-1">
                @for (cat of categorias(); track cat) {
                  <button 
                    (click)="selectCategory(cat)"
                    class="w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
                    [class.bg-slate-950]="catSeleccionada() === cat"
                    [class.text-white]="catSeleccionada() === cat"
                    [class.hover:bg-surface-hover]="catSeleccionada() !== cat">
                    <span class="text-[11px] font-bold uppercase tracking-wider">{{ cat }}</span>
                    <app-icon name="chevron-right" size="sm" 
                      [class]="catSeleccionada() === cat ? 'text-brand' : 'text-content-faint group-hover:text-content-main'"></app-icon>
                  </button>
                }
              </div>

              <!-- Nueva Categoría -->
              <div class="p-4 bg-surface-card border-t border-divider">
                 <p-button 
                   label="Nueva Categoría" 
                   severity="secondary" 
                   [text]="true"
                   icon="pi pi-plus" 
                   styleClass="w-full !text-[10px] font-black uppercase" />
              </div>
            </div>
          </div>

          <!-- Content: Entradas -->
          <div class="col-span-9 flex flex-col gap-4">
            <div class="card-premium h-full flex flex-col overflow-hidden">
               <div class="p-4 border-b border-divider bg-surface-ground/50 flex items-center justify-between">
                 <div class="flex items-center gap-3">
                   <div class="h-8 w-8 rounded-lg bg-slate-950 flex items-center justify-center text-white">
                      <app-icon name="list" size="sm"></app-icon>
                   </div>
                   <div>
                     <h3 class="text-xs font-black uppercase tracking-widest text-content-main">Valores de {{ catSeleccionada() }}</h3>
                     <p class="text-[9px] text-content-faint uppercase font-bold tracking-tighter">Gestiona las opciones disponibles en los selectores</p>
                   </div>
                 </div>
               </div>

               <div class="flex-1 overflow-y-auto p-0">
                 <p-table [value]="entradasCatalogo()" styleClass="p-datatable-modern">
                    <ng-template #header>
                      <tr>
                        <th class="text-left py-3 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-content-faint">Valor Interno</th>
                        <th class="text-left py-3 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-content-faint">Etiqueta Visual</th>
                        <th class="text-center py-3 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-content-faint w-20">Estado</th>
                        <th class="text-right py-3 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-content-faint w-20"></th>
                      </tr>
                    </ng-template>
                    <ng-template #body let-entry>
                      <tr class="hover-lift border-b border-divider/50">
                        <td class="font-mono text-xs font-bold text-brand py-3 px-4">{{ entry.valor }}</td>
                        <td class="text-xs font-medium text-content-main py-3 px-4">{{ entry.etiqueta }}</td>
                        <td class="text-center py-3 px-4">
                          <span class="status-chip status-activo !text-[9px]">ACTIVO</span>
                        </td>
                        <td class="text-right py-3 px-4">
                           <p-button 
                             icon="pi pi-trash" 
                             [text]="true" 
                             severity="secondary" 
                             styleClass="h-7 w-7 hover:text-red-500" 
                             (onClick)="eliminarEntrada($event, entry.id)" />
                        </td>
                      </tr>
                    </ng-template>
                 </p-table>
               </div>

               <!-- Footer: Nueva Entrada -->
               <div class="p-4 bg-surface-ground border-t border-divider">
                 <div class="flex items-end gap-4">
                   <div class="flex-1 space-y-2">
                     <label class="text-[9px] font-black uppercase tracking-widest text-content-faint">Nuevo Valor</label>
                     <input pInputText [(ngModel)]="nuevaEntrada.valor" placeholder="Ej: cargo_especial" class="w-full text-xs font-mono" />
                   </div>
                   <div class="flex-1 space-y-2">
                     <label class="text-[9px] font-black uppercase tracking-widest text-content-faint">Nueva Etiqueta</label>
                     <input pInputText [(ngModel)]="nuevaEntrada.etiqueta" placeholder="Ej: Cargo Especial" class="w-full text-xs" />
                   </div>
                   <p-button 
                     label="Agregar" 
                     icon="pi pi-plus" 
                     styleClass="p-button-brand h-[34px] px-6 text-[10px] font-black uppercase"
                     (onClick)="agregarEntrada()" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class ConfigComponent implements OnInit {
  // Navigation elements
  @ViewChildren('tabBtn') tabButtons!: QueryList<ElementRef>;
  
  // Active section for navigation
  seccionActiva = signal('comisiones');
  
  // Slider position signal
  sliderStyle = signal({ left: 0, width: 0, height: 0, top: 0 });

  // Items del menú (tabs simples)
  menuItems = [
    { key: 'comisiones', label: 'Rutas', icon: 'map' },
    { key: 'factores', label: 'Factores', icon: 'percent' },
    { key: 'costos', label: 'Costo Km', icon: 'truck' },
    { key: 'viaticos', label: 'Viáticos', icon: 'credit-card' },
    { key: 'catalogos', label: 'Catálogos', icon: 'database' }
  ];

  // Comisiones por ruta
  comisiones = signal<ComisionRuta[]>([]);
  filtroRuta = '';

  // Factores por región
  factores = signal<FactorRegion[]>([]);

  // Costo por unidad
  costosUnidad = signal<CostoUnidad[]>([]);
  nuevaUnidad: Partial<CostoUnidad> = {};

  // Viáticos
  viaticos: ViaticosConfig = {
    cafe: 50,
    desayuno: 100,
    comida: 100,
    cena: 100
  };
  maximoViaticos = signal(350);

  // Tarifas de maniobra
  tarifasManiobra: TarifasManiobra = {
    carga_por_persona: 30,
    descarga_por_caja: 1.00
  };

  // Catalogs logic
  private catalogService = inject(CatalogService);
  private configService = inject(ConfigService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  
  // Debounce para evitar multiples notificaciones simultaneas
  private lastNotification = { key: '', time: 0 };
  
  // Función unificada de notificación
  showNotification(severity: 'success' | 'error' | 'info' | 'warn', summary: string, detail: string) {
    const now = Date.now();
    const key = `${severity}-${summary}`;
    // Evitar duplicados en menos de 2 segundos
    if (key === this.lastNotification.key && (now - this.lastNotification.time) < 2000) {
      return;
    }
    this.lastNotification = { key, time: now };
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }
  
  // Debounce para guardado automático
  private saveTimeouts = new Map<string, any>();
  
  // Actualizar destino con debounce
  updateDestino(id: string, data: any) {
    // Limpiar timeout anterior si existe
    if (this.saveTimeouts.has(id)) {
      clearTimeout(this.saveTimeouts.get(id));
    }
    
    // Establecer nuevo timeout (1 segundo después de dejar de escribir)
    const timeout = setTimeout(() => {
      console.log('[Config] Auto-saving destino:', id, data);
      this.configService.updateDestino(id, data).subscribe({
        next: (response) => {
          console.log('[Config] Auto-save response:', response);
          this.showNotification('success', 'Guardado', 'Los cambios se guardaron automáticamente');
        },
        error: (err) => {
          console.error('[Config] Error auto-saving destino:', err);
          this.showNotification('error', 'Error', 'No se pudieron guardar los cambios');
        }
      });
      this.saveTimeouts.delete(id);
    }, 1000);
    
    this.saveTimeouts.set(id, timeout);
  }
  
  // Manejar cambios en campos de destino
  onDestinoChange(ruta: any, field: string, value: any) {
    // Actualizar el modelo local
    ruta[field] = value;
    
    // Preparar datos para enviar (solo campos válidos)
    const data: any = {};
    
    // Mapear destino a nombre si es el campo destino
    if (field === 'destino') {
      data.nombre = value;
    } else {
      data[field] = value;
    }
    
    // Llamar update con debounce
    this.updateDestino(ruta.id, data);
  }
  
  categorias = signal<string[]>([]);
  catSeleccionada = signal<string | null>(null);
  entradasCatalogo = signal<CatalogEntry[]>([]);
  nuevaEntrada: Partial<CatalogEntry> = { valor: '', etiqueta: '' };
  nuevaRutaId = signal<string | null>(null);
  
  constructor() {
    effect(() => {
      // Trigger when active section changes
      const active = this.seccionActiva();
      // Use microtask to ensure DOM is updated
      setTimeout(() => this.updateSlider(), 0);
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    this.calcularMaximoViaticos();
    // Cargar todos los catálogos en paralelo para mejorar rendimiento
    this.loadDestinos();
    this.loadCostosKm();
    this.loadFactores();
    this.loadCatalogCategories();
    // Initial calculation
    setTimeout(() => this.updateSlider(), 100);
  }

  loadDestinos() {
    console.log('[Config] Loading destinos from API...');
    this.configService.getDestinos().subscribe({
      next: (data) => {
        console.log('[Config] Destinos loaded:', data.length, 'items');
        const rutas = data.map((d: any) => ({
          id: d.id,
          destino: d.nombre || d.destino || 'SIN NOMBRE',
          comision_chofer: d.comision_chofer || 0,
          comision_repartidor: d.comision_repartidor || 0,
          comision_ayudante: d.comision_ayudante || 0,
          km_referencia: d.km || d.km_referencia || 0
        }));
        console.log('[Config] Mapped rutas:', rutas.length, 'items');
        this.comisiones.set(rutas);
      },
      error: (err) => {
        console.error('[Config] Error loading destinos:', err);
      }
    });
  }

  loadCostosKm() {
    this.configService.getFinanzas().subscribe(data => {
      const costosKm = data
        .filter((d: any) => d.categoria === 'costo_km')
        .map((d: any) => ({
          id: d.id,
          nombre: d.descripcion,
          costo_km: parseFloat(d.valor)
        }));
      this.costosUnidad.set(costosKm);
    });
  }

  loadFactores() {
    // Cargar rutas con km > 300 desde el catálogo de destinos
    this.configService.getDestinos().subscribe({
      next: (destinos: any[]) => {
        console.log('[Config] loadFactores - Total destinos:', destinos.length);
        const rutasLargas = destinos
          .filter(d => parseFloat(d.km || d.km_referencia || 0) > 300)
          .map(d => {
            const km = parseFloat(d.km || d.km_referencia || 0);
            const kmOneWay = km; // km de ida (sin retorno)
            // Factor predeterminado es 1, si > 300km se suma 0.30
            const factorCalculado = kmOneWay > 300 ? 1.30 : 1;
            
            return {
              id: d.id,
              region: d.nombre || d.destino,
              factor: factorCalculado, // 1 o 1.30 (no editable)
              referencia: d.nombre || d.destino,
              km: km
            };
          });
        console.log('[Config] loadFactores - Rutas > 300km:', rutasLargas.length, rutasLargas);
        this.factores.set(rutasLargas);
      },
      error: (err) => {
        console.error('[Config] Error loading factores:', err);
      }
    });
  }

  loadCatalogCategories() {
    this.catalogService.getCategories().subscribe(cats => {
      this.categorias.set(cats);
      if (cats.length > 0 && !this.catSeleccionada()) {
        this.selectCategory(cats[0]);
      }
    });
  }

  selectCategory(cat: string) {
    this.catSeleccionada.set(cat);
    this.catalogService.getCatalogs(cat).subscribe(entries => {
      this.entradasCatalogo.set(entries);
    });
  }

  agregarEntrada() {
    if (!this.nuevaEntrada.valor || !this.nuevaEntrada.etiqueta || !this.catSeleccionada()) return;
    
    const entry: Partial<CatalogEntry> = {
      ...this.nuevaEntrada,
      categoria: this.catSeleccionada()!
    };

    this.catalogService.saveEntry(entry).subscribe(() => {
      this.selectCategory(this.catSeleccionada()!);
      this.nuevaEntrada = { valor: '', etiqueta: '' };
    });
  }

  eliminarEntrada(event: Event, id: string) {
    const entry = this.entradasCatalogo().find(e => e.id === id);
    if (!entry) return;
    
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de eliminar la entrada "${entry.etiqueta}"?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Eliminar',
        severity: 'danger'
      },
      accept: () => {
        this.catalogService.deleteEntry(id).subscribe({
          next: () => {
            this.selectCategory(this.catSeleccionada()!);
            this.showNotification('success', 'Eliminado', `La entrada "${entry.etiqueta}" ha sido eliminada`);
          },
          error: (err) => {
            console.error('Error al eliminar entrada:', err);
            this.showNotification('error', 'Error', 'No se pudo eliminar la entrada');
          }
        });
      },
      reject: () => {
        this.showNotification('info', 'Cancelado', 'La eliminación fue cancelada');
      }
    });
  }

  updateSlider() {
    if (!this.tabButtons) return;
    
    const buttons = this.tabButtons.toArray();
    const activeIndex = this.menuItems.findIndex(m => m.key === this.seccionActiva());
    const activeButton = buttons[activeIndex]?.nativeElement;

    if (activeButton) {
      this.sliderStyle.set({
        left: activeButton.offsetLeft,
        width: activeButton.clientWidth,
        height: activeButton.clientHeight,
        top: activeButton.offsetTop
      });
    }
  }

  filteredComisiones() {
    if (!this.filtroRuta) return this.comisiones();
    const term = this.filtroRuta.toLowerCase();
    return this.comisiones().filter(c => 
      c.destino.toLowerCase().includes(term)
    );
  }

  nuevaRuta() {
    console.log('[Config] nuevaRuta() called');
    const newRuta: any = {
      nombre: 'NUEVO DESTINO',
      comision_chofer: 0,
      comision_repartidor: 0,
      comision_ayudante: 0,
      km_referencia: 0
    };
    console.log('[Config] Calling createDestino with:', newRuta);
    this.configService.createDestino(newRuta).subscribe({
      next: (created) => {
        console.log('[Config] Destino created successfully:', created);
        // Recargar la lista desde la BD
        this.loadDestinos();
        this.showNotification('success', 'Creado', `La ruta "${created.nombre}" ha sido creada`);
      },
      error: (err) => {
        console.error('Error al crear ruta:', err);
        this.showNotification('error', 'Error', 'No se pudo crear la ruta');
      }
    });
  }

  eliminarRuta(event: Event, index: number) {
    const ruta = this.comisiones()[index];
    if (!ruta || !ruta.id) return;
    
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de eliminar la ruta "${ruta.destino}"?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Eliminar',
        severity: 'danger'
      },
      accept: () => {
        this.configService.deleteDestino(ruta.id).subscribe({
          next: () => {
            this.comisiones.update(list => list.filter((_, i) => i !== index));
            this.showNotification('success', 'Eliminado', `La ruta "${ruta.destino}" ha sido eliminada`);
          },
          error: (err) => {
            console.error('Error al eliminar ruta:', err);
            this.showNotification('error', 'Error', 'No se pudo eliminar la ruta');
          }
        });
      },
      reject: () => {
        this.showNotification('info', 'Cancelado', 'La eliminación fue cancelada');
      }
    });
  }

  eliminarFactor(event: Event, index: number) {
    const factor = this.factores()[index];
    if (!factor) return;
    
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de eliminar el factor "${factor.region}"?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Eliminar',
        severity: 'danger'
      },
      accept: () => {
        this.factores.update(list => list.filter((_, i) => i !== index));
        this.showNotification('success', 'Eliminado', `El factor "${factor.region}" ha sido eliminado`);
      },
      reject: () => {
        this.showNotification('info', 'Cancelado', 'La eliminación fue cancelada');
      }
    });
  }

  agregarUnidad() {
    if (!this.nuevaUnidad.nombre || !this.nuevaUnidad.costo_km) return;
    
    const unidad: CostoUnidad = {
      id: crypto.randomUUID(),
      nombre: this.nuevaUnidad.nombre,
      costo_km: this.nuevaUnidad.costo_km
    };
    this.costosUnidad.update(list => [...list, unidad]);
    this.nuevaUnidad = {};
  }

  eliminarUnidad(event: Event, index: number) {
    const unidad = this.costosUnidad()[index];
    if (!unidad) return;
    
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de eliminar la unidad "${unidad.nombre}"?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Eliminar',
        severity: 'danger'
      },
      accept: () => {
        this.costosUnidad.update(list => list.filter((_, i) => i !== index));
        this.showNotification('success', 'Eliminado', `La unidad "${unidad.nombre}" ha sido eliminada`);
      },
      reject: () => {
        this.showNotification('info', 'Cancelado', 'La eliminación fue cancelada');
      }
    });
  }

  calcularMaximoViaticos() {
    const max = (this.viaticos.cafe || 0) + 
                (this.viaticos.desayuno || 0) + 
                (this.viaticos.comida || 0) + 
                (this.viaticos.cena || 0);
    this.maximoViaticos.set(max);
  }

  resetData() {
    // Reload data from database instead of setting hardcoded values
    this.loadDestinos();
    this.loadFactores();
    this.loadCostosKm();
    // Reset viaticos to default
    this.viaticos = {
      desayuno: 50,
      comida: 80,
      cena: 70,
      cafe: 25
    };
    this.calcularMaximoViaticos();
  }
}

// Config component with catalogs - Beta UX design
