import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { CreateTasksInputDto } from './dto/create-tasks-input.dto';
import { UpdateTasksInputDto } from './dto/update-tasks-input.dto';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  findMany(): Promise<Task[]> {
    const tasks = this.prismaService.task.findMany();
    return tasks;
  }

  findOne(id: number): Promise<Task> {
    return this.prismaService.task.findUnique({
      where: { id },
      include: { board: true },
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
}
