import { Injectable } from '@nestjs/common';
import { Board } from '@prisma/client';
import { PrismaService } from 'src/module/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private prismaService: PrismaService) {}

  findMany(): Promise<Board[]> {
    return this.prismaService.board.findMany();
  }
}
