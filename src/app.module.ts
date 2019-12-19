import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { mongoDbUri } from './config/keys';
import { InstrumentsModule } from './instrument/instruments.module';
import { SourceCrudfolderService } from './source-crudfolder/source-crudfolder.service';
import { SetupModule } from './setup/setup.module';

@Module({
  imports: [MongooseModule.forRoot(mongoDbUri), InstrumentsModule, SetupModule],
  controllers: [AppController],
  providers: [AppService, SourceCrudfolderService],
})
export class AppModule {}
