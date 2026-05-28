import { Injectable, Logger } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ReportsService {
  private readonly logger = new Logger(ReportsService.name);

  async generatePdfFromHtml(html: string): Promise<Buffer> {
    this.logger.log('Iniciando generación de PDF con Puppeteer...');
    
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px',
        },
      });

      await browser.close();
      return Buffer.from(pdfBuffer);
    } catch (error) {
      this.logger.error('Error generando PDF:', error);
      if (browser) await browser.close();
      throw error;
    }
  }

  // Plantilla base para los reportes (Estética Space Mono / Dark)
  getEmbedStyles(): string {
    return `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Barlow+Condensed:wght@400;600;800&family=Barlow:wght@300;400;500&display=swap');
        
        :root {
          --bg: #ffffff;
          --surface: #f8f9fa;
          --border: #e9ecef;
          --accent: #f5a623;
          --text: #1a1a1a;
          --text-dim: #6c757d;
          --mono: 'Space Mono', monospace;
          --display: 'Barlow Condensed', sans-serif;
          --body: 'Barlow', sans-serif;
        }

        body {
          font-family: var(--body);
          color: var(--text);
          background: var(--bg);
          margin: 0;
          padding: 40px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .logo {
          font-family: var(--display);
          font-weight: 800;
          font-size: 24px;
          text-transform: uppercase;
          color: var(--accent);
        }

        .report-title {
          font-family: var(--display);
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .info-item {
          background: var(--surface);
          padding: 15px;
          border-radius: 4px;
          border-left: 3px solid var(--border);
        }

        .info-label {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 16px;
          font-weight: 600;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th {
          font-family: var(--mono);
          font-size: 11px;
          text-align: left;
          background: #eee;
          padding: 10px;
          border: 1px solid #ddd;
        }

        td {
          padding: 10px;
          border: 1px solid #ddd;
          font-size: 13px;
        }

        .footer {
          margin-top: 50px;
          font-family: var(--mono);
          font-size: 10px;
          color: var(--text-dim);
          text-align: center;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }
      </style>
    `;
  }

  generateShipmentHtml(shipment: any): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>${this.getEmbedStyles()}</head>
      <body>
        <div class="header">
          <div class="logo">MEGADULCES <span>LOGÍSTICA</span></div>
          <div class="report-title">EMBARQUE #${shipment.folio}</div>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Fecha</div>
            <div class="info-value">${shipment.fecha}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Unidad</div>
            <div class="info-value">${shipment.unidad_placa || 'N/A'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Ruta</div>
            <div class="info-value">${shipment.origen} &rarr; ${shipment.destino}</div>
          </div>
        </div>

        <h3>Detalles de la Carga</h3>
        <table>
          <thead>
            <tr>
              <th>Cajas</th>
              <th>Peso (Kg)</th>
              <th>Valor de Carga</th>
              <th>Flete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${shipment.cajas}</td>
              <td>${shipment.peso} kg</td>
              <td>$${shipment.valor_carga}</td>
              <td>$${shipment.flete}</td>
            </tr>
          </tbody>
        </table>

        <div class="footer">
          Documento generado automáticamente por Megadulces Monorepo - Logística
        </div>
      </body>
      </html>
    `;
  }
}
