import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHolidayComponent } from './book-holiday.component';

describe('BookHolidayComponent', () => {
  let component: BookHolidayComponent;
  let fixture: ComponentFixture<BookHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
