import { Module } from '@nestjs/common';
import { LaneController } from './lane.controller';
import { LaneService } from './lane.service';
import { TasksService } from '../task/tasks.service';
import { PrismaModule } from '@/module/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LaneController],
  providers: [LaneService, TasksService],
})
export class LaneModule {}
