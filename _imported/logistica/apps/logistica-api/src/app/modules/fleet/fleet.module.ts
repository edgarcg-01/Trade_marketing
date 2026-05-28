import { Module } from '@nestjs/common';
import { FleetController } from './fleet.controller';
import { FleetService } from './fleet.service';
import { UsageLogService } from './usage-log.service';
import { MaintenanceService } from './maintenance.service';
import { AlertsService } from './alerts.service';

@Module({
  controllers: [FleetController],
  providers: [FleetService, UsageLogService, MaintenanceService, AlertsService],
  exports: [FleetService, UsageLogService, MaintenanceService, AlertsService],
})
export class FleetModule {}
