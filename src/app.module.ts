import { Module } from '@nestjs/common';
import { BoardModule } from './module/domain/board/boards.module';
import { TasksModule } from './module/domain/task/tasks.module';
import { LaneModule } from './module/domain/lane/lane.module';

const apiModules = [BoardModule, TasksModule, LaneModule];

@Module({
  imports: [...apiModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
