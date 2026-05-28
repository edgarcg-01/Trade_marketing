import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Inject } from '@nestjs/common';
import { CostsService } from './costs.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import { RequirePermissions } from '@megadulces/shared-auth/core';
import { Permission } from '@megadulces/shared-auth/core';
import { KNEX_CONNECTION } from '../../../shared/database/database.module';
import type { Knex } from 'knex';

@ApiTags('Costs')
@Controller('logistics/costs')
@UseGuards(JwtAuthGuard)
export class CostsController {
  constructor(
    private readonly costsService: CostsService,
    @Inject(KNEX_CONNECTION) private readonly knex: Knex
  ) {}

  @Get()
  findAll() {
    return this.costsService.findAll();
  }

  @Get('embarque/:id')
  findByEmbarque(@Param('id') id: string) {
    return this.costsService.findByEmbarque(id);
  }

  @Post()
  @RequirePermissions(Permission.LOG_EMBARQUES_CREAR)
  @ApiOperation({ summary: 'Registrar costos de un embarque' })
  create(@Body() createCostData: any) {
    return this.costsService.create(createCostData);
  }

  @Patch(':id')
  @RequirePermissions(Permission.LOG_EMBARQUES_CREAR)
  @ApiOperation({ summary: 'Actualizar costos de un embarque' })
  update(@Param('id') id: string, @Body() updateCostData: any) {
    return this.costsService.update(id, updateCostData);
  }

  @Delete(':id')
  @RequirePermissions(Permission.LOG_EMBARQUES_CREAR)
  remove(@Param('id') id: string) {
    return this.costsService.remove(id);
  }

  @Post('fix-shipments-with-costs')
  @ApiOperation({ summary: 'Corrige embarques que tienen costos pero no están en estado completado' })
  async fixShipmentsWithCosts() {
    // Buscar embarques que tienen costos pero no están en estado 'completado'
    const shipmentsToFix = await this.knex('logistica_embarques as e')
      .join('logistica_costos as c', 'e.id', 'c.embarque_id')
      .select('e.id', 'e.folio', 'e.estado')
      .where('e.estado', '!=', 'completado');

    const now = new Date();
    const fixed: any[] = [];

    for (const shipment of shipmentsToFix) {
      await this.knex('logistica_embarques')
        .where({ id: shipment.id })
        .update({
          estado: 'completado',
          fecha_hora_completado: now,
          updated_at: now
        });

      // Registrar en historial
      await this.knex('logistica_embarque_historial').insert({
        embarque_id: shipment.id,
        estado_anterior: shipment.estado,
        estado_nuevo: 'completado',
        fecha_hora: now,
        usuario_id: null,
        observacion: 'Corrección automática: embarque tenía costos pero estado incorrecto'
      });

      fixed.push({ folio: shipment.folio, estado_anterior: shipment.estado });
    }

    return {
      fixed_count: fixed.length,
      shipments: fixed
    };
  }
}
