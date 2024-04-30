import { Injectable } from '@nestjs/common';
import { Task } from '@prismaClient';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTasksInputDto } from './dto/create-tasks-input.dto';
import { UpdateTasksInputDto } from './dto/update-tasks-input.dto';
import { FindManyTasksInputDto } from './dto/find-tasks-input.dto';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  findAll(): Promise<Task[]> {
    const tasks = this.prismaService.task.findMany();
    return tasks;
  }

  testLike(dto: FindManyTasksInputDto): Promise<Task[]> {
    const where = {
      title: {
        startsWith: dto.title,
      },
      description: {
        startsWith: dto.description,
      },
    };

    const tasks = this.prismaService.task.findMany({ where });
    return tasks;
  }

  findMany(dto: FindManyTasksInputDto): Promise<Task[]> {
    const where = {
      title: dto.title,
      description: dto.description,
    };
    const tasks = this.prismaService.task.findMany({ where });
    return tasks;
  }

  findOne(id: number): Promise<Task> {
    return this.prismaService.task.findUnique({
      where: { id },
    });
  }

  create(dto: CreateTasksInputDto): Promise<Task> {
    return this.prismaService.task.create({ data: dto });
  }

  update(id: number, dto: UpdateTasksInputDto): Promise<Task> {
    return this.prismaService.task.update({ where: { id }, data: dto });
  }

  delete(id: number): Promise<Task> {
    return this.prismaService.task.delete({ where: { id } });
  }

  deletes(laneId: number): any {
    return this.prismaService.task.deleteMany({ where: { laneId } });
  }
}
