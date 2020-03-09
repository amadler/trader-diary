import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupModule } from './setup/setup.module';
import { HttpClientModule } from '@angular/common/http';
import { InstrumentModule } from './instrument/instrument.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SetupModule,
    InstrumentModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
