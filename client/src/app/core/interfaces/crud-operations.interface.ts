import {Observable} from 'rxjs';

export interface CrudOperations<T, ID> {
  save(t: T): Observable<T>;
  update(id: ID, t: T): Observable<T>;
  getOne(id: ID): Observable<T>;
  getList(): Observable<T[]>;
  delete(id: ID): Observable<any>;
}
