import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import {PackagesService} from './packages.service';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
