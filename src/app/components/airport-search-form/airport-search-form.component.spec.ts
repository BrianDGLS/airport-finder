import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSearchFormComponent } from './airport-search-form.component';

describe('AirportSearchFormComponent', () => {
  let component: AirportSearchFormComponent;
  let fixture: ComponentFixture<AirportSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportSearchFormComponent]
    });
    fixture = TestBed.createComponent(AirportSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
