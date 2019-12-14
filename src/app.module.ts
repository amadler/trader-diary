import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstrumentController } from './instrument/instrument.controller';

import { PositionsModule } from './positions/positions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoDbUri } from './config/keys';
import { InstrumentsModule } from './instrument/instruments.module';

@Module({
  imports: [PositionsModule, MongooseModule.forRoot(mongoDbUri), InstrumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
