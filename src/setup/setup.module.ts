import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SetupSchema } from './schema/setup.schema';
import { SetupService } from './setup.service';
import { SetupController } from './setup.controller';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Setup', schema: SetupSchema }])],
    controllers: [SetupController],
    providers: [SetupService],

})
export class SetupModule {}
