import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from '../shared/database/database.module';
import { StaffModule } from './modules/staff/staff.module';
import { FleetModule } from './modules/fleet/fleet.module';
import { ConfigModule as LogisticaConfigModule } from './modules/config/config.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
import { GuidesModule } from './modules/guides/guides.module';
import { ReportsModule } from './modules/reports/reports.module';
import { CostsModule } from './modules/costs/costs.module';
import { ChecklistsModule } from './modules/checklists/checklists.module';
import { FotosModule } from './modules/fotos/fotos.module';
import { AuthModule } from './auth/auth.module';
import { CronModule } from '../modules/cron/cron.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      exclude: ['/api/{*path}'],
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    StaffModule,
    FleetModule,
    LogisticaConfigModule,
    ShipmentsModule,
    GuidesModule,
    ReportsModule,
    CostsModule,
    ChecklistsModule,
    FotosModule,
    AuthModule,
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
