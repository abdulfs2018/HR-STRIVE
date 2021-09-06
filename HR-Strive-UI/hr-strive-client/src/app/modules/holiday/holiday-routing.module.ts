//angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//app imports
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { HolidayComponent } from './holiday/holiday.component';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayComponent,
    children: [
      {
        path: 'book-holiday',
        component: BookHolidayComponent,
      },
      {
        path: 'holiday-form',
        component: HolidayFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule {}
