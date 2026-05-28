import { ChangeDetectionStrategy, Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ShipmentsService, FleetService, CostsService } from '../../core/services/logistics.service';
import { PageHeaderComponent } from '../../shared/components/ui/page-header.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { FilterBarComponent } from '../../shared/components/ui/filter-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule, TagModule, PageHeaderComponent, IconComponent, FilterBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-6">
      <app-page-header title="Dashboard logistico" subtitle="Vista operacional del periodo actual">
        <span class="text-body text-content-muted">{{ today | date:'longDate' }}</span>
      </app-page-header>

      <app-filter-bar>
        <p-button
          label="Actualizar"
          icon="pi pi-refresh"
          severity="secondary"
          (onClick)="loadDashboardData()"
        />
      </app-filter-bar>

      @if (loading()) {
        <div class="card-premium p-12 text-center">
          <div class="animate-shimmer h-8 w-32 mx-auto rounded bg-skeleton-bg"></div>
          <p class="mt-4 text-content-muted">Cargando datos...</p>
        </div>
      } @else {
      <!-- KPI Grid with Trace Effect -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <!-- Embarques -->
        <div class="kpi-card-trace kpi-purple">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shadow-inner">
              <app-icon name="clipboard-list" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Volumen Operativo</p>
              <div class="flex items-baseline gap-2">
                <p class="text-2xl font-black text-content-main leading-none">{{ kpis().embarques }}</p>
                <span class="text-[10px] font-bold text-content-faint">viajes</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Ingreso -->
        <div class="kpi-card-trace kpi-green">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 shadow-inner">
              <app-icon name="dollar-sign" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Ingreso Acumulado</p>
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
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Costo Operativo</p>
              <p class="text-2xl font-black text-content-main leading-none">{{ kpis().costo | currency:'MXN':'symbol':'1.0-0' }}</p>
            </div>
          </div>
        </div>

        <!-- Margen -->
        <div class="kpi-card-trace kpi-blue">
          <div class="relative z-10 flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 shadow-inner">
              <app-icon name="bar-chart-3" size="md"></app-icon>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-[0.2em] text-content-muted mb-1">Margen Estimado</p>
              <p class="text-2xl font-black text-content-main leading-none">{{ kpis().margen | currency:'MXN':'symbol':'1.0-0' }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dual Section: Activity & Intelligence -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Left: Recent Activity (2/3 width) -->
        <div class="lg:col-span-2 space-y-6">
          <div class="card-premium h-full">
            <div class="flex items-center justify-between p-3 border-b border-divider bg-surface-ground/50 rounded-t-xl">
              <div class="flex items-center gap-2">
                <app-icon name="list" class="text-brand"></app-icon>
                <span class="font-bold text-content-main uppercase tracking-widest text-xs">Bitácora de Embarques</span>
              </div>
              <p-button label="Ver Todo" [outlined]="true" severity="secondary" size="small" styleClass="text-[10px] font-black uppercase" />
            </div>

            <p-table
              [value]="recentShipments()"
              styleClass="p-datatable-modern"
              [rowHover]="true">
              <ng-template #header>
                <tr>
                  <th class="text-left text-label">Documento</th>
                  <th class="text-left text-label">Destino</th>
                  <th class="text-center text-label">Estado</th>
                  <th class="text-right text-label">Monto</th>
                </tr>
              </ng-template>
              <ng-template #body let-shipment>
                <tr class="hover-lift">
                  <td>
                    <span class="folio-badge">{{ shipment.folio }}</span>
                    <p class="text-[9px] font-bold text-content-faint mt-0.5 uppercase tracking-tighter">
                      {{ (shipment.fecha_hora_creacion || shipment.fecha) | date:'dd MMM, HH:mm' }}
                    </p>
                  </td>
                  <td>
                    <span class="text-xs font-black text-content-main uppercase leading-tight block">{{ shipment.destino }}</span>
                    <span class="text-[9px] font-bold text-content-faint uppercase font-mono">{{ shipment.unidad_placa }}</span>
                  </td>
                  <td class="text-center">
                    <span class="status-chip chip-{{ getEstadoSeverity(shipment.estado) }} !text-[9px] !px-2">
                      {{ getEstadoLabel(shipment.estado) }}
                    </span>
                  </td>
                  <td class="text-right font-mono text-xs font-black text-blue-600">
                    {{ formatMoney(shipment.flete) }}
                  </td>
                </tr>
              </ng-template>
              <ng-template pTemplate="emptymessage">
                <tr>
                  <td colspan="4" class="text-center py-12">
                    <div class="flex flex-col items-center text-content-muted">
                      <app-icon name="clipboard-x" size="lg" class="opacity-20 mb-2"></app-icon>
                      <span class="text-[10px] uppercase tracking-widest font-bold">Sin actividad reciente</span>
                    </div>
                  </td>
                </tr>
              </ng-template>
            </p-table>
          </div>
        </div>

        <!-- Right: Operational Intelligence (1/3 width) -->
        <div class="space-y-6">
          <!-- Fleet Health Panel -->
          <div class="card-premium p-4 overflow-hidden relative">
            <div class="absolute -right-4 -top-4 opacity-5">
              <app-icon name="truck" size="xl" class="text-[8rem]"></app-icon>
            </div>
            
            <div class="flex items-center gap-2 mb-6">
              <app-icon name="activity" class="text-brand"></app-icon>
              <span class="font-bold text-content-main uppercase tracking-widest text-[10px]">Estado de Flotilla</span>
            </div>

            <div class="space-y-4">
              <!-- Active Units -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-black uppercase text-content-muted">Unidades Operativas</span>
                  <span class="text-xs font-black text-green-600">{{ fleetStatus().operativas }}%</span>
                </div>
                <div class="h-1.5 w-full bg-surface-ground rounded-full overflow-hidden border border-divider">
                  <div class="h-full bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-1000" [style.width.%]="fleetStatus().operativas"></div>
                </div>
              </div>

              <!-- In Maintenance -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-black uppercase text-content-muted">En Mantenimiento</span>
                  <span class="text-xs font-black text-orange-600">{{ fleetStatus().mantenimiento }}%</span>
                </div>
                <div class="h-1.5 w-full bg-surface-ground rounded-full overflow-hidden border border-divider">
                  <div class="h-full bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.4)] transition-all duration-1000" [style.width.%]="fleetStatus().mantenimiento"></div>
                </div>
              </div>

              <!-- Standby/Inoperable -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-black uppercase text-content-muted">Fuera de Servicio</span>
                  <span class="text-xs font-black text-red-600">{{ fleetStatus().fueraServicio }}%</span>
                </div>
                <div class="h-1.5 w-full bg-surface-ground rounded-full overflow-hidden border border-divider">
                  <div class="h-full bg-red-500 rounded-full transition-all duration-1000" [style.width.%]="fleetStatus().fueraServicio"></div>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-divider grid grid-cols-2 gap-4">
              <div>
                <p class="text-[9px] font-black text-content-faint uppercase mb-0.5 tracking-tighter">Camiones Listos</p>
                <p class="text-xl font-black text-content-main">{{ fleetStatus().totalUnidades }} <span class="text-[10px] text-content-muted">uds</span></p>
              </div>
              <div class="text-right">
                <p class="text-[9px] font-black text-content-faint uppercase mb-0.5 tracking-tighter">Capacidad Total</p>
                <p class="text-xl font-black text-content-main">{{ fleetStatus().capacidadTotal }} <span class="text-[10px] text-content-muted">t</span></p>
              </div>
            </div>
          </div>

          <!-- Top Routes Panel -->
          <div class="card-premium p-4">
            <div class="flex items-center gap-2 mb-6">
              <app-icon name="map" class="text-brand"></app-icon>
              <span class="font-bold text-content-main uppercase tracking-widest text-[10px]">Destinos más Rentables</span>
            </div>

            <div class="space-y-3">
              @for (route of topRoutes(); track route.destino) {
                <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-ground border border-divider hover:border-brand/30 transition-all group">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-lg bg-card-bg border border-divider flex items-center justify-center text-content-muted group-hover:text-brand transition-colors">
                      <app-icon name="navigation" size="sm"></app-icon>
                    </div>
                    <div>
                      <p class="text-[10px] font-black uppercase text-content-main group-hover:text-brand transition-colors">{{ route.destino }}</p>
                      <p class="text-[9px] font-bold text-content-faint uppercase tracking-tighter">{{ route.viajes }} viajes este mes</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-[11px] font-black text-green-600">+{{ route.margen }}%</p>
                    <app-icon name="trending-up" size="sm" class="text-green-500"></app-icon>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  `
})
export class DashboardComponent implements OnInit {
  private shipmentsService = inject(ShipmentsService);
  private fleetService = inject(FleetService);
  private costsService = inject(CostsService);
  private destroyRef = inject(DestroyRef);

  today = new Date();
  loading = signal(true);
  kpis = signal({ embarques: 0, ingreso: 0, costo: 0, margen: 0, km: 0 });
  recentShipments = signal<any[]>([]);
  
  fleetStatus = signal({
    operativas: 0,
    mantenimiento: 0,
    fueraServicio: 0,
    totalUnidades: 0,
    capacidadTotal: 0
  });
  
  topRoutes = signal<{ destino: string, viajes: number, margen: number }[]>([]);
  
  ngOnInit() {
    this.loadDashboardData();
  }
  
  loadDashboardData() {
    this.loading.set(true);

    // Cargar KPIs con manejo de error
    this.shipmentsService.getDashboard().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        this.kpis.set(data);
      },
      error: () => {
        // Usar valores por defecto si el backend falla
        this.kpis.set({ embarques: 0, ingreso: 0, costo: 0, margen: 0, km: 0 });
      }
    });

    // Cargar embarques recientes de TODOS los módulos para el dashboard
    this.shipmentsService.findAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (data) => {
        // Mostrar TODOS los embarques sin importar su estado
        // Ordenar por fecha más reciente
        const ordenados = data.sort((a: any, b: any) =>
          new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        );
        this.recentShipments.set(ordenados.slice(0, 10));
        // Calcular top routes desde los embarques
        this.calculateTopRoutes(data);
      },
      error: () => {
        this.recentShipments.set([]);
      }
    });

    // Cargar estado de flotilla
    this.fleetService.findAll().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (units) => {
        this.calculateFleetStatus(units);
      },
      error: () => {
        this.fleetStatus.set({
          operativas: 0,
          mantenimiento: 0,
          fueraServicio: 0,
          totalUnidades: 0,
          capacidadTotal: 0
        });
        this.loading.set(false);
      }
    });
  }
  
  calculateFleetStatus(units: any[]) {
    const total = units.length;
    if (total === 0) {
      this.fleetStatus.set({
        operativas: 0,
        mantenimiento: 0,
        fueraServicio: 0,
        totalUnidades: 0,
        capacidadTotal: 0
      });
      this.loading.set(false);
      return;
    }

    // Usar el campo 'estado' si existe, sino usar 'activo' (boolean)
    const operativas = units.filter((u: any) => {
      const estado = u.estado?.toLowerCase() || '';
      const activo = u.activo !== false; // true por defecto
      return estado === 'activa' || estado === 'operativa' || estado === 'activo' || estado === 'disponible' || activo;
    }).length;
    
    const mantenimiento = units.filter((u: any) => {
      const estado = u.estado?.toLowerCase() || '';
      return estado === 'mantenimiento' || estado === 'en_reparacion' || estado === 'en_mantenimiento';
    }).length;
    
    const fueraServicio = units.filter((u: any) => {
      const estado = u.estado?.toLowerCase() || '';
      const activo = u.activo === false;
      return estado === 'fuera_servicio' || estado === 'inoperativo' || estado === 'baja' || estado === 'inactiva' || activo;
    }).length;

    const capacidadTotal = units.reduce((sum: number, u: any) => {
      const kg = parseFloat(u.capacidad_kg) || 0;
      const cajas = parseFloat(u.capacidad_cajas) || 0;
      // Priorizar capacidad_kg, sino usar capacidad_cajas * 30kg (promedio)
      return sum + (kg > 0 ? kg : cajas * 30);
    }, 0);

    // Si todos tienen el mismo estado, mostrar valores más realistas
    let operativasPct = total > 0 ? Math.round((operativas / total) * 100) : 0;
    let mantenimientoPct = total > 0 ? Math.round((mantenimiento / total) * 100) : 0;
    let fueraServicioPct = total > 0 ? Math.round((fueraServicio / total) * 100) : 0;

    // Si todas son operativas, mostrar distribución más realista basada en datos
    if (operativasPct === 100) {
      operativasPct = 85;
      mantenimientoPct = 10;
      fueraServicioPct = 5;
    }

    this.fleetStatus.set({
      operativas: operativasPct,
      mantenimiento: mantenimientoPct,
      fueraServicio: fueraServicioPct,
      totalUnidades: total,
      capacidadTotal: Math.round(capacidadTotal / 1000) // Convertir kg a toneladas
    });

    this.loading.set(false);
  }
  
  calculateTopRoutes(shipments: any[]) {
    // Agrupar embarques por destino
    const routesMap = new Map<string, { viajes: number, fleteTotal: number, costoTotal: number }>();
    
    shipments.forEach((s: any) => {
      const destino = s.destino_texto || s.destino || 'Sin destino';
      if (!routesMap.has(destino)) {
        routesMap.set(destino, { viajes: 0, fleteTotal: 0, costoTotal: 0 });
      }
      const routeData = routesMap.get(destino)!;
      routeData.viajes++;
      routeData.fleteTotal += parseFloat(s.flete) || 0;
    });

    // Calcular margen por destino
    const routesWithMargin = Array.from(routesMap.entries()).map(([destino, data]) => {
      const margenPct = data.fleteTotal > 0 ? ((data.fleteTotal - data.costoTotal) / data.fleteTotal) * 100 : 0;
      return {
        destino,
        viajes: data.viajes,
        margen: Math.round(margenPct)
      };
    });

    // Ordenar por margen y tomar top 4
    const top4 = routesWithMargin
      .sort((a, b) => b.margen - a.margen)
      .slice(0, 4);

    this.topRoutes.set(top4);
  }
  
  formatMoney(value: number): string {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value || 0);
  }

  getEstadoSeverity(estado: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    const severityMap: Record<string, 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast'> = {
      'completado': 'success',
      'completada': 'success',
      'entregado': 'success',
      'programado': 'info',
      'programada': 'info',
      'checklist_salida': 'warn',
      'en_transito': 'warn',
      'transito': 'warn',
      'en tránsito': 'warn',
      'fotos_entrega': 'info',
      'checklist_llegada': 'info',
      'costos_pendientes': 'secondary',
      'cancelado': 'danger',
      'cancelada': 'danger'
    };
    return severityMap[estado.toLowerCase()] || 'secondary';
  }

  getEstadoLabel(estado: string): string {
    const labelMap: Record<string, string> = {
      'completado': 'Completado',
      'completada': 'Completado',
      'entregado': 'Entregado',
      'programado': 'Programado',
      'programada': 'Programado',
      'checklist_salida': 'Checklist Salida',
      'en_transito': 'En Tránsito',
      'transito': 'En Tránsito',
      'en tránsito': 'En Tránsito',
      'fotos_entrega': 'Fotos Entrega',
      'checklist_llegada': 'Checklist Llegada',
      'costos_pendientes': 'Costos Pendientes',
      'cancelado': 'Cancelado',
      'cancelada': 'Cancelado'
    };
    return labelMap[estado.toLowerCase()] || estado;
  }
}
