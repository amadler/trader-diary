import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

import { SetupService } from './Setup.service';
import { SetupInterface } from './interfaces/Setup.interface';
import { SetupCreateDto } from './dto/setup-create';
import { SetupUpdateDto } from './dto/setup.update';

@Controller('Setup')
export class SetupController {
    constructor( private SetupService: SetupService) {}
    @Get()
    getSetups(): Promise<SetupInterface[]> {
        return this.SetupService.getSetups();
    }
    @Get(':id')
    getSetup(@Param() params): Promise<SetupInterface> {
        return this.SetupService.getSetup( params.id );
    }
    @Post()
    createSetup( @Body() createSetupDto: SetupCreateDto): Promise<SetupInterface> {
        return this.SetupService.createSetup(createSetupDto);
    }

    @Put(':id')
    updateSetup( @Param() params, @Body() updateSetup: SetupUpdateDto): Promise<SetupInterface> {
        return this.SetupService.updateSetup(params.id, updateSetup);
    }

    @Delete(':id')
    deleteSetup( @Param() params ): Promise<SetupInterface> {
        return this.SetupService.deleteSetup(params.id);
    }
}
