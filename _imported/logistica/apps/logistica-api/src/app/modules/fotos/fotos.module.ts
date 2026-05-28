import { Module } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { FotosController } from './fotos.controller';
import { CloudinaryModule } from '../../../shared/cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  controllers: [FotosController],
  providers: [FotosService],
  exports: [FotosService],
})
export class FotosModule {}
