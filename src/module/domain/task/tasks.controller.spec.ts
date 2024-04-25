import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../../prisma/prisma.service';
import * as request from 'supertest';

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

    await prismaService.task.deleteMany({});
    await prismaService.lane.deleteMany({});
    await prismaService.board.deleteMany({});

    app = module.createNestApplication();
    await app.init();
  });

  describe('root', () => {
    it('200レスポンスが返ること', async () => {
      await request(app.getHttpServer()).get('/tasks').expect(200);
    });

    it('エラー時に、500レスポンスが返ること', async () => {
      prismaService.board.findMany = jest.fn().mockImplementation(() => {
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
      await prismaService.task.deleteMany({});
      const data = [
        { title: 'title1', description: 'description1', laneId: 1 },
      ];
      await prismaService.task.createMany({
        data: data,
      });

      const tasks = await prismaService.task.findMany();
      expect(tasks).toEqual(data);
      console.info(tasks);
    });
  });
});
