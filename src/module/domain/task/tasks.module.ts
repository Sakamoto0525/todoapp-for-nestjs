import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaModule } from '@/module/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TasksController],
  providers: [TasksService],
  // NOTE: exportsしていないと使う側で無駄にDIシナイトイケナイヨ
  exports: [TasksService],
})
export class TasksModule {}
