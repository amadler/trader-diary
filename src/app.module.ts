import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstrumentController } from './instrument/instrument.controller';

import { PositionsModule } from './positions/positions.module';
import { InstrumentService } from './instrument/instrument.service';

@Module({
  imports: [PositionsModule],
  controllers: [AppController, InstrumentController],
  providers: [AppService, InstrumentService],
})
export class AppModule {}
