import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';

const routes: Routes = [
  {
    path: 'instruments-list',
    component: InstrumentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentRoutingModule { }
