import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import { RequirePermissions } from '@megadulces/shared-auth/core';
import { Permission } from '@megadulces/shared-auth/core';

@ApiTags('Staff')
@Controller('staff')
@UseGuards(JwtAuthGuard)
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get('roles')
  @RequirePermissions(Permission.LOG_COLABORADORES_VER)
  @ApiOperation({ summary: 'Obtener roles válidos para colaboradores' })
  getRoles() {
    return this.staffService.getRoles();
  }

  @Get()
  @RequirePermissions(Permission.LOG_COLABORADORES_VER)
  @ApiOperation({ summary: 'Obtener todos los colaboradores' })
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  @RequirePermissions(Permission.LOG_COLABORADORES_VER)
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Post()
  @RequirePermissions(Permission.LOG_COLABORADORES_GESTIONAR)
  @ApiOperation({ summary: 'Crear un nuevo colaborador de logística' })
  create(@Body() data: any) {
    return this.staffService.create(data);
  }

  @Patch(':id')
  @RequirePermissions(Permission.LOG_COLABORADORES_GESTIONAR)
  update(@Param('id') id: string, @Body() data: any) {
    return this.staffService.update(id, data);
  }

  @Delete(':id')
  @RequirePermissions(Permission.LOG_COLABORADORES_GESTIONAR)
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
