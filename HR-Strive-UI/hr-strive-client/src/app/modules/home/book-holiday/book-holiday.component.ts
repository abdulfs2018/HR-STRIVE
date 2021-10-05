import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faCalendarDay, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
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

  faCalendarDay = faCalendarDay;
  faPlusCircle = faPlusCircle;
  formGroup: FormGroup;
  tomorrow: moment.Moment;
  currentDateTo: moment.Moment;
  currentDateFrom: moment.Moment;
  checkedHalfDayFrom : boolean = false;
  checkedHalfDayFromDisabled : boolean = false;
  checkedHalfDayTo : boolean = false;
  sameDay : boolean = true;
  sameDayPrev : boolean = true;

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

  constructor(private datePipe: DatePipe) {
    moment.locale('en-ie');
    this.datePipe = datePipe;
    this.tomorrow = moment().add(1, 'days');
    this.currentDateFrom = this.tomorrow;
    this.currentDateTo = this.tomorrow;
    this.formGroup = new FormBuilder().group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      items: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      enabledFrom: ['', Validators.required],
      disabledFrom: ['', Validators.required],
      disabledTo: ['', Validators.required],
      halfDayFromToggle: ['false', Validators.required],
      halfDayToToggle: ['false', Validators.required]
    });
    console.log(this.currentDateFrom);
    
    this.formGroup.get("disabledFrom")?.disable();
    this.formGroup.get("disabledTo")?.disable();
   }

  ngOnInit(): void {
  }

  showHalfDay(action : String) : void {

    this.sameDayPrev = this.sameDay;
    if (this.sameDay = this.datePipe.transform(new Date(this.formGroup.get("fromDate")?.value),"dd-MM-yyyy") == this.datePipe.transform(this.formGroup.get("toDate")?.value,"dd-MM-yyyy")) 
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
