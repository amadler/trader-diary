import { Test, TestingModule } from '@nestjs/testing';
import { SourceCrudfolderController } from './source-crudfolder.controller';

describe('SourceCrudfolder Controller', () => {
  let controller: SourceCrudfolderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SourceCrudfolderController],
    }).compile();

    controller = module.get<SourceCrudfolderController>(SourceCrudfolderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
