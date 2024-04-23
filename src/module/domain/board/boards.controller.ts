import { Controller, Get } from '@nestjs/common';
import { BoardService } from './boards.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  @ApiTags('boards')
  getHello() {
    return this.boardService.findMany();
  }
}
