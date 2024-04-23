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
import { BoardService } from './boards.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBoardsInputDto } from './dto/create-boards-input.dto';
import { UpdateBoardsInputDto } from './dto/update-boards-input.dto';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  @ApiTags('boards')
  findMany() {
    return this.boardService.findMany();
  }

  @Get(':id')
  @ApiTags('boards')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.boardService.findOne(id);
  }

  @Post()
  @ApiTags('boards')
  create(@Body() dto: CreateBoardsInputDto) {
    return this.boardService.create(dto);
  }

  @Put(':id')
  @ApiTags('boards')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() dto: UpdateBoardsInputDto,
  ) {
    return this.boardService.update(id, dto);
  }

  @Delete(':id')
  @ApiTags('boards')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.boardService.delete(id);
  }
}
