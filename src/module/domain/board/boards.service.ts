import { Injectable } from '@nestjs/common';
import { Board } from '@prismaClient';
import { PrismaService } from '@/module/prisma/prisma.service';
import { CreateBoardsInputDto } from './dto/create-boards-input.dto';
import { UpdateBoardsInputDto } from './dto/update-boards-input.dto';
import { FindManyBoardsInputDto } from './dto/find-boards-input.dto';

@Injectable()
export class BoardService {
  constructor(private prismaService: PrismaService) {}

  findMany(dto: FindManyBoardsInputDto): Promise<Board[]> {
    const where = {
      title: { contains: dto.title },
      description: { contains: dto.description },
    };
    return this.prismaService.board.findMany({ where });
  }

  findOne(id: number): Promise<Board> {
    return this.prismaService.board.findUnique({
      where: { id },
      include: {
        lanes: {
          include: {
            tasks: true,
          },
        },
      },
    });
  }

  create(dto: CreateBoardsInputDto): Promise<Board> {
    return this.prismaService.board.create({ data: dto });
  }

  update(id: number, dto: UpdateBoardsInputDto): Promise<Board> {
    return this.prismaService.board.update({ where: { id }, data: dto });
  }

  delete(id: number): Promise<Board> {
    return this.prismaService.board.delete({ where: { id } });
  }
}
