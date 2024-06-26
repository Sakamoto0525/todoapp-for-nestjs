import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTasksInputDto } from './dto/create-tasks-input.dto';
import { UpdateTasksInputDto } from './dto/update-tasks-input.dto';
import { FindManyTasksInputDto } from './dto/find-tasks-input.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiTags('tasks')
  findMany(@Query() dto: FindManyTasksInputDto) {
    return this.tasksService.findMany(dto);
  }

  @Get('all')
  @HttpCode(HttpStatus.OK)
  @ApiTags('tasks')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('like')
  @HttpCode(HttpStatus.OK)
  @ApiTags('tasks')
  testLike(@Query() dto: FindManyTasksInputDto) {
    return this.tasksService.testLike(dto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiTags('tasks')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiTags('tasks')
  create(@Body() dto: CreateTasksInputDto) {
    return this.tasksService.create(dto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiTags('tasks')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdateTasksInputDto,
  ) {
    return this.tasksService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiTags('tasks')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.tasksService.delete(id);
  }
}
