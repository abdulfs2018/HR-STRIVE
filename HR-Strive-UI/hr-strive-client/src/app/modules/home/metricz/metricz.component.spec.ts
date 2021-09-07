import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetriczComponent } from './metricz.component';

describe('MetriczComponent', () => {
  let component: MetriczComponent;
  let fixture: ComponentFixture<MetriczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetriczComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetriczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
