import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './boards.controller';
import { BoardService } from './boards.service';
import { PrismaService } from '../../prisma/prisma.service';
import * as request from 'supertest';

describe('BoardsController', () => {
  let boardController: BoardController;
  let prismaService: PrismaService;
  let app: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [BoardController],
      providers: [BoardService, PrismaService],
    }).compile();

    boardController = module.get<BoardController>(BoardController);
    prismaService = module.get<PrismaService>(PrismaService);

    // TODO: テストデータをテスト毎に削除する方法を考える
    // 考えた案
    // 1. テスト毎に該当するテーブルのレコードを全削除 → テーブル増えるたびに外部キー制約で削除すべき対象も増えるのでだるい
    // 2. テスト毎にトランザクションを張って、テスト終了時にロールバックする → トランザクションの実装が必要
    await prismaService.task.deleteMany({});
    await prismaService.lane.deleteMany({});
    await prismaService.board.deleteMany({});

    app = module.createNestApplication();
    await app.init();
  });

  describe('GET /baords', () => {
    it('200レスポンスが返ること', async () => {
      await request(app.getHttpServer()).get('/boards').expect(200);
    });

    it('エラー時に、500レスポンスが返ること', async () => {
      prismaService.board.findMany = jest.fn().mockImplementation(() => {
        throw new Error('error');
      });

      await request(app.getHttpServer()).get('/boards').expect(500);
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

    it('絞り込みできること', async () => {
      const want = { title: 'title1', description: 'description1' };

      prismaService.board.deleteMany({});
      await prismaService.board.createMany({
        data: [
          want,
          {
            title: 'title2',
            description: 'description2',
          },
        ],
      });

      const res = await request(app.getHttpServer())
        .get('/boards')
        .query({ title: 'title1' })
        .expect(200);

      expect(res.body[0].title).toBe(want.title);
      expect(res.body[0].description).toBe(want.description);
      expect(res.body.length).toBe(1);
    });
  });
});
