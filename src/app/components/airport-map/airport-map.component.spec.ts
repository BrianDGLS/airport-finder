import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportMapComponent } from './airport-map.component';

describe('AirportMapComponent', () => {
  let component: AirportMapComponent;
  let fixture: ComponentFixture<AirportMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportMapComponent]
    });
    fixture = TestBed.createComponent(AirportMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
