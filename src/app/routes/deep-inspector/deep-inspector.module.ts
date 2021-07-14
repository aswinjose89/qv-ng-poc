import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DeepInspectorRoutingModule } from './deep-inspector-routing.module';
import { RlAssistComponent } from './'
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [RlAssistComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeepInspectorRoutingModule,
    HighchartsChartModule
  ]
})
export class DeepInspectorModule { }
