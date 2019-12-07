import { Test, TestingModule } from '@nestjs/testing';
import { PositionResultController } from './position-result.controller';

describe('PositionResult Controller', () => {
  let controller: PositionResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionResultController],
    }).compile();

    controller = module.get<PositionResultController>(PositionResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
