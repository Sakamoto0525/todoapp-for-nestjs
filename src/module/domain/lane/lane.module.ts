import { Module } from '@nestjs/common';
import { LaneController } from './lane.controller';
import { LaneService } from './lane.service';
import { PrismaModule } from '@/module/prisma/prisma.module';
import { TasksModule } from '../task/tasks.module';

@Module({
  imports: [PrismaModule, TasksModule],
  controllers: [LaneController],
  providers: [LaneService],
})
export class LaneModule {}
