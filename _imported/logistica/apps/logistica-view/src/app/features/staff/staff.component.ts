import { Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { StaffService } from '../../core/services/logistics.service';
import { StaffFormComponent } from './staff-form.component';

interface Collaborator {
  id: string;
  nombre: string;
  roles: string[];
  tipo: 'interno' | 'externo';
  estado: 'activo' | 'inactivo' | 'suspendido';
  telefono?: string;
  nss?: string;
  created_at: string;
}

@Component({
  selector: 'app-staff',
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
    AvatarModule,
    TooltipModule,
    SelectModule,
    SelectButtonModule,
    IconComponent,
    StaffFormComponent
  ],
  template: `
    <div class="w-full space-y-4 animate-fade-in-up">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-headline text-content-main">Gestión de <span class="text-content-muted">Personal</span></h1>
          <p class="text-body text-content-muted mt-1">Control de colaboradores</p>
        </div>
        <p-button 
          label="Nuevo Colaborador" 
          icon="pi pi-plus"
          styleClass="p-button-brand"
          (onClick)="openForm()" />
      </div>

      <!-- KPIs -->
      <div class="relative grid grid-cols-3 gap-3">
        <div class="kpi-card-trace kpi-card-trace-0 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="users" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Total Colaboradores</p>
            <p class="text-xl font-black text-content-main text-center">{{ staff().length }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-3 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="user-check" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Personal Activo</p>
            <p class="text-xl font-black text-green-600 text-center">{{ kpis().activos }}</p>
          </div>
        </div>

        <div class="kpi-card-trace kpi-card-trace-2 p-4">
          <div class="flex flex-col items-center justify-center">
            <app-icon name="truck" size="lg" class="text-content-main mb-1"></app-icon>
            <p class="text-label-xs text-content-muted text-center mb-1">Choferes</p>
            <p class="text-xl font-black text-amber-500 text-center">{{ kpis().choferes }}</p>
          </div>
        </div>
      </div>

      <!-- Formulario Modal -->
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
        styleClass="shipment-dialog shipment-dialog-fullscreen">
        <app-staff-form 
          [personToEdit]="selectedPersonForEdit()"
          (saved)="onStaffSaved()" 
          (canceled)="showForm.set(false)" />
      </p-dialog>

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
                placeholder="Buscar por nombre..."
                class="w-80" />
            </p-iconField>
            
            <p-selectButton 
              [(ngModel)]="currentFilter"
              [options]="filterOptions"
              optionLabel="label"
              optionValue="value"
              styleClass="staff-filter-buttons" />
          </div>

          <div class="flex items-center gap-2">
            <p-button
              icon="pi pi-filter-slash"
              severity="secondary"
              [text]="true"
              size="small"
              styleClass="action-clear"
              (onClick)="resetFilters()"
              pTooltip="Limpiar filtros" />
            <p-button
              icon="pi pi-refresh"
              severity="secondary"
              [text]="true"
              size="small"
              styleClass="action-export"
              (onClick)="loadStaff()"
              pTooltip="Actualizar datos" />
          </div>
        </div>

        <!-- Tabla -->
        <div class="card-premium">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-divider">
            <i class="pi pi-users text-content-main text-lg"></i>
            <span class="font-semibold text-content-main uppercase tracking-wide text-sm">Catálogo de Personal</span>
          </div>
          
          <p-table
            [value]="filteredStaff()"
            [loading]="loading()"
            [paginator]="true"
            [rows]="10"
            [rowsPerPageOptions]="[10, 25, 50]"
            styleClass="p-datatable-modern"
            [rowHover]="true">
            <ng-template #header>
              <tr>
                <th class="text-left text-label">Colaborador</th>
                <th class="text-left text-label">Roles</th>
                <th class="text-left text-label">Contrato</th>
                <th class="text-right text-label">NSS</th>
                <th class="text-left text-label">Contacto</th>
                <th class="text-center text-label">Estado</th>
                <th class="text-center text-label">Acciones</th>
              </tr>
            </ng-template>

            <ng-template #body let-person>
              <tr class="hover-lift">
                <td>
                  <div class="flex items-center gap-3">
                    <p-avatar 
                      [label]="getInitials(person)"
                      styleClass="bg-surface-hover text-content-main font-bold border border-divider"
                      shape="circle" />
                    <div class="flex flex-col">
                      <span class="font-bold text-content-main text-sm">{{ person.nombre }}</span>
                      <span class="folio-badge !text-[10px]">{{ person.nss || 'SIN NSS' }}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex gap-1 flex-wrap">
                    <span *ngFor="let rol of person.roles" 
                      class="px-2 py-0.5 text-[9px] uppercase font-bold bg-surface-hover border border-divider rounded text-content-muted">
                      {{ rol }}
                    </span>
                  </div>
                </td>
                <td>
                  <p-tag 
                    [value]="person.tipo" 
                    [severity]="person.tipo === 'interno' ? 'info' : 'secondary'"
                    styleClass="text-[10px] font-bold uppercase" />
                </td>
                <td class="text-right">
                  <span class="font-mono text-xs font-bold text-content-main">
                    {{ person.nss || '—' }}
                  </span>
                </td>
                <td>
                  <span class="text-xs font-semibold">{{ person.telefono || '—' }}</span>
                </td>
                <td class="text-center">
                  <span class="status-chip status-{{ person.estado }}">
                    {{ getEstadoLabel(person.estado) }}
                  </span>
                </td>
                <td class="py-3 px-4 text-center">
                  <div class="flex items-center justify-center gap-1">
                    <p-button 
                      icon="pi pi-pencil" 
                      severity="secondary" 
                      [text]="true" 
                      size="small" 
                      pTooltip="Editar"
                      (onClick)="editPerson(person)" />
                    <p-button 
                      icon="pi pi-ban" 
                      severity="danger" 
                      [text]="true" 
                      size="small"
                      pTooltip="Desactivar"
                      [disabled]="person.estado === 'inactivo'"
                      (onClick)="deactivatePerson(person.id)" />
                  </div>
                </td>
              </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
              <tr>
                <td colspan="7" class="text-center py-12">
                  <div class="flex flex-col items-center text-content-muted">
                    <i class="pi pi-users text-4xl mb-3 opacity-30"></i>
                    <span class="text-lg uppercase tracking-wider font-medium">Sin colaboradores registrados</span>
                  </div>
                </td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      </div>
    </div>
  `
})
export class StaffComponent implements OnInit {
  private staffService = inject(StaffService);
  private destroyRef = inject(DestroyRef);

  staff = signal<Collaborator[]>([]);
  loading = signal(true);
  showForm = signal(false);
  selectedPersonForEdit = signal<Collaborator | null>(null);
  kpis = signal({
    activos: 0,
    choferes: 0
  });

  searchTerm = '';
  currentFilter = signal<string | null>(null);

  filterOptions = [
    { label: 'Todos', value: null },
    { label: 'Choferes', value: 'chofer' },
    { label: 'Ayudantes', value: 'ayudante' },
    { label: 'Cargadores', value: 'cargador' }
  ];

  ngOnInit() {
    this.loadStaff();
  }

  resetFilters() {
    this.searchTerm = '';
    this.currentFilter.set(null);
  }

  loadStaff() {
    this.loading.set(true);
    this.staffService.findAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data: any[]) => {
        const staff = data.map(d => ({ ...d, roles: d.roles || [] }));
        this.staff.set(staff);
        this.calculateKPIs(staff);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  calculateKPIs(data: Collaborator[]) {
    const activos = data.filter(s => s.estado === 'activo').length;
    const choferes = data.filter(s => s.roles?.includes('chofer')).length;

    this.kpis.set({
      activos,
      choferes
    });
  }

  filteredStaff() {
    let result = this.staff();
    const filter = this.currentFilter();
    const term = this.searchTerm?.toLowerCase().trim();

    if (term) {
      result = result.filter(s => 
        s.nombre?.toLowerCase().includes(term)
      );
    }
    
    if (filter) {
      result = result.filter(s => s.roles?.includes(filter));
    }

    return result;
  }

  openForm() {
    this.selectedPersonForEdit.set(null);
    this.showForm.set(true);
  }

  editPerson(person: Collaborator) {
    this.selectedPersonForEdit.set(person);
    this.showForm.set(true);
  }

  onStaffSaved() {
    this.showForm.set(false);
    this.loadStaff();
  }

  deactivatePerson(id: string) {
    this.staff.update(list => 
      list.map(s => s.id === id ? { ...s, estado: 'inactivo' as const } : s)
    );
  }

  getInitials(person: Collaborator): string {
    const first = person.nombre?.charAt(0) || '';
    return first.toUpperCase();
  }

  getEstadoLabel(estado: string): string {
    switch (estado) {
      case 'activo': return 'Activo';
      case 'suspendido': return 'Suspendido';
      case 'inactivo': return 'Inactivo';
      default: return estado;
    }
  }
}
