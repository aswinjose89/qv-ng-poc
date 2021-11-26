import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { NidsRoutingModule } from './nids-routing.module';
import { ZeekLogPredictionComponent, PredictionTblComponent, AllNidsPacketsTblComponent } from './';


@NgModule({
  declarations: [ZeekLogPredictionComponent, PredictionTblComponent, AllNidsPacketsTblComponent],
  imports: [
    CommonModule,
    SharedModule,
    NidsRoutingModule
  ]
})
export class NidsModule { }
