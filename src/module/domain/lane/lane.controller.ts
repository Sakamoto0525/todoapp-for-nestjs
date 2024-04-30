import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { LaneService } from './lane.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateLaneInputDto } from './dto/create-lane-input.dto';
import { UpdateLaneInputDto } from './dto/update-lane-input.dto';
import { FindManyLaneInputDto } from './dto/find-lane-input.dto';
import { TasksService } from '../task/tasks.service';

@Controller('lane')
export class LaneController {
  constructor(
    private readonly laneService: LaneService,
    private readonly tasksService: TasksService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiTags('lane')
  findMany(@Query() dto: FindManyLaneInputDto) {
    return this.laneService.findMany(dto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiTags('lane')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.laneService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiTags('lane')
  create(@Body() dto: CreateLaneInputDto) {
    return this.laneService.create(dto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiTags('lane')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdateLaneInputDto,
  ) {
    return this.laneService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiTags('lane')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    try {
      await this.tasksService.deletes(id);
    } catch (error: any) {
      console.error(error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'レーンIDに紐づくタスクの削除に失敗しました。',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    let res;
    try {
      res = await this.laneService.delete(id);
    } catch (error: any) {
      console.error(error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'レーンの削除に失敗しました。',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return res;
  }
}
