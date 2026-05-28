import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { FleetService } from './fleet.service';
import { UsageLogService } from './usage-log.service';
import { MaintenanceService } from './maintenance.service';
import { AlertsService } from './alerts.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import { RequirePermissions } from '@megadulces/shared-auth/core';
import { Permission } from '@megadulces/shared-auth/core';

@ApiTags('Fleet')
@Controller('fleet')
@UseGuards(JwtAuthGuard)
export class FleetController {
  constructor(
    private readonly fleetService: FleetService,
    private readonly usageLogService: UsageLogService,
    private readonly maintenanceService: MaintenanceService,
    private readonly alertsService: AlertsService,
  ) {}

  @Get('alerts')
  @RequirePermissions(Permission.LOG_UNIDADES_VER)
  @ApiOperation({ summary: 'Obtener alertas de flota (mantenimiento, bitácora, consumo)' })
  getAlerts() {
    return this.alertsService.getGlobalAlerts();
  }

  // --- UNIDADES ---
  @Post()
  @RequirePermissions(Permission.LOG_UNIDADES_GESTIONAR)
  @ApiOperation({ summary: 'Registrar una nueva unidad' })
  create(@Body() data: any) {
    return this.fleetService.create(data);
  }

  @Get()
  @RequirePermissions(Permission.LOG_UNIDADES_VER)
  findAll() {
    return this.fleetService.findAll();
  }

  @Get(':id')
  @RequirePermissions(Permission.LOG_UNIDADES_VER)
  findOne(@Param('id') id: string) {
    return this.fleetService.findOne(id);
  }

  @Get(':id/history')
  @RequirePermissions(Permission.LOG_UNIDADES_VER)
  getHistory(@Param('id') id: string) {
    return this.fleetService.getHistory(id);
  }

  @Patch(':id')
  @RequirePermissions(Permission.LOG_UNIDADES_GESTIONAR)
  update(@Param('id') id: string, @Body() data: any) {
    return this.fleetService.update(id, data);
  }

  @Delete(':id')
  @RequirePermissions(Permission.LOG_UNIDADES_GESTIONAR)
  remove(@Param('id') id: string) {
    return this.fleetService.remove(id);
  }

  // --- BITÁCORA DE USO ---
  @Post('usage/check-in')
  @RequirePermissions(Permission.LOG_UNIDADES_GESTIONAR)
  checkIn(@Body() data: any) {
    return this.usageLogService.checkIn(data);
  }

  @Post('usage/:id/check-out')
  @RequirePermissions(Permission.LOG_UNIDADES_GESTIONAR)
  checkOut(@Param('id') id: string, @Body() data: any) {
    return this.usageLogService.checkOut(id, data);
  }

  @Get('usage/active')
  @RequirePermissions(Permission.LOG_UNIDADES_VER)
  getActiveLogs() {
    return this.usageLogService.getActiveLogs();
  }

  // --- MANTENIMIENTOS ---
  @Post('maintenance')
  @RequirePermissions(Permission.LOG_UNIDADES_GESTIONAR)
  createMaintenance(@Body() data: any) {
    return this.maintenanceService.create(data);
  }

  @Get('maintenance')
  @RequirePermissions(Permission.LOG_UNIDADES_VER)
  findAllMaintenance(@Query() filters: any) {
    return this.maintenanceService.findAll(filters);
  }
}
