import * as mongoose from 'mongoose';

export const SetupSchema: mongoose.Schema = new mongoose.Schema({
    setupId: String,
    instrumentId: String,
    createDate: Date,
    memo: String,
    priority: Number,
    strategyId: String,
})
