import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstrumentSchema } from './schema/instrument.schema';
import { CreateInstrument } from './dto/Instrument.crete';
import { UpdateInstrument } from './dto/Instrument.update';
import { InstrumentService } from './instrument.service';


@Controller('instrument')
export class InstrumentController {
    constructor( private instrumentService: InstrumentService) {}
    @Get()
    getInstruments(): InstrumentSchema[]{
        return this.instrumentService.getInstruments();
    }
    @Get(':id')
    getInstrument(@Param() params): InstrumentSchema{
        return this.instrumentService.getInstrument( params.id );
    }
    @Post()
    createInstrument( @Body() createInstrumentDto: CreateInstrument): InstrumentSchema{
        return this.instrumentService.createInstrument(createInstrumentDto);
    }

    @Put()
    updateInstrument( @Body() updateInstrument: UpdateInstrument): InstrumentSchema{
        return this.instrumentService.updateInstrument(updateInstrument);
    }

    @Delete(':id')
    deleteInstrument( @Param() params ): number{
        return this.instrumentService.deleteInstrument(params.id);
    }
}
