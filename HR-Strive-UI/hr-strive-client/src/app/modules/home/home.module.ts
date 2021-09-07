import { UsersComponent } from './users/users.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MetriczComponent } from './metricz/metricz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    SharedModule
  ]
})
export class HomeModule { }
