import { Injector, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export abstract class Crud<I,S> implements OnInit{
  public listSelector: Observable<I[]>;
  public service: S;
  constructor(
    injector: Injector
  ) {

  }
  getList(): Observable<I[]>{
    return this.service['getList']();
  }
  getOne(){}

  create() {

  }
  abstract delete(id: string): void;

  ngOnInit(){
    this.listSelector = this.getList();
  }
}
