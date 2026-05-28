import { Injectable, Logger, Inject } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import type { Knex } from 'knex';
import { KNEX_CONNECTION } from '../../shared/database/database.module';
import { CloudinaryService } from '../../shared/cloudinary/cloudinary.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex: Knex,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  // Método manual para ejecutar limpieza
  async manualCleanup() {
    this.logger.log('Ejecución manual de limpieza de fotos expiradas iniciada.');
    await this.cleanExpiredPhotos();
  }

  // Se ejecuta todos los días a las 3:00 AM
  @Cron('0 3 * * *')
  async cleanExpiredPhotos() {
    this.logger.log('Iniciando limpieza de fotos expiradas de Cloudinary...');

    const now = new Date();
    
    // Buscar fotos en la base de datos que tengan fecha de expiración
    // Usamos la fecha de subida + 30 días como criterio
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);

    try {
      // 1. Buscar fotos de entrega expiradas
      const expiredDeliveryPhotos = await this.knex('logistica_fotos_entrega')
        .where('fecha_subida', '<', cutoffDate)
        .select('id', 'public_id', 'url');

      this.logger.log(`Encontradas ${expiredDeliveryPhotos.length} fotos de entrega expiradas`);

      // 2. Eliminar de Cloudinary
      for (const photo of expiredDeliveryPhotos) {
        if (photo.public_id) {
          try {
            await this.cloudinaryService.deleteImage(photo.public_id);
            this.logger.log(`Foto eliminada de Cloudinary: ${photo.public_id}`);
          } catch (error) {
            this.logger.error(`Error eliminando foto de Cloudinary ${photo.public_id}:`, error);
          }
        }
      }

      // 3. Eliminar registros de la base de datos
      if (expiredDeliveryPhotos.length > 0) {
        const ids = expiredDeliveryPhotos.map((p) => p.id);
        await this.knex('logistica_fotos_entrega').whereIn('id', ids).delete();
        this.logger.log(`Registros eliminados de la base de datos: ${ids.length}`);
      }

      // 4. Usar API de Cloudinary para buscar fotos con tags de expiración
      // Esto es más confiable que depender solo de la base de datos
      try {
        const cloudinary = (this.cloudinaryService as any)['cloudinary'];
        if (cloudinary) {
          // Buscar recursos con tag expires
          const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'logistics/entregas',
            tags: true,
            max_results: 500
          });

          if (result && result.resources) {
            const now = new Date();
            let deletedCount = 0;

            for (const resource of result.resources) {
              const expiresTag = resource.tags?.find((tag: string) => tag.startsWith('expires:'));
              
              if (expiresTag) {
                const expirationDate = new Date(expiresTag.replace('expires:', ''));
                
                if (expirationDate < now) {
                  try {
                    await this.cloudinaryService.deleteImage(resource.public_id);
                    this.logger.log(`Foto eliminada por tag de expiración: ${resource.public_id}`);
                    deletedCount++;
                  } catch (error) {
                    this.logger.error(`Error eliminando foto por tag ${resource.public_id}:`, error);
                  }
                }
              }
            }

            if (deletedCount > 0) {
              this.logger.log(`Total de fotos eliminadas por tag de expiración: ${deletedCount}`);
            }
          }
        }
      } catch (error) {
        this.logger.error('Error buscando fotos por tags de expiración en Cloudinary:', error);
      }

      this.logger.log('Limpieza de fotos expiradas finalizada.');
    } catch (error) {
      this.logger.error('Error en limpieza de fotos expiradas:', error);
    }
  }
}
