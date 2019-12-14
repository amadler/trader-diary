import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstrumentSchema } from './schema/instrument.schema';
import { InstrumentService } from './instrument.service';
import { InstrumentController } from './instrument.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Instrument', schema: InstrumentSchema }])],
    controllers: [InstrumentController],
    providers: [InstrumentService],

})
export class InstrumentsModule {}
