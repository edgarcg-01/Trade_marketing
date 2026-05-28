import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import { RequirePermissions } from '@megadulces/shared-auth/core';
import { Permission } from '@megadulces/shared-auth/core';

@ApiTags('Shipments')
@Controller('shipments')
@UseGuards(JwtAuthGuard)
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Post()
  @RequirePermissions(Permission.LOG_EMBARQUES_CREAR)
  @ApiOperation({ summary: 'Registrar un nuevo embarque' })
  create(@Body() data: any) {
    return this.shipmentsService.create(data);
  }

  @Get()
  @RequirePermissions(Permission.LOG_EMBARQUES_VER)
  findAll() {
    return this.shipmentsService.findAll();
  }

  @Get('dashboard')
  @RequirePermissions(Permission.LOG_EMBARQUES_VER)
  @ApiOperation({ summary: 'Obtener KPIs para el dashboard' })
  getDashboard() {
    return this.shipmentsService.getDashboardKPIs();
  }

  @Get('statuses')
  @RequirePermissions(Permission.LOG_EMBARQUES_VER)
  @ApiOperation({ summary: 'Obtener catálogo de estados de embarque' })
  getStatuses() {
    return [
      { label: 'Programado', value: 'programado' },
      { label: 'Checklist Salida', value: 'checklist_salida' },
      { label: 'En Tránsito', value: 'en_transito' },
      { label: 'Fotos Entrega', value: 'fotos_entrega' },
      { label: 'Checklist Llegada', value: 'checklist_llegada' },
      { label: 'Costos Pendientes', value: 'costos_pendientes' },
      { label: 'Completado', value: 'completado' },
      { label: 'Cancelado', value: 'cancelado' }
    ];
  }

  @Get('driver/:userId')
  @ApiOperation({ summary: 'Obtener embarques asignados a un chofer' })
  getDriverShipments(@Param('userId') userId: string) {
    return this.shipmentsService.getDriverShipments(userId);
  }

  @Get(':id')
  @RequirePermissions(Permission.LOG_EMBARQUES_VER)
  findOne(@Param('id') id: string) {
    return this.shipmentsService.findOne(id);
  }

  // ========== ENDPOINTS DE TRANSICIÓN DE ESTADOS ==========

  @Post(':id/iniciar-checklist-salida')
  @ApiOperation({ summary: 'Iniciar checklist de salida' })
  iniciarChecklistSalida(
    @Param('id') id: string,
    @Body() body: { choferId: string }
  ) {
    return this.shipmentsService.iniciarChecklistSalida(id, body.choferId);
  }

  @Post(':id/confirmar-salida')
  @ApiOperation({ summary: 'Confirmar salida (después de completar checklist)' })
  confirmarSalida(
    @Param('id') id: string,
    @Body() body: { checklistId: string }
  ) {
    return this.shipmentsService.confirmarSalida(id, body.checklistId);
  }

  @Post(':id/subir-fotos-entrega')
  @ApiOperation({ summary: 'Cambiar estado a fotos de entrega' })
  subirFotosEntrega(@Param('id') id: string) {
    return this.shipmentsService.subirFotosEntrega(id);
  }

  @Post(':id/confirmar-entrega')
  @ApiOperation({ summary: 'Confirmar entrega (después de subir fotos)' })
  confirmarEntrega(@Param('id') id: string) {
    return this.shipmentsService.confirmarEntrega(id);
  }

  @Post(':id/completar-checklist-llegada')
  @ApiOperation({ summary: 'Completar checklist de llegada' })
  completarChecklistLlegada(
    @Param('id') id: string,
    @Body() body: { checklistId: string }
  ) {
    return this.shipmentsService.completarChecklistLlegada(id, body.checklistId);
  }

  @Post(':id/finalizar')
  @ApiOperation({ summary: 'Finalizar embarque (después de generar costos)' })
  finalizarEmbarque(@Param('id') id: string) {
    return this.shipmentsService.finalizarEmbarque(id);
  }
}
