import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SetupInterface } from './interfaces/setup.interface';
@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(
    private http: HttpClient
  ) { }
  public getList(): Observable<SetupInterface[]>{
    return  this.http.get<SetupInterface[]>('http://localhost:3000/setup');
  }

}
