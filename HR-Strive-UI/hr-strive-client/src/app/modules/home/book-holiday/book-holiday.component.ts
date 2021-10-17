import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-ie';
import { NX_DATE_FORMATS } from '@aposin/ng-aquila/datefield';

//app imports
import { HolidayResponse } from '../../../core/models/holiday-response';
import { HolidayRequest } from '../../../core/models/holiday-request';


export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-book-holiday',
  templateUrl: './book-holiday.component.html',
  styleUrls: ['./book-holiday.component.scss'],
  providers: [
    {provide: NX_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class BookHolidayComponent implements OnInit {

  tomorrow: moment.Moment;
  sameDay = true;
  currentIndex : number = 0;
  defaultDropdownValue : string = '1';
  fromChecked : boolean = false;
  toChecked : boolean = false;
  halfPick : string = 'A';
  filterValue : string = '';

  enabledFrom = [
    { value: 'A', circleText: 'AM', selected: false },
    { value: 'P', circleText: 'PM', selected: false }
  ];
  disabledFrom = [
    { value: 'A', circleText: 'AM', selected: false },
    { value: 'P', circleText: 'PM', selected: true }
  ];
  disabledTo = [
    { value: 'A', circleText: 'AM', selected: true },
    { value: 'P', circleText: 'PM', selected: false }
  ];

  request: HolidayRequest;

  readonly response: HolidayResponse[] = [
    {
       id: 1,
       requestDate: moment().subtract(5, 'days').format("DD/MM/YYYY"),
       fromDate: moment().format("DD/MM/YYYY"),
       toDate: moment().add(1, 'days').format("DD/MM/YYYY"),
       status: 'active',
       statusText: 'pending',
       dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
       days: '2',
       approve: '',
       buttons: {
        edit: false,
        update: false,
        delete: true
      }
    },
    {
      id: 2,
      requestDate: moment().subtract(3, 'days').format("DD/MM/YYYY"),
      fromDate: moment().format("DD/MM/YYYY"),
      toDate: moment().add(3, 'days').format("DD/MM/YYYY"),
      status: 'positive',
      statusText: 'approved',
      dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
      days: '4',
      approve: '',
      buttons: {
        edit: false,
        update: false,
        delete: false
      }
    },
    {
      id: 3,
      requestDate: moment().subtract(7, 'days').format("DD/MM/YYYY"),
      fromDate: moment().add(1, 'days').format("DD/MM/YYYY"),
      toDate: moment().add(1, 'days').format("DD/MM/YYYY"),
      status: 'negative',
      statusText: 'review',
      dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
      days: '1',
      approve: 'Edit',
      buttons: {
        edit: true,
        update: false,
        delete: false
      }
    },
    {
      id: 4,
      requestDate: moment().subtract(5, 'days').format("DD/MM/YYYY"),
      fromDate: moment().subtract(3, 'days').format("DD/MM/YYYY"),
      toDate: moment().add(3, 'days').format("DD/MM/YYYY"),
      status: 'critical',
      statusText: 'declined',
      dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
      days: '7',
      approve: 'Update',
      buttons: {
        edit: false,
        update: true,
        delete: true
      }
    }
  ];

  

  constructor() {
    moment.locale('en-ie');
    this.tomorrow = moment().add(1, 'days');
    
    this.request = {
      fromDate: this.tomorrow,
      toDate: this.tomorrow,
      halfDay: '',
      days: '1'
    }
    this.request.fromDate = this.tomorrow;
    this.request.toDate = this.tomorrow;

   }

  ngOnInit(): void {
  }

  showHalfDay() : void {

    this.request.halfDay = '';

    if (this.request.fromDate.isSame(this.request.toDate, 'day')) {
      this.sameDay = true;

      if(this.fromChecked) {
        if (this.halfPick == 'A') {
          this.request.halfDay = 'am';
        } else {
          this.request.halfDay = 'pm';
        }
      }
    } else {
      this.sameDay = false;

      if (this.fromChecked) {
        if (this.toChecked) {
          this.request.halfDay  = 'pm/am';
        } else {
          this.request.halfDay += 'pm';
        }
      } else if (this.toChecked) {
        this.request.halfDay = 'am';
      }
      
    }
    console.log(this.request);

  }

  setDateFromDays(i: number): void {
    this.request.toDate = moment(this.request.fromDate).add(i - 1 ,'days');
    this.defaultDateAndDays();
  }

  setDaysFromDate(): void {
    if (this.request.toDate.isSameOrAfter(this.request.fromDate)) {
      this.request.days = (this.request.toDate.diff(this.request.fromDate, 'days') + 2).toString();
    }
    this.defaultDateAndDays();
  }

  defaultDateAndDays(): void {
    if (this.request.fromDate.isAfter(this.request.toDate)) {
      this.request.toDate = this.request.fromDate;
      this.request.days = '1';
    }

  }

  filterList() : void {
    console.log("user filtered for: " + this.filterValue);
  }

  submitRequest(): void {
      console.log("user submitted request with values: ", this.request);
  }

}
