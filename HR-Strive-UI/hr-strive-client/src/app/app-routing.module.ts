//angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'holiday', 
    loadChildren: () => import('./modules/holiday/holiday.module').then(m => m.HolidayModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'metricz',
    loadChildren: () => import('./modules/metricz/metricz.module').then(m => m.MetriczModule)
  },
  {
    path: 'timesheet',
    loadChildren: () => import('./modules/timesheet/timesheet.module').then(m => m.TimesheetModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
