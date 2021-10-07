import { UsersComponent } from './users/users.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MetriczComponent } from './metricz/metricz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//libs imports
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxPopoverModule } from '@aposin/ng-aquila/popover';
import { NxDropdownModule} from '@aposin/ng-aquila/dropdown';
import { NxDatefieldModule } from '@aposin/ng-aquila/datefield';
import { NxMomentDateModule } from '@aposin/ng-aquila/moment-date-adapter';
import { NxCircleToggleModule } from '@aposin/ng-aquila/circle-toggle';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';
import { NxTableModule } from '@aposin/ng-aquila/table';
import { NxBadgeModule } from '@aposin/ng-aquila/badge';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookHolidayComponent,
    HolidayFormComponent,
    DashboardComponent,
    MetriczComponent,
    TimesheetComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NxButtonModule,
    NxGridModule,
    NxInputModule,
    NxFormfieldModule,
    NxLinkModule,
    NxPopoverModule,
    NxDropdownModule,
    NxDatefieldModule,
    NxMomentDateModule,
    NxCircleToggleModule,
    NxIconModule,
    NxTabsModule,
    NxTableModule,
    NxBadgeModule
  ]
})
export class HomeModule { }
