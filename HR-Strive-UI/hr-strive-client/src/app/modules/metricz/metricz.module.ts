import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
