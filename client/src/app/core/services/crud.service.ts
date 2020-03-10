import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {CrudOperations} from '../interfaces/crud-operations.interface';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {
  protected constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(this._base, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

  getOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id);
  }

  getList(): Observable<T[]> {
    return this._http.get<T[]>(this._base)
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
  }

}
