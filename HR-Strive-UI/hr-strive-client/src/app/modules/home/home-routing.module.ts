import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MetriczComponent } from './metricz/metricz.component';
import { DashboardComponent } from './/dashboard/dashboard.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'book-holiday',
        component: BookHolidayComponent,
      },
      {
        path: 'holiday-form',
        component: HolidayFormComponent,
      },
      {
        path: 'metricz',
        component: MetriczComponent,
      },
      {
        path: 'timesheet',
        component: TimesheetComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
