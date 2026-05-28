import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ShipmentsService, FleetService, CostsService, GuidesService, StaffService } from '../../core/services/logistics.service';
import { FotosService, Foto } from '../../core/services/fotos.service';
import { ChecklistService, Checklist } from '../../core/services/checklist.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportPrintComponent } from './report-print.component';

interface ReporteEmbarque {
  id: string;
  folio: string;
  ruta: string;
  km: number;
  flete: number;
  costo_operativo: number;
  margen: number;
  margen_pct: number;
  ingreso_por_km: number;
  costo_por_km: number;
}

interface ReporteUnidad {
  placa: string;
  embarques: number;
  km_total: number;
  ingreso_total: number;
  costo_total: number;
  margen: number;
  ingreso_por_km: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DatePickerModule,
    SelectModule,
    TooltipModule,
    DialogModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    IconComponent,
    ReportPrintComponent
  ],
  template: `
    <div class="w-full space-y-4 animate-fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-headline text-content-main">Análisis de <span class="text-content-muted">Rentabilidad</span></h1>
          <p class="text-body text-content-muted mt-1">Monitoreo financiero y rendimiento operativo</p>
        </div>
        <div class="flex gap-2">
          <p-button 
            label="Exportar PDF" 
            icon="pi pi-file-pdf"
            [outlined]="true"
            styleClass="p-button-brand"
            (onClick)="exportarPDF()" />
          <p-button 
            label="Imprimir" 
            icon="pi pi-print"
            styleClass="p-button-brand"
            (onClick)="imprimirReporte()" />
        </div>
      </div>

      <!-- Filters Area -->
      <div class="card-premium p-4">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted">Rango Desde</label>
            <p-datepicker [(ngModel)]="fechaDesde" dateFormat="dd/mm/yy" [showIcon]="true" appendTo="body" styleClass="w-full" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted">Rango Hasta</label>
            <p-datepicker [(ngModel)]="fechaHasta" dateFormat="dd/mm/yy" [showIcon]="true" appendTo="body" styleClass="w-full" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted">Unidad / Placa</label>
            <p-select 
              [(ngModel)]="filtroUnidad"
              [options]="unidadesOptions()"
              optionLabel="label"
              optionValue="value"
              placeholder="Todas las unidades"
              styleClass="w-full"
              [showClear]="true">
              <ng-template #item let-item>
                <div class="flex items-center gap-2">
                  <app-icon name="truck" size="sm" class="opacity-50"></app-icon>
                  <span class="font-mono text-xs font-bold">{{ item.label }}</span>
                </div>
              </ng-template>
            </p-select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] font-black uppercase tracking-widest text-content-muted">Buscar Folio / Ruta</label>
            <p-iconField iconPosition="left">
              <p-inputIcon styleClass="pi pi-search" />
              <input type="text" pInputText [(ngModel)]="filtroBusqueda" (ngModelChange)="onBusquedaChange($event)" placeholder="Ej: EMB-001 o CDMX..." class="w-full" />
            </p-iconField>
          </div>
          <div class="flex gap-2">
            <p-button label="Analizar" icon="pi pi-chart-bar" styleClass="p-button-brand flex-1" (onClick)="generarReporte()" />
            <p-button icon="pi pi-filter-slash" [outlined]="true" severity="secondary" (onClick)="limpiarFiltros()" pTooltip="Limpiar Filtros" />
          </div>
        </div>
      </div>

      <!-- KPI Grid with Trace Effect -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <!-- Ingresos -->
        <div class="kpi-card-trace kpi-blue">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 shadow-inner">
              <app-icon name="trending-up" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Ingresos Totales</p>
              <p class="text-2xl font-black text-content-main leading-none">{{ kpis().ingreso | currency:'MXN':'symbol':'1.0-0' }}</p>
            </div>
          </div>
        </div>

        <!-- Costos -->
        <div class="kpi-card-trace kpi-orange">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shadow-inner">
              <app-icon name="trending-down" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Costos Operativos</p>
              <p class="text-2xl font-black text-content-main leading-none">{{ kpis().costo | currency:'MXN':'symbol':'1.0-0' }}</p>
            </div>
          </div>
        </div>

        <!-- Utilidad -->
        <div class="kpi-card-trace kpi-green">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 shadow-inner">
              <app-icon name="dollar-sign" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Utilidad Bruta</p>
              <p class="text-2xl font-black text-content-main leading-none">{{ kpis().utilidad | currency:'MXN':'symbol':'1.0-0' }}</p>
            </div>
          </div>
        </div>

        <!-- Margen -->
        <div class="kpi-card-trace kpi-purple">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shadow-inner">
              <app-icon name="percent" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Margen Neto</p>
              <p class="text-2xl font-black text-content-main leading-none">{{ kpis().margen_pct | number:'1.1-1' }}%</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════ TABLA: RENTABILIDAD POR EMBARQUE ═══════════════════════════════════════ -->
      <div class="card-premium">
        <div class="flex items-center gap-2 p-3 border-b border-divider bg-surface-ground/50 rounded-t-xl">
          <app-icon name="bar-chart-2" class="text-brand"></app-icon>
          <span class="font-bold text-content-main uppercase tracking-widest text-xs">Desglose de Rentabilidad por Embarque</span>
        </div>

        <p-table
          [value]="reporteEmbarques()"
          styleClass="p-datatable-modern"
          [rowHover]="true"
          [paginator]="true"
          [rows]="10"
          [rowsPerPageOptions]="[5, 10, 20, 50]"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} embarques">
          <ng-template #header>
            <tr>
              <th class="text-left text-label">Folio</th>
              <th class="text-left text-label">Ruta</th>
              <th class="text-center text-label">KM</th>
              <th class="text-right text-label">Flete</th>
              <th class="text-right text-label">Costo Op.</th>
              <th class="text-right text-label">Margen</th>
              <th class="text-center text-label">%</th>
              <th class="text-center text-label">$/KM Ing.</th>
              <th class="text-center text-label">$/KM Costo</th>
              <th class="text-center text-label">Acciones</th>
            </tr>
          </ng-template>
          <ng-template #body let-row>
            <tr class="hover-lift">
              <td>
                <span class="folio-badge">{{ row.folio }}</span>
              </td>
              <td>
                <span class="text-sm font-black text-content-main uppercase">{{ row.ruta }}</span>
              </td>
              <td class="text-center font-mono text-xs font-bold text-content-muted">
                {{ row.km | number }}
              </td>
              <td class="text-right font-mono text-sm font-black text-blue-600">
                {{ row.flete | currency:'MXN':'symbol':'1.0-0' }}
              </td>
              <td class="text-right font-mono text-sm font-black text-orange-600">
                {{ row.costo_operativo | currency:'MXN':'symbol':'1.0-0' }}
              </td>
              <td class="text-right font-mono text-sm font-black" [class.text-green-600]="row.margen > 0" [class.text-red-600]="row.margen < 0">
                {{ row.margen | currency:'MXN':'symbol':'1.0-0' }}
              </td>
              <td class="text-center">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black" 
                      [class.bg-green-100]="row.margen_pct > 20" 
                      [class.text-green-700]="row.margen_pct > 20"
                      [class.bg-orange-100]="row.margen_pct <= 20 && row.margen_pct > 10" 
                      [class.text-orange-700]="row.margen_pct <= 20 && row.margen_pct > 10"
                      [class.bg-red-100]="row.margen_pct <= 10" 
                      [class.text-red-700]="row.margen_pct <= 10">
                  {{ row.margen_pct | number:'1.1-1' }}%
                </span>
              </td>
              <td class="text-center font-mono text-[10px] font-bold text-content-muted">
                {{ row.ingreso_por_km | currency:'MXN':'symbol':'1.2-2' }}
              </td>
              <td class="text-center font-mono text-[10px] font-bold text-content-muted">
                {{ row.costo_por_km | currency:'MXN':'symbol':'1.2-2' }}
              </td>
              <td class="text-center">
                <p-button 
                  icon="pi pi-eye" 
                  [outlined]="true" 
                  size="small" 
                  pTooltip="Ver detalles"
                  (onClick)="verDetalles(row.id)" />
              </td>
            </tr>
          </ng-template>
          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="10" class="text-center py-12">
                <div class="flex flex-col items-center text-content-muted">
                  <i class="pi pi-chart-bar text-4xl mb-3 opacity-30"></i>
                  <span class="text-lg uppercase tracking-wider font-medium">Registra embarques y costos para ver rentabilidad</span>
                </div>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>

      <!-- ═══════════════════════════════════════ TABLA: RENTABILIDAD POR UNIDAD ═══════════════════════════════════════ -->
      <div class="card-premium">
        <div class="flex items-center gap-2 p-3 border-b border-divider bg-surface-ground/50 rounded-t-xl">
          <app-icon name="truck" class="text-brand"></app-icon>
          <span class="font-bold text-content-main uppercase tracking-widest text-xs">Rendimiento Operativo por Unidad</span>
        </div>

        <p-table
          [value]="reporteUnidades()"
          styleClass="p-datatable-modern"
          [rowHover]="true"
          [paginator]="true"
          [rows]="10"
          [rowsPerPageOptions]="[5, 10, 20, 50]"
          [showCurrentPageReport]="true"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} unidades">
          <ng-template #header>
            <tr>
              <th class="text-left text-label">Placa</th>
              <th class="text-center text-label">Viajes</th>
              <th class="text-center text-label">KM Total</th>
              <th class="text-right text-label">Ingreso</th>
              <th class="text-right text-label">Costo</th>
              <th class="text-right text-label">Utilidad</th>
              <th class="text-center text-label">$/KM</th>
            </tr>
          </ng-template>
          <ng-template #body let-row>
            <tr class="hover-lift">
              <td>
                <span class="folio-badge">{{ row.placa }}</span>
              </td>
              <td class="text-center">
                <span class="px-2 py-0.5 rounded-lg bg-surface-ground border border-divider text-[10px] font-black text-content-main">
                  {{ row.embarques }} viajes
                </span>
              </td>
              <td class="text-center font-mono text-xs font-bold text-content-muted">
                {{ row.km_total | number }}
              </td>
              <td class="text-right font-mono text-sm font-black text-blue-600">
                {{ row.ingreso_total | currency:'MXN':'symbol':'1.0-0' }}
              </td>
              <td class="text-right font-mono text-sm font-black text-orange-600">
                {{ row.costo_total | currency:'MXN':'symbol':'1.0-0' }}
              </td>
              <td class="text-right font-mono text-sm font-black" [class.text-green-600]="row.margen > 0" [class.text-red-600]="row.margen < 0">
                {{ row.margen | currency:'MXN':'symbol':'1.0-0' }}
              </td>
              <td class="text-center font-mono text-[10px] font-bold text-content-muted">
                {{ row.ingreso_por_km | currency:'MXN':'symbol':'1.2-2' }}
              </td>
            </tr>
          </ng-template>
          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="7" class="text-center py-12">
                <div class="flex flex-col items-center text-content-muted">
                  <i class="pi pi-truck text-4xl mb-3 opacity-30"></i>
                  <span class="text-lg uppercase tracking-wider font-medium">Sin datos</span>
                </div>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>

    <!-- Vista de impresión -->
    @if (mostrarImpresion()) {
      <app-report-print
        [periodoLabel]="periodoLabel()"
        [kpis]="kpis()"
        [embarques]="reporteEmbarques()"
        [unidades]="reporteUnidades()"
        [chartWidth]="chartWidth"
        [chartHeight]="chartHeight"
        [chartPadding]="chartPadding"
        [gridLines]="gridLines"
        [chartBars]="chartBars" />
    }

    <!-- Diálogo de detalles del embarque -->
    <p-dialog 
      [(visible)]="mostrarDetalles" 
      [modal]="true" 
      [style]="{ width: '90vw', maxWidth: '1200px' }"
      [draggable]="false"
      [resizable]="false"
      header="Detalles del Embarque">
      
      @if (detallesLoading()) {
        <div class="text-center py-12">
          <i class="pi pi-spinner pi-spin text-4xl text-brand mb-4"></i>
          <p class="text-content-muted">Cargando detalles...</p>
        </div>
      } @else if (detallesEmbarque()) {
        <div class="space-y-6">
          <!-- Información del Embarque -->
          <div class="card-premium p-4">
            <div class="flex items-center gap-2 mb-4">
              <app-icon name="clipboard-list" class="text-brand"></app-icon>
              <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Datos del Embarque</h3>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Folio</p>
                <p class="font-mono font-bold text-content-main">{{ detallesEmbarque().folio }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Fecha Creación</p>
                <p class="font-mono text-sm text-content-main">{{ (detallesEmbarque().fecha_hora_creacion || detallesEmbarque().fecha) | date:'dd/MM/yyyy HH:mm' }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Origen</p>
                <p class="font-bold text-content-main uppercase">{{ detallesEmbarque().origen }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Destino</p>
                <p class="font-bold text-content-main uppercase">{{ detallesEmbarque().destino_texto || detallesEmbarque().destino }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">KM</p>
                <p class="font-mono font-bold text-content-main">{{ detallesEmbarque().km | number }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Flete</p>
                <p class="font-mono font-bold text-blue-600">{{ detallesEmbarque().flete | currency:'MXN':'symbol':'1.0-0' }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Estado</p>
                <span class="status-chip chip-{{ getEstadoSeverity(detallesEmbarque().estado) }}">
                  {{ detallesEmbarque().estado }}
                </span>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Unidad</p>
                <p class="font-mono text-sm text-content-main">{{ detallesUnidad()?.placa || 'N/A' }}</p>
              </div>
            </div>
          </div>

          <!-- Checklist de Salida -->
          @if (detallesChecklistSalida()) {
            <div class="card-premium p-4">
              <div class="flex items-center gap-2 mb-4">
                <app-icon name="clipboard-list" class="text-brand"></app-icon>
                <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Checklist de Salida</h3>
                @if (detallesChecklistSalida()?.completado) {
                  <span class="status-chip chip-success !text-[9px]">Completado</span>
                } @else {
                  <span class="status-chip chip-warn !text-[9px]">Pendiente</span>
                }
              </div>
              <!-- Datos del Checklist -->
              @if (detallesChecklistSalida()?.respuestas || detallesChecklistSalida()?.items) {
                <div class="space-y-3">
                  <!-- Formato con estructura categorizada -->
                  @if (detallesChecklistSalida()?.estructura) {
                    @for (categoria of detallesChecklistSalida()?.estructura; track categoria.categoria) {
                      <div class="border border-divider rounded-lg overflow-hidden">
                        <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                          <p class="text-[10px] font-black text-content-main uppercase tracking-wider">{{ categoria.titulo }}</p>
                        </div>
                        <div class="p-3">
                          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                            @for (item of categoria.items; track item.id) {
                              <div class="flex items-center justify-between p-2 rounded bg-surface-ground border border-divider">
                                <div class="flex-1 min-w-0">
                                  <p class="text-[9px] text-content-faint uppercase truncate">{{ item.descripcion }}</p>
                                  <p class="font-bold text-content-main text-sm">
                                    {{ detallesChecklistSalida()?.respuestas?.[item.id] || '-' }}
                                  </p>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    }
                  }

                  <!-- Formato plano con respuestas directas -->
                  @if (detallesChecklistSalida()?.respuestas && !detallesChecklistSalida()?.estructura) {
                    <div class="border border-divider rounded-lg overflow-hidden">
                      <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                        <p class="text-[10px] font-black text-content-main uppercase tracking-wider">Items Verificados</p>
                      </div>
                      <div class="p-3">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                          @for (respuesta of getRespuestasEntries(detallesChecklistSalida()?.respuestas); track respuesta[0]) {
                            <div class="p-2 rounded bg-surface-ground border border-divider">
                              <p class="text-[9px] text-content-faint uppercase">{{ respuesta[0] | titlecase }}</p>
                              <p class="font-bold text-content-main text-sm">
                                {{ respuesta[1] || '-' }}
                              </p>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  }

                  <!-- Formato plano con items array -->
                  @if (detallesChecklistSalida()?.items && !detallesChecklistSalida()?.estructura) {
                    <div class="border border-divider rounded-lg overflow-hidden">
                      <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                        <p class="text-[10px] font-black text-content-main uppercase tracking-wider">Items Verificados</p>
                      </div>
                      <div class="p-3">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                          @for (item of detallesChecklistSalida()?.items; track item.id) {
                            <div class="p-2 rounded bg-surface-ground border border-divider flex items-center gap-2">
                              <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                                   [class.bg-green-100]="item.completado"
                                   [class.text-green-600]="item.completado"
                                   [class.bg-red-100]="!item.completado"
                                   [class.text-red-600]="!item.completado">
                                {{ item.completado ? '✓' : '✗' }}
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-[9px] text-content-faint uppercase truncate">{{ item.nombre || item.descripcion }}</p>
                                @if (item.observaciones) {
                                  <p class="text-[9px] text-content-muted truncate">{{ item.observaciones }}</p>
                                }
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  }
                </div>
              } @else {
                <div class="text-center py-4">
                  <app-icon name="clipboard-x" size="md" class="text-content-muted mb-2"></app-icon>
                  <p class="text-content-muted text-sm">No hay datos del checklist disponibles</p>
                </div>
              }
            </div>
          }

          <!-- Fotos de Entrega -->
          <div class="card-premium p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <app-icon name="camera" class="text-brand"></app-icon>
                <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Evidencia de Entrega</h3>
                @if (detallesFotos() && detallesFotos()!.length > 0) {
                  <span class="text-[10px] text-content-muted">({{ detallesFotos()!.length }} fotos)</span>
                } @else {
                  <span class="text-[10px] text-content-muted">(Sin fotos)</span>
                }
              </div>
              <p-button
                label="Ver Fotos"
                icon="pi pi-images"
                [outlined]="true"
                size="small"
                (onClick)="abrirFotosDialog()" />
            </div>
            @if (detallesFotos() && detallesFotos()!.length > 0) {
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                @for (foto of detallesFotos(); track foto.id) {
                  <div class="relative aspect-square rounded-lg overflow-hidden border border-divider group cursor-pointer" (click)="verFoto(foto)">
                    <img [src]="foto.url" [alt]="foto.tipo" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 left-0 right-0 bg-black/60 p-1">
                      <p class="text-[9px] text-white uppercase text-center">{{ foto.tipo }}</p>
                      @if (foto.fecha_hora_subida || foto.fecha_subida) {
                        <p class="text-[7px] text-white/70 text-center">
                          {{ (foto.fecha_hora_subida || foto.fecha_subida) | date:'dd/MM HH:mm' }}
                        </p>
                      }
                    </div>
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <app-icon name="eye" class="text-white"></app-icon>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="text-center py-4 text-content-muted text-sm">
                <app-icon name="camera-off" size="md" class="mb-2"></app-icon>
                <p>No hay fotos de entrega registradas</p>
              </div>
            }
          </div>

          <!-- Checklist de Llegada -->
          <div class="card-premium p-4">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <app-icon name="clipboard-check" class="text-brand"></app-icon>
                <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Checklist de Llegada</h3>
                @if (detallesChecklistLlegada()) {
                  @if (detallesChecklistLlegada()?.completado) {
                    <span class="status-chip chip-success !text-[9px]">Completado</span>
                  } @else {
                    <span class="status-chip chip-warn !text-[9px]">Pendiente</span>
                  }
                } @else {
                  <span class="status-chip chip-secondary !text-[9px]">No registrado</span>
                }
              </div>
              <p-button
                label="Ver Detalle"
                icon="pi pi-eye"
                [outlined]="true"
                size="small"
                (onClick)="abrirChecklistDialog()" />
            </div>
            @if (detallesChecklistLlegada()) {

              @if (detallesChecklistLlegada()?.respuestas || detallesChecklistLlegada()?.items) {
                <div class="space-y-3">
                  <!-- Formato con estructura categorizada -->
                  @if (detallesChecklistLlegada()?.estructura) {
                    @for (categoria of detallesChecklistLlegada()?.estructura; track categoria.categoria) {
                      <div class="border border-divider rounded-lg overflow-hidden">
                        <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                          <p class="text-[10px] font-black text-content-main uppercase tracking-wider">{{ categoria.titulo }}</p>
                        </div>
                        <div class="p-3">
                          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                            @for (item of categoria.items; track item.id) {
                              <div class="flex items-center justify-between p-2 rounded bg-surface-ground border border-divider">
                                <div class="flex-1 min-w-0">
                                  <p class="text-[9px] text-content-faint uppercase truncate">{{ item.descripcion }}</p>
                                  <p class="font-bold text-content-main text-sm">
                                    {{ detallesChecklistLlegada()?.respuestas?.[item.id] || '-' }}
                                  </p>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    }
                  }

                  <!-- Formato plano con respuestas directas -->
                  @if (detallesChecklistLlegada()?.respuestas && !detallesChecklistLlegada()?.estructura) {
                    <div class="border border-divider rounded-lg overflow-hidden">
                      <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                        <p class="text-[10px] font-black text-content-main uppercase tracking-wider">Items Verificados</p>
                      </div>
                      <div class="p-3">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                          @for (respuesta of getRespuestasEntries(detallesChecklistLlegada()?.respuestas); track respuesta[0]) {
                            <div class="p-2 rounded bg-surface-ground border border-divider">
                              <p class="text-[9px] text-content-faint uppercase">{{ respuesta[0] | titlecase }}</p>
                              <p class="font-bold text-content-main text-sm">
                                {{ respuesta[1] || '-' }}
                              </p>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  }

                  <!-- Formato plano con items array -->
                  @if (detallesChecklistLlegada()?.items && !detallesChecklistLlegada()?.estructura) {
                    <div class="border border-divider rounded-lg overflow-hidden">
                      <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                        <p class="text-[10px] font-black text-content-main uppercase tracking-wider">Items Verificados</p>
                      </div>
                      <div class="p-3">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                          @for (item of detallesChecklistLlegada()?.items; track item.id) {
                            <div class="p-2 rounded bg-surface-ground border border-divider flex items-center gap-2">
                              <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                                   [class.bg-green-100]="item.completado"
                                   [class.text-green-600]="item.completado"
                                   [class.bg-red-100]="!item.completado"
                                   [class.text-red-600]="!item.completado">
                                {{ item.completado ? '✓' : '✗' }}
                              </div>
                              <div class="flex-1 min-w-0">
                                <p class="text-[9px] text-content-faint uppercase truncate">{{ item.nombre || item.descripcion }}</p>
                                @if (item.observaciones) {
                                  <p class="text-[9px] text-content-muted truncate">{{ item.observaciones }}</p>
                                }
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  }
                </div>
              } @else {
                <div class="text-center py-4">
                  <app-icon name="clipboard-x" size="md" class="text-content-muted mb-2"></app-icon>
                  <p class="text-content-muted text-sm">No hay datos del checklist disponibles</p>
                </div>
              }
            } @else {
              <div class="text-center py-4 text-content-muted text-sm">
                <app-icon name="clipboard-x" size="md" class="mb-2"></app-icon>
                <p>Checklist de llegada no registrado</p>
              </div>
            }
          </div>

          <!-- Firma Digital -->
          <div class="card-premium p-4">
            <div class="flex items-center gap-2 mb-4">
              <app-icon name="pencil" class="text-brand"></app-icon>
              <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Firma Digital</h3>
              @if (detallesFirma()) {
                <span class="status-chip chip-success !text-[9px]">Registrada</span>
              } @else {
                <span class="status-chip chip-secondary !text-[9px]">No registrada</span>
              }
            </div>
            @if (detallesFirma()) {
              <div class="flex justify-center">
                <div class="border border-divider rounded-lg p-4 bg-white max-w-md">
                  <img [src]="detallesFirma()" alt="Firma" class="max-w-full h-auto">
                </div>
              </div>
            } @else {
              <div class="text-center py-4 text-content-muted text-sm">
                <app-icon name="pencil-off" size="md" class="mb-2"></app-icon>
                <p>No hay firma digital registrada</p>
              </div>
            }
          </div>

          <!-- Información de la Guía -->
          @if (detallesGuia()) {
            <div class="card-premium p-4">
              <div class="flex items-center gap-2 mb-4">
                <app-icon name="file-text" class="text-brand"></app-icon>
                <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Datos de la Guía</h3>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Folio Guía</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesGuia().folio }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Tipo</p>
                  <p class="font-bold text-content-main uppercase">{{ detallesGuia().tipo }}</p>
                </div>
                <div *ngIf="detallesEmbarque().fecha_hora_salida">
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Fecha/Hora Salida</p>
                  <p class="font-mono text-sm text-content-main">{{ detallesEmbarque().fecha_hora_salida | date:'dd/MM/yyyy HH:mm' }}</p>
                </div>
                <div *ngIf="detallesEmbarque().fecha_hora_llegada">
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Fecha/Hora Llegada</p>
                  <p class="font-mono text-sm text-content-main">{{ detallesEmbarque().fecha_hora_llegada | date:'dd/MM/yyyy HH:mm' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Estado Guía</p>
                  <span class="status-chip chip-{{ getEstadoSeverity(detallesGuia().estado) }}">
                    {{ detallesGuia().estado }}
                  </span>
                </div>
              </div>

              <!-- Chofer (solo nombre) -->
              <div class="mt-4 pt-4 border-t border-divider">
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Chofer</p>
                <p class="font-bold text-content-main uppercase">{{ detallesChofer()?.nombre || 'N/A' }}</p>
              </div>

              <!-- Costos de la Guía -->
              <div class="mt-4 pt-4 border-t border-divider">
                <p class="text-[10px] font-black text-content-faint uppercase mb-3">Costos de la Guía</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Combustible</p>
                    <p class="font-mono font-bold text-content-main">{{ detallesGuia().combustible | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                  <div>
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Casetas</p>
                    <p class="font-mono font-bold text-content-main">{{ detallesGuia().casetas | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                  <div>
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Viáticos</p>
                    <p class="font-mono font-bold text-content-main">{{ detallesGuia().viaticos | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                  <div>
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Maniobra</p>
                    <p class="font-mono font-bold text-content-main">{{ detallesGuia().maniobra | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                  <div>
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Otros</p>
                    <p class="font-mono font-bold text-content-main">{{ detallesGuia().otros | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                  <div>
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Descripción Otros</p>
                    <p class="text-sm text-content-main">{{ detallesGuia().otros_descripcion || '-' }}</p>
                  </div>
                  <div class="col-span-2">
                    <p class="text-[9px] font-black text-content-faint uppercase mb-1">Total Guía</p>
                    <p class="font-mono font-bold text-blue-600">{{ detallesGuia().total | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                </div>
              </div>
            </div>
          }

          <!-- Desglose de Costos -->
          @if (detallesCosto()) {
            <div class="card-premium p-4">
              <div class="flex items-center gap-2 mb-4">
                <app-icon name="calculator" class="text-brand"></app-icon>
                <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Desglose de Costos</h3>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Combustible</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().combustible | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Casetas</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().casetas | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Hospedaje</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().hospedaje | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Pensiones</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().pensiones | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Permisos</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().permisos | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Talachas</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().talachas | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Ayudantes Ext.</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().ayudantes_ext | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Maniobras</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().maniobras | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Viáticos Guía</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().viaticos_guia | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Otros</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().otros | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Subtotal Op.</p>
                  <p class="font-mono font-bold text-orange-600">{{ detallesCosto().subtotal_operativo | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div>
                  <p class="text-[9px] font-black text-content-faint uppercase mb-1">Costo Fijo/KM</p>
                  <p class="font-mono font-bold text-content-main">{{ detallesCosto().costo_fijo_km | currency:'MXN':'symbol':'1.0-0' }}</p>
                </div>
                <div class="col-span-2 md:col-span-4 border-t border-divider pt-4 mt-2">
                  <div class="flex justify-between items-center">
                    <p class="text-sm font-black text-content-main uppercase tracking-widest">Total Costo</p>
                    <p class="text-2xl font-black text-red-600">{{ detallesCosto().total | currency:'MXN':'symbol':'1.0-0' }}</p>
                  </div>
                </div>
              </div>
            </div>
          }

          <!-- Resumen -->
          <div class="card-premium p-4 bg-gradient-to-r from-surface-ground to-transparent">
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Ingreso</p>
                <p class="text-xl font-black text-blue-600">{{ detallesEmbarque().flete | currency:'MXN':'symbol':'1.0-0' }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Costo</p>
                <p class="text-xl font-black text-orange-600">{{ detallesCosto()?.total | currency:'MXN':'symbol':'1.0-0' }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-1">Margen</p>
                <p class="text-xl font-black" [class.text-green-600]="(detallesEmbarque().flete - (detallesCosto()?.total || 0)) > 0" [class.text-red-600]="(detallesEmbarque().flete - (detallesCosto()?.total || 0)) < 0">
                  {{ (detallesEmbarque().flete - (detallesCosto()?.total || 0)) | currency:'MXN':'symbol':'1.0-0' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      <ng-template pTemplate="footer">
        <p-button label="Cerrar" [outlined]="true" (onClick)="mostrarDetalles = false" />
      </ng-template>
    </p-dialog>

    <!-- Diálogo de Fotos -->
    <p-dialog
      [visible]="mostrarFotosDialog()"
      (visibleChange)="mostrarFotosDialog.set($event)"
      [modal]="true"
      [style]="{ width: '90vw', maxWidth: '1000px' }"
      [draggable]="false"
      [resizable]="false"
      header="Evidencia de Entrega">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        @for (foto of detallesFotos(); track foto.id) {
          <div class="relative aspect-square rounded-lg overflow-hidden border border-divider cursor-pointer" (click)="verFoto(foto)">
            <img [src]="foto.url" [alt]="foto.tipo" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
              <p class="text-xs text-white uppercase text-center">{{ foto.tipo }}</p>
              @if (foto.fecha_hora_subida || foto.fecha_subida) {
                <p class="text-[10px] text-white/70 text-center">
                  {{ (foto.fecha_hora_subida || foto.fecha_subida) | date:'dd/MM/yyyy HH:mm:ss' }}
                </p>
              }
            </div>
          </div>
        }
      </div>
      <ng-template pTemplate="footer">
        <p-button label="Cerrar" [outlined]="true" (onClick)="mostrarFotosDialog.set(false)" />
      </ng-template>
    </p-dialog>

    <!-- Diálogo de Checklist -->
    <p-dialog
      [visible]="mostrarChecklistDialog()"
      (visibleChange)="mostrarChecklistDialog.set($event)"
      [modal]="true"
      [style]="{ width: '90vw', maxWidth: '800px' }"
      [draggable]="false"
      [resizable]="false"
      header="Checklist de Llegada - Detalle Completo">
      @if (detallesChecklistLlegada()) {
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-4">
            <app-icon name="clipboard-check" class="text-brand"></app-icon>
            <h3 class="font-bold text-content-main uppercase tracking-widest text-xs">Checklist de Llegada</h3>
            @if (detallesChecklistLlegada()?.completado) {
              <span class="status-chip chip-success !text-[9px]">Completado</span>
            } @else {
              <span class="status-chip chip-warn !text-[9px]">Pendiente</span>
            }
          </div>

          @if (detallesChecklistLlegada()?.respuestas || detallesChecklistLlegada()?.items) {
            <div class="space-y-3">
              <!-- Formato con estructura categorizada -->
              @if (detallesChecklistLlegada()?.estructura) {
                @for (categoria of detallesChecklistLlegada()?.estructura; track categoria.categoria) {
                  <div class="border border-divider rounded-lg overflow-hidden">
                    <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                      <p class="text-[10px] font-black text-content-main uppercase tracking-wider">{{ categoria.titulo }}</p>
                    </div>
                    <div class="p-3">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        @for (item of categoria.items; track item.id) {
                          <div class="flex items-center justify-between p-3 rounded bg-surface-ground border border-divider">
                            <div class="flex-1 min-w-0">
                              <p class="text-xs text-content-faint uppercase">{{ item.descripcion }}</p>
                              <p class="font-bold text-content-main text-sm">
                                {{ detallesChecklistLlegada()?.respuestas?.[item.id] || '-' }}
                              </p>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                }
              }

              <!-- Formato plano con respuestas directas -->
              @if (detallesChecklistLlegada()?.respuestas && !detallesChecklistLlegada()?.estructura) {
                <div class="border border-divider rounded-lg overflow-hidden">
                  <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                    <p class="text-[10px] font-black text-content-main uppercase tracking-wider">Items Verificados</p>
                  </div>
                  <div class="p-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      @for (respuesta of getRespuestasEntries(detallesChecklistLlegada()?.respuestas); track respuesta[0]) {
                        <div class="p-3 rounded bg-surface-ground border border-divider">
                          <p class="text-xs text-content-faint uppercase">{{ respuesta[0] | titlecase }}</p>
                          <p class="font-bold text-content-main text-sm">
                            {{ respuesta[1] || '-' }}
                          </p>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }

              <!-- Formato plano con items array -->
              @if (detallesChecklistLlegada()?.items && !detallesChecklistLlegada()?.estructura) {
                <div class="border border-divider rounded-lg overflow-hidden">
                  <div class="bg-surface-ground px-3 py-2 border-b border-divider">
                    <p class="text-[10px] font-black text-content-main uppercase tracking-wider">Items Verificados</p>
                  </div>
                  <div class="p-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      @for (item of detallesChecklistLlegada()?.items; track item.id) {
                        <div class="p-3 rounded bg-surface-ground border border-divider flex items-center gap-3">
                          <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                               [class.bg-green-100]="item.completado"
                               [class.text-green-600]="item.completado"
                               [class.bg-red-100]="!item.completado"
                               [class.text-red-600]="!item.completado">
                            {{ item.completado ? '✓' : '✗' }}
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-xs text-content-faint uppercase">{{ item.nombre || item.descripcion }}</p>
                            @if (item.observaciones) {
                              <p class="text-xs text-content-muted">{{ item.observaciones }}</p>
                            }
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      }
      <ng-template pTemplate="footer">
        <p-button label="Cerrar" [outlined]="true" (onClick)="mostrarChecklistDialog.set(false)" />
      </ng-template>
    </p-dialog>
  `
})
export class ReportsComponent implements OnInit {
  private shipmentsService = inject(ShipmentsService);
  private fleetService = inject(FleetService);
  private costsService = inject(CostsService);
  private guidesService = inject(GuidesService);
  private staffService = inject(StaffService);
  private fotosService = inject(FotosService);
  private checklistService = inject(ChecklistService);

  hoy = new Date();
  fechaDesde: Date = new Date(new Date().getFullYear(), 0, 1); // Primer día del año
  fechaHasta: Date = new Date();
  filtroUnidad: string | null = null;
  filtroBusqueda: string = '';
  unidadesOptions = signal<{label: string, value: string}[]>([]);
  mostrarImpresion = signal(false);
  loading = signal(false);

  // Datos para el gráfico de impresión
  chartWidth = 600;
  chartHeight = 300;
  chartPadding = 40;
  gridLines: any[] = [];
  chartBars: any[] = [];

  // Datos para el diálogo de detalles
  mostrarDetalles = false;
  detallesLoading = signal(false);
  detallesEmbarque = signal<any>(null);
  detallesGuia = signal<any>(null);
  detallesCosto = signal<any>(null);
  detallesUnidad = signal<any>(null);
  detallesChofer = signal<any>(null);
  detallesAyudante1 = signal<any>(null);
  detallesAyudante2 = signal<any>(null);
  detallesFotos = signal<Foto[]>([]);
  detallesChecklistSalida = signal<Checklist | null>(null);
  detallesChecklistLlegada = signal<Checklist | null>(null);
  detallesFirma = signal<string | null>(null);

  // Diálogos adicionales
  mostrarFotosDialog = signal(false);
  mostrarChecklistDialog = signal(false);
  fotoSeleccionada = signal<Foto | null>(null);

  kpis = signal({
    ingreso: 0,
    costo: 0,
    utilidad: 0,
    margen_pct: 0
  });

  reporteEmbarques = signal<ReporteEmbarque[]>([]);
  reporteUnidades = signal<ReporteUnidad[]>([]);

  private allShipments: any[] = [];
  private allCosts: any[] = [];
  private allUnits: any[] = [];

  ngOnInit() {
    this.cargarUnidades();
    this.cargarDatos();
  }

  cargarUnidades() {
    this.fleetService.findAll().subscribe({
      next: (data) => {
        this.allUnits = data;
        const options = data.map((u: any) => ({
          label: u.placa || 'Sin placa',
          value: u.id
        }));
        this.unidadesOptions.set(options);
      },
      error: (err) => {
        console.error('Error cargando unidades:', err);
      }
    });
  }

  cargarDatos() {
    this.loading.set(true);
    
    // Cargar embarques y costos en paralelo
    this.shipmentsService.findAll().subscribe({
      next: (shipments) => {
        this.allShipments = shipments;
        this.costsService.findAll().subscribe({
          next: (costs) => {
            this.allCosts = costs;
            this.generarReporte();
            this.loading.set(false);
          },
          error: (err) => {
            console.error('Error cargando costos:', err);
            this.allCosts = [];
            this.generarReporte();
            this.loading.set(false);
          }
        });
      },
      error: (err) => {
        console.error('Error cargando embarques:', err);
        this.allShipments = [];
        this.generarReporte();
        this.loading.set(false);
      }
    });
  }

  limpiarFiltros() {
    this.fechaDesde = new Date(new Date().getFullYear(), 0, 1);
    this.fechaHasta = new Date();
    this.filtroUnidad = null;
    this.filtroBusqueda = '';
    this.generarReporte();
  }

  onBusquedaChange(valor: string) {
    this.filtroBusqueda = valor;
    this.generarReporte();
  }

  periodoLabel() {
    const desde = this.fechaDesde.toLocaleDateString('es-MX');
    const hasta = this.fechaHasta.toLocaleDateString('es-MX');
    return `${desde} - ${hasta}`;
  }

  generarReporte() {
    console.log('Generando reporte con:', {
      shipmentsCount: this.allShipments.length,
      costsCount: this.allCosts.length,
      unitsCount: this.allUnits.length,
      fechaDesde: this.fechaDesde,
      fechaHasta: this.fechaHasta,
      filtroUnidad: this.filtroUnidad
    });
    
    // Filtrar embarques por rango de fechas y unidad
    let filteredShipments = [...this.allShipments];
    
    // Filtrar por fecha
    if (this.fechaDesde) {
      filteredShipments = filteredShipments.filter((s: any) => {
        const shipmentDate = new Date(s.fecha);
        const desde = new Date(this.fechaDesde);
        desde.setHours(0, 0, 0, 0);
        return shipmentDate >= desde;
      });
    }
    
    if (this.fechaHasta) {
      filteredShipments = filteredShipments.filter((s: any) => {
        const shipmentDate = new Date(s.fecha);
        const hasta = new Date(this.fechaHasta);
        hasta.setHours(23, 59, 59, 999);
        return shipmentDate <= hasta;
      });
    }
    
    // Filtrar por unidad
    if (this.filtroUnidad) {
      filteredShipments = filteredShipments.filter((s: any) => s.unidad_id === this.filtroUnidad);
    }
    
    // Filtrar por búsqueda (folio o ruta)
    if (this.filtroBusqueda && this.filtroBusqueda.trim()) {
      const busqueda = this.filtroBusqueda.toLowerCase().trim();
      filteredShipments = filteredShipments.filter((s: any) => {
        const folioMatch = s.folio?.toLowerCase().includes(busqueda);
        const rutaMatch = s.ruta?.toLowerCase().includes(busqueda) || 
                         s.origen?.toLowerCase().includes(busqueda) || 
                         s.destino_texto?.toLowerCase().includes(busqueda) ||
                         s.destino?.toLowerCase().includes(busqueda);
        return folioMatch || rutaMatch;
      });
    }
    
    console.log('Embarques filtrados:', filteredShipments.length);
    
    // Crear mapa de costos por embarque_id
    const costsMap = new Map<string, any>();
    this.allCosts.forEach((cost: any) => {
      costsMap.set(cost.embarque_id, cost);
    });
    
    // Generar reporte de embarques
    const embarques: ReporteEmbarque[] = filteredShipments.map((s: any) => {
      const cost = costsMap.get(s.id);
      const costoOperativo = cost ? (parseFloat(cost.total) || 0) : 0;
      const flete = parseFloat(s.flete) || 0;
      const margen = flete - costoOperativo;
      const margen_pct = flete > 0 ? (margen / flete) * 100 : 0;
      const km = parseFloat(s.km) || 0;
      const ingreso_por_km = km > 0 ? flete / km : 0;
      const costo_por_km = km > 0 ? costoOperativo / km : 0;
      
      return {
        id: s.id,
        folio: s.folio || 'Sin folio',
        ruta: `${s.origen || ''} → ${s.destino_texto || s.destino || ''}`,
        km,
        flete,
        costo_operativo: costoOperativo,
        margen,
        margen_pct,
        ingreso_por_km,
        costo_por_km
      };
    });
    
    console.log('Embarques procesados:', embarques.length);
    
    // Generar reporte de unidades
    const unidadesMap = new Map<string, ReporteUnidad>();
    filteredShipments.forEach((s: any) => {
      const unitId = s.unidad_id;
      const unit = this.allUnits.find((u: any) => u.id === unitId);
      const placa = unit ? (unit.placa || 'Sin placa') : 'Sin placa';
      const cost = costsMap.get(s.id);
      const costoOperativo = cost ? (parseFloat(cost.total) || 0) : 0;
      const flete = parseFloat(s.flete) || 0;
      const km = parseFloat(s.km) || 0;
      
      if (!unidadesMap.has(placa)) {
        unidadesMap.set(placa, {
          placa,
          embarques: 0,
          km_total: 0,
          ingreso_total: 0,
          costo_total: 0,
          margen: 0,
          ingreso_por_km: 0
        });
      }
      
      const unidadData = unidadesMap.get(placa)!;
      unidadData.embarques++;
      unidadData.km_total += km;
      unidadData.ingreso_total += flete;
      unidadData.costo_total += costoOperativo;
    });
    
    // Calcular margenes y $/km por unidad
    const unidades: ReporteUnidad[] = Array.from(unidadesMap.values()).map(u => {
      u.margen = u.ingreso_total - u.costo_total;
      u.ingreso_por_km = u.km_total > 0 ? u.ingreso_total / u.km_total : 0;
      return u;
    });
    
    console.log('Unidades procesadas:', unidades.length);
    
    this.reporteEmbarques.set(embarques);
    this.reporteUnidades.set(unidades);
    
    // Calcular KPIs
    const totalIngreso = embarques.reduce((sum, e) => sum + (parseFloat(String(e.flete)) || 0), 0);
    const totalCosto = embarques.reduce((sum, e) => sum + (parseFloat(String(e.costo_operativo)) || 0), 0);
    const utilidad = totalIngreso - totalCosto;
    const margen_pct = totalIngreso > 0 ? (utilidad / totalIngreso) * 100 : 0;
    
    this.kpis.set({
      ingreso: totalIngreso,
      costo: totalCosto,
      utilidad: utilidad,
      margen_pct: margen_pct
    });
    
    console.log('KPIs:', this.kpis());
    
    // Calcular datos del gráfico
    this.calcularGrafico(embarques);
  }

  calcularGrafico(embarques: ReporteEmbarque[]) {
    const maxValue = Math.max(...embarques.map(e => Math.max(e.flete, e.costo_operativo)));
    const chartHeight = this.chartHeight - this.chartPadding * 2;
    const chartWidth = this.chartWidth - this.chartPadding * 2;
    const barWidth = (chartWidth / embarques.length) / 2 - 4;

    // Grid lines
    this.gridLines = [];
    for (let i = 0; i <= 5; i++) {
      const value = (maxValue / 5) * i;
      const y = this.chartHeight - this.chartPadding - (value / maxValue) * chartHeight;
      this.gridLines.push({
        y,
        label: `$${(value / 1000).toFixed(0)}k`
      });
    }

    // Bars
    this.chartBars = embarques.map((e, i) => {
      const x = this.chartPadding + (chartWidth / embarques.length) * i + 4;
      const ingresoH = (e.flete / maxValue) * chartHeight;
      const costoH = (e.costo_operativo / maxValue) * chartHeight;
      const ingresoY = this.chartHeight - this.chartPadding - ingresoH;
      const costoY = this.chartHeight - this.chartPadding - costoH;

      return {
        x,
        barWidth,
        ingresoY,
        ingresoH,
        costoY,
        costoH,
        label: e.folio
      };
    });
  }

  imprimirReporte() {
    this.mostrarImpresion.set(true);
    setTimeout(() => {
      window.print();
      this.mostrarImpresion.set(false);
    }, 100);
  }

  exportarPDF() {
    const doc = new jsPDF();
    let currentY = 0;
    
    // Título
    doc.setFontSize(18);
    doc.text('Reporte de Rentabilidad', 14, 20);
    
    // Subtítulo con rango de fechas
    doc.setFontSize(10);
    doc.setTextColor(100);
    const fechaDesdeStr = this.fechaDesde.toLocaleDateString('es-MX');
    const fechaHastaStr = this.fechaHasta.toLocaleDateString('es-MX');
    doc.text(`Periodo: ${fechaDesdeStr} - ${fechaHastaStr}`, 14, 28);
    
    // KPIs
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('Resumen General', 14, 40);
    
    const kpisData = [
      ['Ingreso Total', this.kpis().ingreso.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })],
      ['Costo Total', this.kpis().costo.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })],
      ['Utilidad Bruta', this.kpis().utilidad.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })],
      ['Margen %', `${this.kpis().margen_pct.toFixed(1)}%`]
    ];
    
    autoTable(doc, {
      startY: 45,
      head: [['Concepto', 'Monto']],
      body: kpisData,
      theme: 'grid',
      headStyles: { fillColor: [66, 66, 66] },
      styles: { fontSize: 9 },
      didDrawPage: (data) => {
        currentY = data.cursor?.y || 45;
      }
    });
    
    // Tabla de embarques
    doc.setFontSize(12);
    doc.text('Rentabilidad por Embarque', 14, currentY + 15);
    
    const embarquesData = this.reporteEmbarques().map(e => [
      e.folio,
      e.ruta,
      e.km.toString(),
      e.flete.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      e.costo_operativo.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      e.margen.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      `${e.margen_pct.toFixed(1)}%`,
      e.ingreso_por_km.toFixed(2),
      e.costo_por_km.toFixed(2)
    ]);
    
    autoTable(doc, {
      startY: currentY + 20,
      head: [['Folio', 'Ruta', 'Km', 'Flete', 'Costo Op.', 'Margen', '%', '$/km Ingreso', '$/km Costo']],
      body: embarquesData,
      theme: 'grid',
      headStyles: { fillColor: [66, 66, 66] },
      styles: { fontSize: 8 },
      didDrawPage: (data) => {
        currentY = data.cursor?.y || currentY + 20;
      }
    });
    
    // Tabla de unidades
    doc.addPage();
    doc.setFontSize(12);
    doc.text('Rentabilidad por Unidad', 14, 20);
    
    const unidadesData = this.reporteUnidades().map(u => [
      u.placa,
      u.embarques.toString(),
      u.km_total.toString(),
      u.ingreso_total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      u.costo_total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      u.margen.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
      u.ingreso_por_km.toFixed(2)
    ]);
    
    autoTable(doc, {
      startY: 25,
      head: [['Placa', 'Embarques', 'Km Total', 'Ingreso Total', 'Costo Total', 'Margen', '$/km']],
      body: unidadesData,
      theme: 'grid',
      headStyles: { fillColor: [66, 66, 66] },
      styles: { fontSize: 9 }
    });
    
    // Guardar PDF
    doc.save(`reporte-rentabilidad-${new Date().toISOString().split('T')[0]}.pdf`);
  }

  exportarCSV() {
    const data = this.reporteEmbarques();
    const headers = ['Folio', 'Ruta', 'Km', 'Flete', 'Costo Op.', 'Margen', '%', '$/km ingreso', '$/km costo'];
    const rows = data.map(r => [
      r.folio,
      r.ruta,
      r.km,
      r.flete,
      r.costo_operativo,
      r.margen,
      r.margen_pct,
      r.ingreso_por_km,
      r.costo_por_km
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte-rentabilidad-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  verDetalles(embarqueId: string) {
    this.mostrarDetalles = true;
    this.detallesLoading.set(true);
    this.detallesEmbarque.set(null);
    this.detallesGuia.set(null);
    this.detallesCosto.set(null);
    this.detallesUnidad.set(null);
    this.detallesChofer.set(null);
    this.detallesAyudante1.set(null);
    this.detallesAyudante2.set(null);
    this.detallesFotos.set([]);
    this.detallesChecklistSalida.set(null);
    this.detallesChecklistLlegada.set(null);
    this.detallesFirma.set(null);

    // Cargar datos del embarque
    this.shipmentsService.findOne(embarqueId).subscribe({
      next: (embarque) => {
        this.detallesEmbarque.set(embarque);

        // Cargar unidad
        if (embarque.unidad_id) {
          this.fleetService.findAll().subscribe({
            next: (units) => {
              const unidad = units.find((u: any) => u.id === embarque.unidad_id);
              this.detallesUnidad.set(unidad || null);
            }
          });
        }

        // Cargar guía asociada
        this.guidesService.getGuides().subscribe({
          next: (guias) => {
            const guia = guias.find((g: any) => g.embarque_id === embarqueId);
            if (guia) {
              this.detallesGuia.set(guia);

              // Cargar chofer y ayudantes usando StaffService
              this.staffService.findAll().subscribe({
                next: (staff) => {
                  // Cargar chofer
                  if (guia.chofer_id) {
                    const chofer = staff.find((s: any) => s.id === guia.chofer_id);
                    this.detallesChofer.set(chofer || { nombre: 'N/A', rol: 'Chofer' });
                  }

                  // Cargar ayudante 1
                  if (guia.ayudante1_id) {
                    const ayudante1 = staff.find((s: any) => s.id === guia.ayudante1_id);
                    this.detallesAyudante1.set(ayudante1 || { nombre: 'N/A', rol: 'Ayudante' });
                  }

                  // Cargar ayudante 2
                  if (guia.ayudante2_id) {
                    const ayudante2 = staff.find((s: any) => s.id === guia.ayudante2_id);
                    this.detallesAyudante2.set(ayudante2 || { nombre: 'N/A', rol: 'Ayudante' });
                  }
                }
              });
            }
          }
        });

        // Cargar fotos del embarque
        console.log('Cargando fotos para embarque:', embarqueId);
        this.fotosService.getByEmbarque(embarqueId).subscribe({
          next: (fotos) => {
            console.log('Fotos cargadas:', fotos.length, fotos);
            this.detallesFotos.set(fotos);
            // Buscar firma en las fotos (tipo 'general')
            console.log('Buscando firma en fotos... Tipos encontrados:', fotos.map(f => f.tipo));
            const firmaFoto = fotos.find(f => f.tipo === 'general');
            if (firmaFoto) {
              console.log('Firma encontrada en fotos:', firmaFoto.url);
              this.detallesFirma.set(firmaFoto.url);
            } else {
              console.log('No se encontró firma en fotos (tipo general)');
            }
          },
          error: (err) => {
            console.error('Error cargando fotos:', err);
            this.detallesFotos.set([]);
          }
        });

        // Cargar checklists del embarque
        console.log('Cargando checklists para embarque:', embarqueId);
        this.checklistService.getAllByEmbarque(embarqueId).subscribe({
          next: (checklists) => {
            console.log('Checklists cargados:', checklists.length, checklists);
            const salida = checklists.find(c => c.tipo === 'salida');
            const llegada = checklists.find(c => c.tipo === 'llegada');
            console.log('Checklist salida:', salida);
            console.log('Checklist llegada:', llegada);
            this.detallesChecklistSalida.set(salida || null);
            this.detallesChecklistLlegada.set(llegada || null);

            // Extraer firma del checklist de llegada si existe
            console.log('Buscando firma en checklist llegada...');
            console.log('Respuestas llegada:', llegada?.respuestas);
            if (llegada?.respuestas?.['firma']) {
              console.log('Firma encontrada en checklist:', llegada.respuestas['firma']);
              this.detallesFirma.set(llegada.respuestas['firma']);
            } else {
              console.log('No se encontró firma en checklist llegada');
            }
          },
          error: (err) => {
            console.error('Error cargando checklists:', err);
            this.detallesChecklistSalida.set(null);
            this.detallesChecklistLlegada.set(null);
          }
        });

        // Cargar costo asociado
        this.costsService.findByEmbarque(embarqueId).subscribe({
          next: (costo) => {
            this.detallesCosto.set(costo);
            this.detallesLoading.set(false);
          },
          error: () => {
            this.detallesLoading.set(false);
          }
        });
      },
      error: () => {
        this.detallesLoading.set(false);
      }
    });
  }

  getEstadoSeverity(estado: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    const severityMap: Record<string, 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast'> = {
      'completado': 'success',
      'transito': 'info',
      'programado': 'secondary',
      'cancelado': 'danger'
    };
    return severityMap[estado] || 'secondary';
  }

  // Helper para convertir respuestas del checklist a array de entradas (para usar en @for)
  getRespuestasEntries(respuestas: Record<string, any> | null | undefined): [string, any][] {
    if (!respuestas) return [];
    return Object.entries(respuestas);
  }

  // Métodos para diálogos
  abrirFotosDialog() {
    this.mostrarFotosDialog.set(true);
  }

  abrirChecklistDialog() {
    this.mostrarChecklistDialog.set(true);
  }

  verFoto(foto: Foto) {
    this.fotoSeleccionada.set(foto);
    this.mostrarFotosDialog.set(true);
  }
}

// Reports component with profitability reports - Beta UX design
