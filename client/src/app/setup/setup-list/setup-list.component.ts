import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { SetupInterface } from '../interfaces/setup.interface';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-setup-list',
  templateUrl: './setup-list.component.html',
  styleUrls: ['./setup-list.component.scss']
})
export class SetupListComponent implements AfterViewInit {
  public setups: SetupInterface[];
  public service: SetupService;
  constructor(
    injector: Injector
  ) {
    this.service = injector.get(SetupService);
  }

  getList(){
    this.service.getList().subscribe((val) => {
      this.setups = val;
    });
  }
  delete(id: string){}
  ngAfterViewInit(){
    this.getList();
  }

}
