import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './boards.controller';
import { BoardService } from './boards.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('BoardsController', () => {
  let boardController: BoardController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BoardController],
      providers: [BoardService, PrismaService],
    }).compile();

    boardController = module.get<BoardController>(BoardController);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('GET /baords', () => {
    it('200レスポンスが返ること', () => {
      const dto = {
        title: 'title',
        description: 'description',
      };
      prismaService.board.create = jest.fn().mockImplementation(() => dto);

      expect(boardController.create(dto)).toEqual(dto);
    });

    it('全件取得できること', () => {
      const aprilFirst = new Date('2021-04-01T00:00:00');
      const want = [
        {
          id: 10,
          title: 'title',
          description: 'content',
          createdAt: aprilFirst,
          updatedAt: aprilFirst,
        },
        {
          id: 100,
          title: 'title',
          description: 'content',
          createdAt: aprilFirst,
          updatedAt: aprilFirst,
        },
      ];
      prismaService.board.findMany = jest.fn().mockImplementation(() => want);

      const dto = {
        title: 'title',
        description: 'description',
      };

      expect(boardController.findMany(dto)).toEqual(want);
    });
  });
});
