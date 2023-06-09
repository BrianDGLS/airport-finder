import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightScheduleComponent } from './flight-schedule.component';

describe('FlightScheduleComponent', () => {
  let component: FlightScheduleComponent;
  let fixture: ComponentFixture<FlightScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightScheduleComponent]
    });
    fixture = TestBed.createComponent(FlightScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
