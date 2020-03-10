import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { InstrumentsService } from '../instruments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent implements AfterViewInit {
  public instruments: InstrumentInterface[];
  public service: InstrumentsService;
  constructor(
     injector: Injector

  ) {
    this.service = injector.get(InstrumentsService);

  }
  getList(){
    this.service.getList().subscribe((val) => {
      this.instruments = val;
    });
  }
  create() {}
  delete(id: string){
    this.service.delete(id).subscribe( (val) => {
       // TODO: consider remove one item instead refreashing whole list
       this.instruments.splice(this.instruments.indexOf(val), 1);
    } );
  }
  ngAfterViewInit(){
    this.getList();
  }
}
