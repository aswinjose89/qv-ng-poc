import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { AisRoutingModule } from './ais-routing.module';
import { ModelTrainingComponent, ModelPredictionComponent, DataNormalizationComponent } from './'
// import { ModelTrainingComponent } from './model-training/model-training.component';
// import { ModelPredictionComponent } from './model-prediction/model-prediction.component';
// import { DataNormalizationComponent } from './data-normalization/data-normalization.component';

@NgModule({
  declarations: [ModelTrainingComponent, ModelPredictionComponent, DataNormalizationComponent],
  imports: [
    CommonModule,
    SharedModule,
    AisRoutingModule
  ]
})
export class AisModule { }
