import { Test, TestingModule } from '@nestjs/testing';
import { LaneController } from './lane.controller';
import { LaneService } from './lane.service';
// Cannot find module '@/module/prisma/prisma.service' from 'src/module/domain/lane/tasks.controller.spec.ts'
import { PrismaService } from '../../prisma/prisma.service';
import * as request from 'supertest';
import { TasksService } from '../task/tasks.service';
import { omit } from 'lodash';
import { TasksModule } from '../task/tasks.module';
import { LaneModule } from './lane.module';

describe('LaneController', () => {
  let appController: LaneController;
  let prismaService: PrismaService;
  let app: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LaneModule],
      controllers: [],
      providers: [],
    }).compile();

    appController = module.get<LaneController>(LaneController);
    prismaService = module.get<PrismaService>(PrismaService);

    // NOTE: 外部キー制約によりTRUNCATEできないため、FOREIGN_KEY_CHECKSを無効化してTRUNCATEする
    // NOTE: database drop, prisma db push をする方が楽やで
    await prismaService.$queryRaw`SET FOREIGN_KEY_CHECKS=0`;
    await prismaService.$executeRawUnsafe(`TRUNCATE TABLE Task`);
    await prismaService.$executeRawUnsafe(`TRUNCATE TABLE Lane`);
    await prismaService.$executeRawUnsafe(`TRUNCATE TABLE Board`);
    await prismaService.$queryRaw`SET FOREIGN_KEY_CHECKS=1`;

    app = module.createNestApplication();
    await app.init();
  });

  describe('root', () => {
    it('200レスポンスが返ること', async () => {
      await request(app.getHttpServer()).get('/lane').expect(200);
    });

    it('エラー時に、500レスポンスが返ること', async () => {
      prismaService.lane.findMany = jest.fn().mockImplementation(() => {
        throw new Error('error');
      });

      await request(app.getHttpServer()).get('/lane').expect(500);
    });

    it('全件取得', () => {
      const now = new Date();
      const want = [
        {
          id: 10,
          title: 'title',
          description: 'content',
          createdAt: now,
          updatedAt: now,
        },
        {
          id: 100,
          title: 'title',
          description: 'content',
          createdAt: now,
          updatedAt: now,
        },
      ];
      prismaService.lane.findMany = jest.fn().mockImplementation(() => want);

      const dto = {
        id: 10,
        title: 'title',
        description: 'content',
        createdAt: now,
        updatedAt: now,
      };
      expect(appController.findMany(dto)).toEqual(want);
    });

    it('絞り込みできること', async () => {
      // NOTE: 外部キー制約によりTRUNCATEできないため、FOREIGN_KEY_CHECKSを無効化してTRUNCATEする
      await prismaService.$queryRaw`SET FOREIGN_KEY_CHECKS=0`;
      await prismaService.$executeRawUnsafe(`TRUNCATE TABLE Task`);
      await prismaService.$executeRawUnsafe(`TRUNCATE TABLE Lane`);
      await prismaService.$executeRawUnsafe(`TRUNCATE TABLE Board`);
      await prismaService.$queryRaw`SET FOREIGN_KEY_CHECKS=1`;
      const board = {
        data: {
          title: 'タイトル',
          description: '説明1',
        },
      };
      //ボードを新規に作成
      await prismaService.board.create(board);
      await prismaService.lane.createMany({
        data: [
          { title: 'title1', description: 'description1', boardId: 1 },
          { title: 'title2', description: 'description2', boardId: 1 },
        ],
      });

      const data = [
        { title: 'title1', description: 'description1', boardId: 1 },
        { title: 'title2', description: 'description2', boardId: 1 },
      ];

      const lanes = await prismaService.lane.findMany();

      const t = lanes.map((lane) => {
        return omit(lane, ['id', 'createdAt', 'updatedAt']);
      });
      expect(t).toEqual(data);

      data.forEach(async (object) => {
        const param = new URLSearchParams();
        param.set(object.title, object.title);
        param.set(object.description, object.description);
        await request(app.getHttpServer()).get(`/lane?${param}`).expect(200);
      });
    });
  });
});
