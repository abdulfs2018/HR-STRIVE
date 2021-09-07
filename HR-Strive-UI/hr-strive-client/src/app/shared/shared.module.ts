//angular imports
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//app imports
import { SidebarComponent } from './components/sidebar/sidebar.component';

//libs imports
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxActionModule } from '@aposin/ng-aquila/action';
import { NxSidebarModule } from '@aposin/ng-aquila/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NxGridModule } from '@aposin/ng-aquila/grid';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NxSidebarModule,
    NxIconModule,
    NxActionModule,
    RouterModule,
    FontAwesomeModule,
    NxGridModule
    
  ],
  exports: [
    ReactiveFormsModule,
    NxSpinnerModule,
    NxIconModule,
    NxActionModule,
    NxSidebarModule,
    NxGridModule,
    SidebarComponent
  ]
})
export class SharedModule { }
