import { Test, TestingModule } from '@nestjs/testing';
import { SourceCrudfolderService } from './source-crudfolder.service';

describe('SourceCrudfolderService', () => {
  let service: SourceCrudfolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SourceCrudfolderService],
    }).compile();

    service = module.get<SourceCrudfolderService>(SourceCrudfolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
