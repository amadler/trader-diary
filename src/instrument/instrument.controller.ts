import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstrumentCreateDto } from './dto/Instrument.crete';
import { InstrumentUpdateDto } from './dto/Instrument.update';
import { InstrumentService } from './instrument.service';
import { InstrumentInterface } from './interfaces/instrument.interface';

@Controller('instrument')
export class InstrumentController {
    constructor( private instrumentService: InstrumentService) {}
    @Get()
    getInstruments(): Promise<InstrumentInterface[]> {
        return this.instrumentService.getInstruments();
    }
    @Get(':id')
    getInstrument(@Param() params): Promise<InstrumentInterface> {
        return this.instrumentService.getInstrument( params.id );
    }
    @Post()
    createInstrument( @Body() createInstrumentDto: InstrumentCreateDto): Promise<InstrumentInterface> {
        return this.instrumentService.createInstrument(createInstrumentDto);
    }

    @Put(':id')
    updateInstrument( @Param() params, @Body() updateInstrument: InstrumentUpdateDto): Promise<InstrumentInterface> {
        return this.instrumentService.updateInstrument(params.id, updateInstrument);
    }

    @Delete(':id')
    deleteInstrument( @Param() params ): Promise<InstrumentInterface> {
        return this.instrumentService.deleteInstrument(params.id);
    }
}
