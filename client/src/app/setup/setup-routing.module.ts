import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupListComponent } from './setup-list/setup-list.component';

const routes: Routes = [
  {
    path: 'setups-list',
    component: SetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
