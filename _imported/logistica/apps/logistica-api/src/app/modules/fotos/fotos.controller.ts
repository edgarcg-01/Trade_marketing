import { Controller, Get, Post, Delete, Param, UseGuards, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FotosService } from './fotos.service';
import type { FotoTipo } from './fotos.service';
import { ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from '@megadulces/shared-auth/core';

interface UploadedFile {
  buffer: Buffer;
  mimetype: string;
  originalname: string;
  size: number;
}

@ApiTags('Fotos')
@Controller('fotos')
@UseGuards(JwtAuthGuard)
export class FotosController {
  constructor(private readonly fotosService: FotosService) {}

  @Post('upload/:embarqueId/:guiaId')
  @ApiOperation({ summary: 'Subir foto de entrega' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFoto(
    @UploadedFile() file: UploadedFile,
    @Param('embarqueId') embarqueId: string,
    @Param('guiaId') guiaId: string,
    @Body() body: { 
      choferId: string; 
      tipo: FotoTipo; 
      lat?: string; 
      lng?: string;
      timestamp?: string;
    },
  ) {
    if (!file) {
      throw new Error('No se proporcionó ningún archivo');
    }

    const metadata = {
      lat: body.lat ? parseFloat(body.lat) : undefined,
      lng: body.lng ? parseFloat(body.lng) : undefined,
      timestamp: body.timestamp,
    };

    return this.fotosService.subirFoto(
      file,
      embarqueId,
      guiaId,
      body.choferId,
      body.tipo,
      metadata,
    );
  }

  @Post('upload-generic')
  @ApiOperation({ summary: 'Subir foto genérica (para flota u otros)' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async uploadGeneric(
    @UploadedFile() file: any,
    @Body() body: { 
      tipo: string; 
      metadata?: string;
    },
  ) {
    if (!file) throw new Error('No file provided');
    const metadata = body.metadata ? JSON.parse(body.metadata) : {};
    return this.fotosService.subirFotoGenerica(file, body.tipo, metadata);
  }

  @Post('upload-base64/:embarqueId/:guiaId')
  @ApiOperation({ summary: 'Subir foto en base64 (para firma o captura de cámara)' })
  async uploadFotoBase64(
    @Param('embarqueId') embarqueId: string,
    @Param('guiaId') guiaId: string,
    @Body() body: { 
      choferId: string; 
      tipo: FotoTipo; 
      base64: string;
      lat?: number; 
      lng?: number;
      timestamp?: string;
    },
  ) {
    if (!body.base64) {
      throw new Error('No se proporcionó imagen en base64');
    }

    const metadata = {
      lat: body.lat,
      lng: body.lng,
      timestamp: body.timestamp,
    };

    return this.fotosService.subirFotoBase64(
      body.base64,
      embarqueId,
      guiaId,
      body.choferId,
      body.tipo,
      metadata,
    );
  }

  @Get('validar/:embarqueId')
  @ApiOperation({ summary: 'Validar que existan las fotos requeridas (entrega firmada e INE)' })
  async validarFotosRequeridas(@Param('embarqueId') embarqueId: string) {
    return this.fotosService.validarFotosRequeridas(embarqueId);
  }

  @Get(':embarqueId')
  @ApiOperation({ summary: 'Obtener todas las fotos de un embarque' })
  async getFotosByEmbarque(@Param('embarqueId') embarqueId: string) {
    console.log('Controller: getFotosByEmbarque llamado con embarqueId:', embarqueId);
    try {
      const result = await this.fotosService.getFotosByEmbarque(embarqueId);
      console.log('Controller: Resultado de getFotosByEmbarque:', result);
      return result;
    } catch (error: any) {
      console.error('Controller: Error en getFotosByEmbarque:', error);
      throw error;
    }
  }

  @Get(':embarqueId/:tipo')
  @ApiOperation({ summary: 'Obtener fotos de un embarque por tipo' })
  async getFotosByTipo(
    @Param('embarqueId') embarqueId: string,
    @Param('tipo') tipo: FotoTipo,
  ) {
    return this.fotosService.getFotosByEmbarqueAndTipo(embarqueId, tipo);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una foto' })
  async deleteFoto(@Param('id') id: string) {
    return this.fotosService.deleteFoto(id);
  }
}
