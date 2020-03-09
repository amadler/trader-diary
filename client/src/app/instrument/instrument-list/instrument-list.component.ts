import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { InstrumentsService } from '../instruments.service';
import { Crud } from '../../core/class/Crud';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent extends Crud<InstrumentInterface, InstrumentsService> implements AfterViewInit {
  public instruments: InstrumentInterface[];
  public service: InstrumentsService;
  constructor(
     injector: Injector

  ) {
    super( injector );
    this.service = injector.get(InstrumentsService);

  }

  create() {}
  delete(id: string){
    this.service.delete(id).subscribe( (val) => {
       // TODO: consider remove one item instead refreashing whole list
       this.instruments.splice(this.instruments.indexOf(val), 1);
    } );
  }
  ngAfterViewInit(){
    this.listSelector.subscribe((val) => {
      this.instruments = val;
    });
  }
}
