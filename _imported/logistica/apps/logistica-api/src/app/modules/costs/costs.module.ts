import { Module } from '@nestjs/common';
import { CostsService } from './costs.service';
import { CostsController } from './costs.controller';
import { DatabaseModule } from '../../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CostsController],
  providers: [CostsService],
  exports: [CostsService]
})
export class CostsModule {}
