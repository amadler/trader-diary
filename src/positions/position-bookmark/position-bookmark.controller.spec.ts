import { Test, TestingModule } from '@nestjs/testing';
import { PositionBookmarkController } from './position-bookmark.controller';

describe('PositionBookmark Controller', () => {
  let controller: PositionBookmarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionBookmarkController],
    }).compile();

    controller = module.get<PositionBookmarkController>(PositionBookmarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
