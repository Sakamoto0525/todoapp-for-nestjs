import { Injectable } from '@nestjs/common';
import { Lane } from '@prismaClient';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLaneInputDto } from './dto/create-lane-input.dto';
import { UpdateLaneInputDto } from './dto/update-lane-input.dto';
import { FindManyLaneInputDto } from './dto/find-lane-input.dto';

@Injectable()
export class LaneService {
  constructor(private prismaService: PrismaService) {}

  findMany(dto: FindManyLaneInputDto): Promise<Lane[]> {
    const where = {
      title: dto.title,
      description: dto.description,
    };
    const lane = this.prismaService.lane.findMany({ where });
    return lane;
  }

  findOne(id: number): Promise<Lane> {
    return this.prismaService.lane.findUnique({
      where: { id },
      include: {
        tasks: true,
      },
    });
  }

  find(id: number, boardId: number): Promise<Lane> {
    return this.prismaService.lane.findUnique({
      where: { id, boardId },
    });
  }

  create(dto: CreateLaneInputDto): Promise<Lane> {
    return this.prismaService.lane.create({ data: dto });
  }

  update(id: number, dto: UpdateLaneInputDto): Promise<Lane> {
    return this.prismaService.lane.update({ where: { id }, data: dto });
  }

  delete(id: number): Promise<Lane> {
    return this.prismaService.lane.delete({ where: { id } });
  }
}
