import { Injectable } from '@nestjs/common';
import { Lane } from '@prismaClient';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLaneInputDto } from './dto/create-lane-input.dto';
import { UpdateLaneInputDto } from './dto/update-lane-input.dto';
import { FindManyLaneInputDto } from './dto/find-lane-input.dto';

@Injectable()
export class LaneService {
  constructor(private prismaService: PrismaService) {}

  findAll(): Promise<Lane[]> {
    const lane = this.prismaService.lane.findMany();
    return lane;
  }

  testLike(dto: FindManyLaneInputDto): Promise<Lane[]> {
    const where = {
      title: {
        startsWith: dto.title,
      },
      description: {
        startsWith: dto.description,
      },
    };

    const lane = this.prismaService.lane.findMany({ where });
    return lane;
  }

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
