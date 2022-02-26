import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AugMaxComponent } from './components';

const routes: Routes = [
  { path: 'data-augmax', component: AugMaxComponent, data: { title: 'AugMax' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AugMaxRoutingModule { }
