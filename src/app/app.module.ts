import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './screens/ag-grid/ag-grid.component';
import { HomeComponent } from './screens/home/home.component';

@NgModule({
  declarations: [AppComponent, AgGridComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule.withComponents([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
