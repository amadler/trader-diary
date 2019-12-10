import { Injectable } from '@nestjs/common';
import { UpdateInstrument } from './dto/Instrument.update';
import { CreateInstrument } from './dto/Instrument.crete';
import { InstrumentInterface } from './interfaces/instrument.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class InstrumentService {
    constructor(@InjectModel('Instrument') private readonly instrumentModel: Model<InstrumentInterface>) {}

    async getInstruments(): Promise<InstrumentInterface[]> {
        return await this.instrumentModel.find();
    }

    async getInstrument( instrumentId: string): Promise<InstrumentInterface> {
        return await this.instrumentModel.findOne({ _id: instrumentId});
    }

    async createInstrument( query: CreateInstrument ): Promise<InstrumentInterface> {
        const newInstrument = new this.instrumentModel(query);
        console.log(newInstrument)
        return await this.instrumentModel.save(newInstrument);
    }
    async updateInstrument(instrumentId: string, query: UpdateInstrument): Promise<InstrumentInterface> {
        const newInstrument = new this.instrumentModel(query);
        return await this.instrumentModel.findByIdAndUpdate(instrumentId, query, { new: true });
    }

    async deleteInstrument( instrumentId: string): Promise<InstrumentInterface> {
        return await this.instrumentModel.findByIdAndRemove(instrumentId);
    }
}
