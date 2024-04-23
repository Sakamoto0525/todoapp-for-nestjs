import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/module/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}
  async findMany(): Promise<Task[]> {
    const tasks = this.prismaService.task.findMany();
    return tasks;
  }
}
