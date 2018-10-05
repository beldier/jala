import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import {PackagesService} from './packages.service';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageComponent } from './package/package.component';
import { AddPackageComponent } from './add-package/add-package.component'; 


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ListComponent,
    PackageComponent,
    AddPackageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [PackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
