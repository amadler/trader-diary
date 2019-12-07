import { Injectable } from '@nestjs/common';
import { InstrumentSchema } from './schema/instrument.schema';
import { instrumentsMock } from './mock/instruments.mock';
import { UpdateInstrument } from './dto/Instrument.update';
import { CreateInstrument } from './dto/Instrument.crete';

@Injectable()
export class InstrumentService {

    getInstruments(): InstrumentSchema[]{
        return instrumentsMock;
    }

    getInstrument( instrumentId: number): InstrumentSchema{
        return instrumentsMock.find( v => v.instrumentId === instrumentId);
    }

    createInstrument( query: CreateInstrument): InstrumentSchema{
        const instrumentId = instrumentsMock[instrumentsMock.length].instrumentId;
        instrumentsMock.push( new InstrumentSchema( instrumentId + 1, 'nzdcad', 'New Zeland Dollar Canadian Dollar', 0.232345 ));
        return instrumentsMock[instrumentsMock.length]
    }
    updateInstrument( query: UpdateInstrument): InstrumentSchema{
        return query as InstrumentSchema;
    }

    deleteInstrument( instrumentId: number): number{
        return instrumentId;
    }
}
