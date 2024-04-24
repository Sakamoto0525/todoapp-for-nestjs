import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './boards.controller';
import { BoardService } from './boards.service';

describe('BoardsController', () => {
  let appController: BoardController;

  beforeEach(async () => {
    const boards: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [BoardService],
    }).compile();

    appController = boards.get<BoardController>(BoardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const dto = {
        title: 'title',
        content: 'content',
      };

      expect(appController.findMany(dto)).toBe('Hello World!');
    });
  });
});
