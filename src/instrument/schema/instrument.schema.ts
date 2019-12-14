import * as mongoose from 'mongoose';

export const InstrumentSchema: mongoose.Schema = new mongoose.Schema({
    instrumentId: String,
    ticker: String,
    Name: String,
    price: String,
})
