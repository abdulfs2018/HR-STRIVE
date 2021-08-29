import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.scss']
})
export class HolidayFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userType: string = '';

}
