//angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//app imports
import { MetriczRoutingModule } from './metricz-routing.module';
import { MetriczComponent } from './metricz/metricz.component';


@NgModule({
  declarations: [
    MetriczComponent
  ],
  imports: [
    CommonModule,
    MetriczRoutingModule
  ]
})
export class MetriczModule { }
