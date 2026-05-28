import { Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('cron')
export class CronController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('cleanup')
  async manualCleanup() {
    await this.tasksService.manualCleanup();
    return { message: 'Limpieza manual iniciada' };
  }
}
