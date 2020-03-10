import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstrumentInterface } from './interfaces/instrument.interface';
import {CrudService} from '../core/services/crud.service';
const _baseString = 'http://localhost:3000/instrument';

@Injectable({
  providedIn: 'root'
})

export class InstrumentsService extends CrudService<InstrumentInterface, string>{
  protected BASE_API: string;
  constructor(
    protected http: HttpClient
  ) {
    super(http, _baseString);
    this.BASE_API = _baseString;
  }
}
