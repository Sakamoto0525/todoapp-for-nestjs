import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('TaskssController', () => {
  let appController: TasksController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TasksController],
      providers: [TasksService, PrismaService],
      exports: [PrismaService],
    }).compile();

    appController = module.get<TasksController>(TasksController);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('root', () => {
    it('200レスポンス')
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
  });
});
