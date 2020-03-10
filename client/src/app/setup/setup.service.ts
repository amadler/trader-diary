import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetupInterface } from './interfaces/setup.interface';
import {CrudService} from '../core/services/crud.service';
const _baseString = 'http://localhost:3000/setup';

@Injectable({
  providedIn: 'root'
})
export class SetupService extends CrudService<SetupInterface, string>{
  protected BASE_API: string;
  constructor(
    protected http: HttpClient
  ) {
    super(http, _baseString);
    this.BASE_API = _baseString;
  }
}
