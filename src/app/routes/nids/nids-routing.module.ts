import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZeekLogPredictionComponent } from './'

const routes: Routes = [
  { path: 'zeek-log-predict', component: ZeekLogPredictionComponent, data: { title: 'Zeek Log Prediction' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NidsRoutingModule { }
