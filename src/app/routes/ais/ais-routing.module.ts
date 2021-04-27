import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelTrainingComponent, ModelPredictionComponent, DataNormalizationComponent } from './'

const routes: Routes = [
  { path: 'data-normalize', component: DataNormalizationComponent, data: { title: 'AIS Data Normalize' } },
  { path: 'training', component: ModelTrainingComponent, data: { title: 'AIS Training' } },
  { path: 'prediction', component: ModelPredictionComponent, data: { title: 'AIS Prediction' } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AisRoutingModule { }
