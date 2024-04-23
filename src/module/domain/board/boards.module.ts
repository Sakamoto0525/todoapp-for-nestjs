import { Module } from '@nestjs/common';
import { BoardController } from './boards.controller';
import { BoardService } from './boards.service';
import { PrismaModule } from 'src/module/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
