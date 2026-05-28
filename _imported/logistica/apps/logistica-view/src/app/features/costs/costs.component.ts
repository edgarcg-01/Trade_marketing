import { Component, OnInit, inject, signal, DestroyRef, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { CostsService } from '../../core/services/logistics.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CostFormComponent } from './cost-form.component';

export interface CostRecord {
  id: string;
  embarque_id: string;
  embarque_folio?: string;
  fecha?: string;
  combustible: number;
  casetas: number;
  hospedaje: number;
  pensiones: number;
  permisos: number;
  talachas: number;
  ayudantes_ext: number;
  maniobras: number;
  viaticos_guia: number;
  otros: number;
  subtotal_operativo: number;
  costo_fijo_km: number;
  total: number;
  observaciones?: string;
}

@Component({
  selector: 'app-costs',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, InputTextModule, DialogModule, TooltipModule, IconComponent, CostFormComponent],
  template: `
    <div class="flex h-full flex-col">
      <!-- Header Seccion -->
      <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-2xl font-black text-content-main tracking-tight uppercase">Control de <span class="text-brand">Costos</span></h1>
          <p class="text-sm font-medium text-content-muted mt-1 uppercase tracking-wider">Gestión financiera por embarque</p>
        </div>
        <p-button 
          label="+ Registrar Costo" 
          [disabled]="loading()"
          styleClass="p-button-brand font-bold uppercase tracking-widest text-xs px-6 py-3"
          (onClick)="openForm()" />
      </div>

      <!-- KPIs (Placeholder para calculos reales) -->
      <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="card-premium relative overflow-hidden p-5">
          <div class="absolute -right-4 -top-4 opacity-5"><app-icon name="chart-pie" size="xl"></app-icon></div>
          <p class="text-[10px] font-black uppercase tracking-widest text-content-muted">Total Registrados</p>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-3xl font-black text-content-main">{{ costs().length }}</span>
            <span class="text-xs font-bold text-green-500 line-clamp-1">Esta semana</span>
          </div>
        </div>
        
        <div class="card-premium relative overflow-hidden p-5 border-t-4 border-red-500">
          <p class="text-[10px] font-black uppercase tracking-widest text-content-muted">Costo Acumulado</p>
          <div class="mt-2 flex items-baseline gap-2">
            <span class="text-3xl font-black text-score-low">{{ totalAcumulado() | currency:'MXN':'symbol':'1.2-2' }}</span>
          </div>
        </div>
      </div>

      <!-- Tabla principal -->
      <div class="card-premium flex-1 overflow-hidden flex flex-col min-h-0">
        <div class="p-4 border-b border-divider flex justify-between items-center bg-surface-ground/30">
          <div class="flex items-center gap-2">
            <app-icon name="calculator" size="md" class="text-brand"></app-icon>
            <h2 class="text-sm font-bold text-content-main uppercase tracking-widest">Historial de Costos</h2>
          </div>
          <div class="flex items-center gap-2">
            <p-inputText 
              [(ngModel)]="searchTerm" 
              placeholder="Buscar por folio, fecha o monto..." 
              styleClass="w-full" />
          </div>
        </div>
        
        <div class="flex-1 overflow-auto">
          <p-table 
            [value]="filteredCosts()" 
            [paginator]="true" 
            [rows]="10" 
            [rowsPerPageOptions]="[5, 10, 20, 50]"
            [tableStyle]="{ 'min-width': '50rem' }"
            [loading]="loading()"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} costos"
            emptyMessage="No hay costos registrados">
            
            <ng-template pTemplate="header">
              <tr>
                <th style="width: 25%">Embarque</th>
                <th style="width: 20%">Operativo</th>
                <th style="width: 20%">Costo Fijo</th>
                <th style="width: 20%">Total</th>
                <th style="width: 15%; text-align: center">Acciones</th>
              </tr>
            </ng-template>
            
            <ng-template pTemplate="body" let-cost>
              <tr class="transition-colors hover:bg-surface-hover/50 group">
                <td>
                  <div class="flex items-center gap-2">
                    <div class="h-8 w-8 rounded bg-surface-ground flex items-center justify-center border border-divider">
                      <app-icon name="truck" size="sm" class="text-content-muted"></app-icon>
                    </div>
                    <div>
                      <div class="font-bold text-content-main">{{ cost.embarque_folio }}</div>
                      <div class="text-[10px] text-content-muted uppercase">{{ cost.fecha | date:'dd/MM/yyyy' }}</div>
                    </div>
                  </div>
                </td>
                <td class="font-mono text-sm">
                  {{ cost.subtotal_operativo | currency:'MXN':'symbol':'1.2-2' }}
                </td>
                <td class="font-mono text-sm">
                  {{ cost.costo_fijo_km | currency:'MXN':'symbol':'1.2-2' }}
                </td>
                <td>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-red-500/10 text-red-500 border border-red-500/20">
                    {{ cost.total | currency:'MXN':'symbol':'1.2-2' }}
                  </span>
                </td>
                <td style="text-align: center">
                  <p-button icon="pi pi-pencil" severity="secondary" [text]="true" size="small" pTooltip="Editar Costo" (onClick)="editCost(cost)" />
                </td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      </div>
      
      <p-dialog
        [(visible)]="showForm"
        [modal]="true"
        [draggable]="false"
        [resizable]="false"
        [showHeader]="false"
        styleClass="shipment-dialog shipment-dialog-fullscreen">
        @if (showForm()) {
          <app-cost-form
            [costToEdit]="selectedCostForEdit()"
            [prefillFromShipment]="prefillFromShipment()"
            (saved)="onCostSaved($event)"
            (canceled)="onFormCanceled()" />
        }
      </p-dialog>

      <!-- Cost Success Dialog -->
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

          <h2 class="text-xl font-bold text-content-main mb-2">¡Costos Registrados!</h2>
          <p class="text-sm text-content-muted mb-4">
            Los costos del embarque <strong>{{ lastSavedCost()?.embarque_folio }}</strong> han sido registrados exitosamente.
          </p>

          <div class="mb-6 p-4 bg-surface-ground rounded-lg border border-divider">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="text-left">
                <span class="text-content-muted text-xs uppercase">Total:</span>
                <p class="font-medium text-green-600">{{ lastSavedCost()?.total | currency:'MXN' }}</p>
              </div>
              <div class="text-left">
                <span class="text-content-muted text-xs uppercase">Fecha:</span>
                <p class="font-medium">{{ lastSavedCost()?.fecha | date:'dd/MM/yyyy' }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <p-button
              label="Cerrar"
              icon="pi pi-check"
              styleClass="p-button-brand w-full"
              (onClick)="closeSuccessDialog()" />
          </div>
        </div>
      </p-dialog>
    </div>
  `
})
export class CostsComponent implements OnInit {
  private costsService = inject(CostsService);

  costs = signal<CostRecord[]>([]);
  loading = signal(true);
  showForm = signal(false);
  selectedCostForEdit = signal<CostRecord | null>(null);
  prefillFromShipment = signal<any>(null);
  searchTerm = signal('');
  showSuccessDialog = signal(false);
  lastSavedCost = signal<CostRecord | null>(null);

  totalAcumulado = signal<number>(0);

  filteredCosts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.costs();
    
    return this.costs().filter(cost => {
      const folio = cost.embarque_folio?.toLowerCase() || '';
      const fecha = cost.fecha ? new Date(cost.fecha).toLocaleDateString('es-MX') : '';
      const operativo = cost.subtotal_operativo?.toString() || '';
      const costoFijo = cost.costo_fijo_km?.toString() || '';
      const total = cost.total?.toString() || '';
      
      return folio.includes(term) || 
             fecha.includes(term) || 
             operativo.includes(term) || 
             costoFijo.includes(term) || 
             total.includes(term);
    });
  });

  ngOnInit() {
    this.loadCosts();

    // Check if we have prefill data from a newly created shipment
    const prefillData = sessionStorage.getItem('prefill_cost_from_shipment');
    if (prefillData) {
      try {
        const data = JSON.parse(prefillData);
        this.prefillFromShipment.set(data);
        this.openForm();
        // Clear the sessionStorage so it doesn't open again on refresh
        sessionStorage.removeItem('prefill_cost_from_shipment');
      } catch (e) {
        console.error('Error parsing prefill data', e);
      }
    }
  }

  loadCosts() {
    this.loading.set(true);
    this.costsService.findAll().subscribe({
      next: (data) => {
        this.costs.set(data);
        this.calculateKpis(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading costs:', err);
        this.loading.set(false);
      }
    });
  }

  calculateKpis(data: CostRecord[]) {
    const total = data.reduce((acc, curr) => acc + Number(curr.total || 0), 0);
    this.totalAcumulado.set(total);
  }

  openForm() {
    this.selectedCostForEdit.set(null);
    this.showForm.set(true);
  }

  editCost(cost: CostRecord) {
    this.selectedCostForEdit.set(cost);
    this.showForm.set(true);
  }

  onCostSaved(cost?: CostRecord) {
    if (cost) {
      this.lastSavedCost.set(cost);
      this.showSuccessDialog.set(true);
    }
    this.showForm.set(false);
    this.selectedCostForEdit.set(null);
    this.prefillFromShipment.set(null);
    this.loadCosts();
  }

  closeSuccessDialog() {
    this.showSuccessDialog.set(false);
    this.lastSavedCost.set(null);
  }

  onFormCanceled() {
    this.showForm.set(false);
    this.selectedCostForEdit.set(null);
    this.prefillFromShipment.set(null);
  }
}
