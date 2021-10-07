import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/en-ie';
import { NX_DATE_FORMATS } from '@aposin/ng-aquila/datefield';


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
    {provide: NX_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class BookHolidayComponent implements OnInit {

  formGroup: FormGroup;
  tomorrow: moment.Moment;
  currentDateTo: moment.Moment;
  currentDateFrom: moment.Moment;
  checkedHalfDayFrom : boolean = false;
  checkedHalfDayFromDisabled : boolean = false;
  checkedHalfDayTo : boolean = false;
  sameDay : boolean = true;
  sameDayPrev : boolean = true;
  currentIndex : number = 0;
  defaultDropdownValue : string = '1';

  enabledFrom = [
    { value: 'A', circleText: 'AM', selected: false },
    { value: 'P', circleText: 'PM', selected: false },
  ];
  disabledFrom = [
    { value: 'A', circleText: 'AM', selected: false },
    { value: 'P', circleText: 'PM', selected: true },
  ];
  disabledTo = [
    { value: 'A', circleText: 'AM', selected: true },
    { value: 'P', circleText: 'PM', selected: false },
  ];

  tableElements = [
    {
       id: 1,
       requestDate: moment().subtract(5, 'days').format("DD/MM/YYYY"),
       fromDate: moment().format("DD/MM/YYYY"),
       toDate: moment().add(1, 'days').format("DD/MM/YYYY"),
       status: 'active',
       statusText: 'pending',
       dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
       days: 2,
       approve: ''
    },
    {
      id: 2,
      requestDate: moment().subtract(3, 'days').format("DD/MM/YYYY"),
      fromDate: moment().format("DD/MM/YYYY"),
      toDate: moment().add(3, 'days').format("DD/MM/YYYY"),
      status: 'positive',
      statusText: 'approved',
      dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
      days: 4,
      approve: ''
    },
    {
      id: 3,
      requestDate: moment().subtract(7, 'days').format("DD/MM/YYYY"),
      fromDate: moment().add(1, 'days').format("DD/MM/YYYY"),
      toDate: moment().add(1, 'days').format("DD/MM/YYYY"),
      status: 'negative',
      statusText: 'review',
      dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
      days: 1,
      approve: 'Edit'
    },
    {
      id: 4,
      requestDate: moment().subtract(5, 'days').format("DD/MM/YYYY"),
      fromDate: moment().subtract(3, 'days').format("DD/MM/YYYY"),
      toDate: moment().add(3, 'days').format("DD/MM/YYYY"),
      status: 'critical',
      statusText: 'declined',
      dateApproved: moment().subtract(2, 'days').format("DD/MM/YYYY"),
      days: 7,
      approve: 'Update'
    }
  ];

  constructor() {
    moment.locale('en-ie');
    this.tomorrow = moment().add(1, 'days');
    this.currentDateFrom = this.tomorrow;
    this.currentDateTo = this.tomorrow;
    this.formGroup = new FormBuilder().group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      enabledFrom: ['', Validators.required],
      disabledFrom: ['', Validators.required],
      disabledTo: ['', Validators.required],
      halfDayFromToggle: ['false', Validators.required],
      halfDayToToggle: ['false', Validators.required]
    });
    
    this.formGroup.get("disabledFrom")?.disable();
    this.formGroup.get("disabledTo")?.disable();
   }

  ngOnInit(): void {
  }

  showHalfDay(action : String) : void {

    this.sameDayPrev = this.sameDay;
    if (this.sameDay = moment(this.formGroup.get("fromDate")?.value).isSame(this.formGroup.get("toDate")?.value))
    {
      if (this.sameDayPrev == this.sameDay) {
        this.checkedHalfDayFromDisabled = !this.checkedHalfDayFromDisabled;
      } else {
        this.checkedHalfDayFromDisabled = false;
      }
      this.checkedHalfDayFrom = false;
      this.checkedHalfDayTo = false;
    } else
    {
      this.checkedHalfDayFromDisabled = false;
      if (action == 'from')
      {
        this.checkedHalfDayFrom = !this.checkedHalfDayFrom; 
      }
      else if (action == 'to')
      {
        this.checkedHalfDayTo = !this.checkedHalfDayTo;
      }  
    }

    if (this.sameDayPrev != this.sameDay) {
      this.formGroup.get("halfDayFromToggle")?.setValue(false);
      this.formGroup.get("halfDayToToggle")?.setValue(false);
    }


  }
}
