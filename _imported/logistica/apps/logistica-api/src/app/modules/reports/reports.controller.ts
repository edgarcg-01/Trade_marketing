import { Controller, Get, Param, Res, StreamableFile, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ShipmentsService } from '../shipments/shipments.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import { RequirePermissions } from '@megadulces/shared-auth/core';
import { Permission } from '@megadulces/shared-auth/core';

@ApiTags('Reports')
@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly shipmentsService: ShipmentsService,
  ) {}

  @Get('shipment/:id/pdf')
  @RequirePermissions(Permission.LOG_REPORTES_VER)
  @ApiOperation({ summary: 'Generar PDF de un embarque' })
  async downloadShipmentPdf(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: any,
  ) {
    const shipment = await this.shipmentsService.findOne(id);
    if (!shipment) {
      throw new Error('Embarque no encontrado');
    }

    const html = this.reportsService.generateShipmentHtml(shipment);
    const pdfBuffer = await this.reportsService.generatePdfFromHtml(html);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=embarque_${shipment.folio}.pdf`,
      'Content-Length': pdfBuffer.length,
    });

    return new StreamableFile(pdfBuffer);
  }
}
