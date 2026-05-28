import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-print',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .print-wrapper {
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }

    .print-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .print-header-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .print-logo {
      height: 60px;
      width: auto;
    }

    .print-company-sub {
      font-size: 12px;
      color: #666;
      margin: 0;
    }

    .print-header-right {
      text-align: right;
    }

    .print-report-title {
      font-size: 18px;
      font-weight: bold;
      margin: 0 0 5px 0;
    }

    .print-report-period,
    .print-report-date {
      font-size: 11px;
      color: #666;
      margin: 2px 0;
    }

    .print-divider {
      border-bottom: 2px solid #333;
      margin-bottom: 20px;
    }

    .print-section {
      margin-bottom: 25px;
    }

    .print-section-title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
    }

    .print-kpis {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }

    .print-kpi {
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }

    .print-kpi-green {
      background-color: #dcfce7;
      border: 1px solid #16a34a;
    }

    .print-kpi-red {
      background-color: #fee2e2;
      border: 1px solid #ef4444;
    }

    .print-kpi-blue {
      background-color: #dbeafe;
      border: 1px solid #3b82f6;
    }

    .print-kpi-dark {
      background-color: #f3f4f6;
      border: 1px solid #374151;
    }

    .print-kpi-label {
      display: block;
      font-size: 11px;
      font-weight: bold;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    .print-kpi-value {
      display: block;
      font-size: 18px;
      font-weight: bold;
    }

    .print-chart {
      margin: 20px 0;
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      padding: 15px;
    }

    .print-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
    }

    .print-table th {
      background-color: #f3f4f6;
      padding: 8px;
      text-align: left;
      font-weight: bold;
      border-bottom: 2px solid #333;
    }

    .print-table td {
      padding: 8px;
      border-bottom: 1px solid #e4e4e7;
    }

    .text-right {
      text-align: right;
    }

    .text-center {
      text-align: center;
    }

    .font-bold {
      font-weight: bold;
    }

    .text-green {
      color: #16a34a;
    }

    .text-red {
      color: #ef4444;
    }

    @media print {
      .print-wrapper {
        padding: 0;
      }
    }
  `],
  template: `
    <div class="print-wrapper">
      
      <header class="print-header">
        <div class="print-header-left">
          <div class="print-company-info">
            <img src="/mega-dulces-logo.webp" alt="Megadulces Logo" class="print-logo" />
            <p class="print-company-sub">Sistema de Logística</p>
          </div>
        </div>
        <div class="print-header-right">
          <h2 class="print-report-title">Reporte de Rentabilidad</h2>
          <p class="print-report-period">Periodo: {{ periodoLabel }}</p>
          <p class="print-report-date">Generado: {{ hoy | date:'dd/MM/yyyy HH:mm' }}</p>
        </div>
      </header>

      <div class="print-divider"></div>

      <section class="print-section">
        <h3 class="print-section-title">Resumen Ejecutivo</h3>
        <div class="print-kpis">
          <div class="print-kpi print-kpi-green">
            <span class="print-kpi-label">Ingreso Total</span>
            <span class="print-kpi-value">{{ kpis.ingreso | currency:'MXN':'symbol':'1.0-0' }}</span>
          </div>
          <div class="print-kpi print-kpi-red">
            <span class="print-kpi-label">Costo Total</span>
            <span class="print-kpi-value">{{ kpis.costo | currency:'MXN':'symbol':'1.0-0' }}</span>
          </div>
          <div class="print-kpi print-kpi-blue">
            <span class="print-kpi-label">Utilidad Bruta</span>
            <span class="print-kpi-value">{{ kpis.utilidad | currency:'MXN':'symbol':'1.0-0' }}</span>
          </div>
          <div class="print-kpi print-kpi-dark">
            <span class="print-kpi-label">Margen %</span>
            <span class="print-kpi-value">{{ kpis.margen_pct | number:'1.1-1' }}%</span>
          </div>
        </div>
      </section>

      <section class="print-section">
        <h3 class="print-section-title">Ingreso vs Costo por Embarque</h3>
        <div class="print-chart">
          <svg [attr.viewBox]="'0 0 ' + chartWidth + ' ' + chartHeight"
               [attr.width]="chartWidth"
               [attr.height]="chartHeight">
            
            <line *ngFor="let line of gridLines" 
                  [attr.x1]="chartPadding" [attr.y1]="line.y"
                  [attr.x2]="chartWidth - 20" [attr.y2]="line.y"
                  stroke="#e4e4e7" stroke-width="1" />
            
            <text *ngFor="let line of gridLines"
                  [attr.x]="chartPadding - 8" [attr.y]="line.y + 4"
                  text-anchor="end" font-size="9" fill="#71717a">
              {{ line.label }}
            </text>

            <g *ngFor="let bar of chartBars">
              <rect
                [attr.x]="bar.x"
                [attr.y]="bar.ingresoY"
                [attr.width]="bar.barWidth"
                [attr.height]="bar.ingresoH"
                fill="#16a34a" opacity="0.85" rx="2" />
              
              <rect
                [attr.x]="bar.x + bar.barWidth + 2"
                [attr.y]="bar.costoY"
                [attr.width]="bar.barWidth"
                [attr.height]="bar.costoH"
                fill="#ef4444" opacity="0.85" rx="2" />
                
               <text [attr.x]="bar.x + bar.barWidth + 1" 
                     [attr.y]="chartHeight - chartPadding + 15"
                     text-anchor="middle" font-size="10" fill="#3f3f46">
                 {{ bar.label }}
               </text>
            </g>
          </svg>
        </div>
      </section>

      <section class="print-section">
        <h3 class="print-section-title">Rentabilidad por Embarque</h3>
        <table class="print-table">
          <thead>
            <tr>
              <th>Folio</th>
              <th>Ruta</th>
              <th>Km</th>
              <th>Flete</th>
              <th>Costo Op.</th>
              <th>Margen</th>
              <th>%</th>
              <th>$/km Ingreso</th>
              <th>$/km Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of embarques">
              <td>{{ row.folio }}</td>
              <td>{{ row.ruta }}</td>
              <td class="text-right">{{ row.km | number }}</td>
              <td class="text-right">{{ row.flete | currency:'MXN':'symbol':'1.2-2' }}</td>
              <td class="text-right">{{ row.costo_operativo | currency:'MXN':'symbol':'1.2-2' }}</td>
              <td class="text-right" [ngClass]="{'text-green': row.margen > 0, 'text-red': row.margen < 0}">
                {{ row.margen | currency:'MXN':'symbol':'1.2-2' }}
              </td>
              <td class="text-right">{{ row.margen_pct | number:'1.1-1' }}%</td>
              <td class="text-right">{{ row.ingreso_por_km | currency:'MXN':'symbol':'1.2-2' }}</td>
              <td class="text-right">{{ row.costo_por_km | currency:'MXN':'symbol':'1.2-2' }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="print-section">
        <h3 class="print-section-title">Rentabilidad por Unidad</h3>
        <table class="print-table">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Embarques</th>
              <th>Km Total</th>
              <th>Ingreso Total</th>
              <th>Costo Total</th>
              <th>Margen</th>
              <th>$/km</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of unidades">
              <td class="font-bold">{{ row.placa }}</td>
              <td class="text-center">{{ row.embarques }}</td>
              <td class="text-right">{{ row.km_total | number }}</td>
              <td class="text-right">{{ row.ingreso_total | currency:'MXN':'symbol':'1.2-2' }}</td>
              <td class="text-right">{{ row.costo_total | currency:'MXN':'symbol':'1.2-2' }}</td>
              <td class="text-right" [ngClass]="{'text-green': row.margen > 0, 'text-red': row.margen < 0}">
                {{ row.margen | currency:'MXN':'symbol':'1.2-2' }}
              </td>
              <td class="text-right">{{ row.ingreso_por_km | currency:'MXN':'symbol':'1.2-2' }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  `
})
export class ReportPrintComponent {
  hoy = new Date();

  // Inputs desde el componente padre
  @Input() periodoLabel: string = 'Mensual';
  
  @Input() kpis: any = { ingreso: 0, costo: 0, utilidad: 0, margen_pct: 0 };
  @Input() embarques: any[] = [];
  @Input() unidades: any[] = [];
  
  // Configuraciones del SVG
  @Input() chartWidth: number = 600;
  @Input() chartHeight: number = 300;
  @Input() chartPadding: number = 40;
  @Input() gridLines: any[] = [];
  @Input() chartBars: any[] = [];
}
