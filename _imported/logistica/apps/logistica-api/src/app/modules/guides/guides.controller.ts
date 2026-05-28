import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GuidesService } from './guides.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import { RequirePermissions } from '@megadulces/shared-auth/core';
import { Permission } from '@megadulces/shared-auth/core';

@ApiTags('Guides')
@Controller('guides')
@UseGuards(JwtAuthGuard)
export class GuidesController {
  constructor(private readonly guidesService: GuidesService) {}

  @Post()
  @RequirePermissions(Permission.LOG_GUIAS_CREAR)
  @ApiOperation({ summary: 'Registrar una nueva guía de viaje' })
  create(@Body() data: any) {
    return this.guidesService.create(data);
  }

  @Get()
  @RequirePermissions(Permission.LOG_GUIAS_VER)
  findAll() {
    return this.guidesService.findAll();
  }

  @Get(':id')
  @RequirePermissions(Permission.LOG_GUIAS_VER)
  findOne(@Param('id') id: string) {
    return this.guidesService.findOne(id);
  }

  @Patch(':id/status')
  @RequirePermissions(Permission.LOG_GUIAS_EDITAR)
  updateStatus(@Param('id') id: string, @Body('estado') estado: string) {
    return this.guidesService.updateStatus(id, estado);
  }
}
