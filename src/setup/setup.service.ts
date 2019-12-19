import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { SetupInterface } from './interfaces/setup.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SetupCreateDto } from './dto/setup-create';
import { SetupUpdateDto } from './dto/setup.update';


interface SetupInterfaceModel extends SetupInterface, Document {}

@Injectable()
export class SetupService {
    constructor(@InjectModel('Setup') readonly setupModel: Model<SetupInterfaceModel>){}
    async getSetups(): Promise<SetupInterface[]> {
        return await this.setupModel.find();
    }

    async getSetup( SetupId: string): Promise<SetupInterface> {
        return await this.setupModel.findOne({ _id: SetupId});
    }

    async createSetup( query: SetupCreateDto ): Promise<SetupInterface> {
        const newSetup = new this.setupModel(query);
        return await this.setupModel.create(newSetup);
    }
    async updateSetup(SetupId: string, query: SetupUpdateDto): Promise<SetupInterface> {
        const newSetup = new this.setupModel(query);
        return await this.setupModel.findByIdAndUpdate(SetupId, query, { new: true });
    }

    async deleteSetup( SetupId: string): Promise<SetupInterface> {
        return await this.setupModel.findByIdAndRemove(SetupId);
    }
}
