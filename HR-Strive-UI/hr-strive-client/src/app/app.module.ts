import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MetriczComponent } from './metricz/metricz.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedInComponent,
    DashboardComponent,
    SidebarComponent,
    HolidayCalendarComponent,
    TimesheetComponent,
    MetriczComponent,
    HolidayFormComponent,
    BookHolidayComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
