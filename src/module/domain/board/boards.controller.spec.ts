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

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const aprilFirst = new Date('2021-04-01T00:00:00');
      const want = {
        id: 10,
        title: 'title',
        description: 'content',
        createdAt: aprilFirst,
        updatedAt: aprilFirst,
      };
      prismaService.board.findMany = jest.fn().mockImplementation(() => want);

      const dto = {
        title: 'title',
        description: 'description',
      };

      const re = boardController.findMany(dto);

      expect(re['id']).toBe(want.id);
      expect(re['title']).toBe(want.title);
      expect(re['description']).toBe(want.description);
      expect(re['createdAt']).toBe(want.createdAt);
      expect(re['updatedAt']).toBe(want.updatedAt);
      // then((result: Board[]) => {
      //   expect(result).toEqual({
      //     id: 10,
      //     title: 'title',
      //     description: 'content',
      //     createdAt: aprilFirst,
      //     updatedAt: aprilFirst,
      //   });
      // });
    });
  });
});
