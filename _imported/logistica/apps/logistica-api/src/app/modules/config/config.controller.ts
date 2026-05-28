import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';

@ApiTags('Config')
@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('periods')
  @ApiOperation({ summary: 'Obtener todos los períodos de pago' })
  findAllPeriods() {
    return this.configService.findAllPeriods();
  }

  @Get('periods/current')
  @ApiOperation({ summary: 'Obtener el período actual' })
  findCurrentPeriod() {
    return this.configService.findCurrentPeriod();
  }

  @Get('finance')
  @ApiOperation({ summary: 'Obtener configuración financiera (factores, costos)' })
  findAllFinanzas() {
    return this.configService.findAllFinanzas();
  }

  @Get('destinos')
  @ApiOperation({ summary: 'Obtener catálogo de destinos' })
  findAllDestinos() {
    return this.configService.findAllDestinos();
  }

  @Post('destinos')
  @ApiOperation({ summary: 'Crear nuevo destino' })
  createDestino(@Body() data: any) {
    return this.configService.createDestino(data);
  }

  @Patch('destinos/:id')
  @ApiOperation({ summary: 'Actualizar destino' })
  updateDestino(@Param('id') id: string, @Body() data: any) {
    return this.configService.updateDestino(id, data);
  }

  @Delete('destinos/:id')
  @ApiOperation({ summary: 'Eliminar destino' })
  deleteDestino(@Param('id') id: string) {
    return this.configService.deleteDestino(id);
  }

  @Patch('finance/:clave')
  updateFinance(@Param('clave') clave: string, @Body('valor') valor: number) {
    return this.configService.updateFinanceValue(clave, valor);
  }
}
