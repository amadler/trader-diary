import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstrumentInterface } from './interfaces/instrument.interface';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {
  constructor(
    private http: HttpClient
  ) { }
  public getList(): Observable<InstrumentInterface[]> {
    return  this.http.get<InstrumentInterface[]>('http://localhost:3000/instrument');
  }

  public delete( id: string): Observable<InstrumentInterface> {
    return  this.http.delete<InstrumentInterface>(`http://localhost:3000/instrument/${id}`);
  }
}
