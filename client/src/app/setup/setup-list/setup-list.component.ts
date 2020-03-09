import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { SetupInterface } from '../interfaces/setup.interface';
import { SetupService } from '../setup.service';
import { Crud } from '../../core/class/Crud';

@Component({
  selector: 'app-setup-list',
  templateUrl: './setup-list.component.html',
  styleUrls: ['./setup-list.component.scss']
})
export class SetupListComponent  extends Crud<SetupInterface, SetupService> implements AfterViewInit {
  public setups: SetupInterface[];
  public service: SetupService;
  constructor(
    injector: Injector
  ) {
    super( injector );
    this.service = injector.get(SetupService);
  }
  delete(id: string){}
  ngAfterViewInit(){
    this.listSelector.subscribe((val) => {
      this.setups = val;
    });
  }

}
