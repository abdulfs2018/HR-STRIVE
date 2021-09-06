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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
