import { Module } from '@nestjs/common';
import { BoardModule } from './module/domain/board/boards.module';
import { TasksModule } from './module/domain/task/tasks.module';

const apiModules = [BoardModule, TasksModule];

@Module({
  imports: [...apiModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
