import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { AugMaxRoutingModule } from './aug-max-routing.module';
import { AugMaxComponent } from './components';


@NgModule({
  declarations: [AugMaxComponent],
  imports: [
    CommonModule,
    SharedModule,
    AugMaxRoutingModule
  ]
})
export class AugMaxModule { }
