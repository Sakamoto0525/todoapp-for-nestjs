import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTasksInputDto } from './dto/create-tasks-input.dto';
import { UpdateTasksInputDto } from './dto/update-tasks-input.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiTags('tasks')
  findMany() {
    return this.tasksService.findMany();
  }

  @Get(':id')
  @ApiTags('tasks')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiTags('tasks')
  create(@Body() dto: CreateTasksInputDto) {
    return this.tasksService.create(dto);
  }

  @Put(':id')
  @ApiTags('tasks')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdateTasksInputDto,
  ) {
    return this.tasksService.update(id, dto);
  }

  @Delete(':id')
  @ApiTags('tasks')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.tasksService.delete(id);
  }
}
