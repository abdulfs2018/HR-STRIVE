//angular impports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//app imports
import { MetriczComponent } from './metricz/metricz.component';


const routes: Routes = [
  {
    path: '',
    component: MetriczComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetriczRoutingModule { }
