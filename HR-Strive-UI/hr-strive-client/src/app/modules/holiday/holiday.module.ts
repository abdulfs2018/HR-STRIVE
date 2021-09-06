import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRoutingModule } from './holiday-routing.module';
import { BookHolidayComponent } from './book-holiday/book-holiday.component';
import { HolidayComponent } from './holiday/holiday.component';


@NgModule({
  declarations: [
    BookHolidayComponent,
    HolidayComponent
  ],
  imports: [
    CommonModule,
    HolidayRoutingModule
  ]
})
export class HolidayModule { }
