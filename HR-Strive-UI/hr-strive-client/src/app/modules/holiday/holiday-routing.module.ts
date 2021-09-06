import { HolidayComponent } from './holiday/holiday.component';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HolidayComponent,
    children: [
      {
        path: 'book-holiday',
        component: BookHolidayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayRoutingModule {}
