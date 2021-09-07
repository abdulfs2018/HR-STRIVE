//angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//app imports
import { HolidayRoutingModule } from './holiday-routing.module';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';


@NgModule({
  declarations: [
    BookHolidayComponent,
    HolidayComponent,
    HolidayFormComponent
  ],
  imports: [
    CommonModule,
    HolidayRoutingModule
  ]
})
export class HolidayModule { }
