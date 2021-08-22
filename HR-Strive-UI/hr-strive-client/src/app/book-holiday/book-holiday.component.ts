import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-holiday',
  templateUrl: './book-holiday.component.html',
  styleUrls: ['./book-holiday.component.scss']
})
export class BookHolidayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userType: string = '';

}
