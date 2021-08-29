import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.scss']
})
export class HolidayCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userType: string = '';

}
