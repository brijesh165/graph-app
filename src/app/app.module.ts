import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { ApexGraphComponent } from './graph/apex-graph/apex-graph.component';
import { ApexGraphMultipleComponent } from './graph/apex-graph-multiple/apex-graph-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    ApexGraphComponent,
    ApexGraphMultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
