import { Controller, Get, Post, Body, Param, UseGuards, Patch } from '@nestjs/common';
import { ChecklistsService } from './checklists.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';
import type { ChecklistTipo } from './checklist-items.config';

@ApiTags('Checklists')
@Controller('checklists')
@UseGuards(JwtAuthGuard)
export class ChecklistsController {
  constructor(private readonly checklistsService: ChecklistsService) {}

  @Post(':embarqueId/:tipo')
  @ApiOperation({ summary: 'Crear checklist para un embarque' })
  async create(
    @Param('embarqueId') embarqueId: string,
    @Param('tipo') tipo: ChecklistTipo,
    @Body() body: { choferId: string }
  ) {
    return this.checklistsService.createChecklist(embarqueId, body.choferId, tipo);
  }

  @Get(':embarqueId/:tipo')
  @ApiOperation({ summary: 'Obtener checklist de un embarque' })
  async findOne(
    @Param('embarqueId') embarqueId: string,
    @Param('tipo') tipo: ChecklistTipo,
  ) {
    return this.checklistsService.getChecklistByEmbarque(embarqueId, tipo);
  }

  @Get(':embarqueId')
  @ApiOperation({ summary: 'Obtener todos los checklists de un embarque' })
  async findByEmbarque(@Param('embarqueId') embarqueId: string) {
    return this.checklistsService.getChecklistsByEmbarque(embarqueId);
  }

  @Patch(':id/respuestas')
  @ApiOperation({ summary: 'Actualizar respuestas del checklist' })
  async updateRespuestas(
    @Param('id') id: string,
    @Body() body: { respuestas: Record<string, any>; fotos?: string[] }
  ) {
    return this.checklistsService.updateChecklistRespuestas(id, body.respuestas, body.fotos);
  }

  @Patch(':id/completar')
  @ApiOperation({ summary: 'Marcar checklist como completado' })
  async complete(@Param('id') id: string) {
    // Nota: La validación completa se hace en el frontend
    // Aquí solo verificamos que exista el checklist
    const checklist = await this.checklistsService.getChecklistById(id);
    if (!checklist) {
      throw new Error('Checklist no encontrado');
    }
    return this.checklistsService.completeChecklist(id);
  }
}
