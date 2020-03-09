import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupListComponent } from './setup-list/setup-list.component';
import { SetupService } from './setup.service';
import { SetupRoutingModule } from './setup-routing.module';

@NgModule({
  declarations: [SetupListComponent],
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  providers: [
    SetupService
  ]
})
export class SetupModule { }
