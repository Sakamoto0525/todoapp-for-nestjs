import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiTags('tasks')
  getHello(): string {
    return this.tasksService.getHello();
  }
}
