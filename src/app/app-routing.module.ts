import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApexGraphMultipleComponent } from './graph/apex-graph-multiple/apex-graph-multiple.component';

import { ApexGraphComponent } from './graph/apex-graph/apex-graph.component';

const routes: Routes = [
  {path: "", component: ApexGraphComponent },
  {path: "multiple", component: ApexGraphMultipleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
