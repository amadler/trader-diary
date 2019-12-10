import * as mongoose from 'mongoose';

export const InstrumentSchema = new mongoose.Schema({
        instrumentId: String,
        ticker: String,
        Name: String,
        price: String,
    })
