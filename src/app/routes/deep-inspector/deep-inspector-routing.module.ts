import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RlAssistComponent } from './'

const routes: Routes = [
  { path: 'rl-assist', component: RlAssistComponent, data: { title: 'RL Assist' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeepInspectorRoutingModule { }
