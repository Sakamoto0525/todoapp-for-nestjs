import { Module } from '@nestjs/common';
import { LaneController } from './lane.controller';
import { LaneService } from './lane.service';
import { PrismaModule } from 'src/module/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LaneController],
  providers: [LaneService],
})
export class LaneModule {}
