import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentController } from './instrument.controller';

describe('Instrument Controller', () => {
  let controller: InstrumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstrumentController],
    }).compile();

    controller = module.get<InstrumentController>(InstrumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
