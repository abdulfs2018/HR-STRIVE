//angular imports
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//libs imports
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxButtonModule } from '@aposin/ng-aquila/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    NxInputModule,
    NxButtonModule,
    NxSpinnerModule,
    NxCardModule,
    NxIconModule
  ]
})
export class SharedModule { }
