import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
// Cannot find module '@/module/prisma/prisma.service' from 'src/module/domain/task/tasks.controller.spec.ts'
import { PrismaService } from '../../prisma/prisma.service';
import * as request from 'supertest';
import { omit } from 'lodash';

describe('TaskssController', () => {
  let appController: TasksController;
  let prismaService: PrismaService;
  let app: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TasksController],
      providers: [TasksService, PrismaService],
      exports: [PrismaService],
    }).compile();

    appController = module.get<TasksController>(TasksController);
    prismaService = module.get<PrismaService>(PrismaService);

    // NOTE: 外部キー制約によりTRUNCATEできないため、FOREIGN_KEY_CHECKSを無効化してTRUNCATEする
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
      await request(app.getHttpServer()).get('/tasks').expect(200);
    });

    it('エラー時に、500レスポンスが返ること', async () => {
      prismaService.task.findMany = jest.fn().mockImplementation(() => {
        throw new Error('error');
      });

      await request(app.getHttpServer()).get('/tasks').expect(500);
    });

    it('1件取得', () => {
      const now = new Date();
      const want = {
        id: 2,
        title: 'title2',
        description: '2',
        createdAt: now,
        updatedAt: now,
      };
      prismaService.task.findMany = jest.fn().mockImplementation(() => want);

      const dto = {
        title: 'title2',
        description: '2',
      };

      const re = appController.findMany(dto);
      expect(re).toEqual(want);
    });

    it('', async () => {
      await prismaService.board.createMany({
        data: [
          { title: 'title1', description: 'description1' },
          { title: 'title2', description: 'description2' },
        ],
      });

      await prismaService.lane.createMany({
        data: [
          { title: 'title1', description: 'description1', boardId: 1 },
          { title: 'title2', description: 'description2', boardId: 2 },
        ],
      });

      const data = [
        { title: 'title1', description: 'description1', laneId: 1 },
        { title: 'title2', description: 'description2', laneId: 2 },
      ];
      await prismaService.task.createMany({
        data: data,
      });

      const tasks = await prismaService.task.findMany();

      const t = tasks.map((task) => {
        return omit(task, ['id', 'createdAt', 'updatedAt']);
      });
      expect(t).toEqual(data);

      data.forEach(async (object) => {
        const param = new URLSearchParams();
        param.set(object.title, object.title);
        param.set(object.description, object.description);
        await request(app.getHttpServer()).get(`/tasks?${param}`).expect(200);
      });
    });
  });
});
