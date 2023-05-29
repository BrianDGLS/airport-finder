import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSearchResultComponent } from './airport-search-result.component';

describe('AirportSearchResultComponent', () => {
  let component: AirportSearchResultComponent;
  let fixture: ComponentFixture<AirportSearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportSearchResultComponent]
    });
    fixture = TestBed.createComponent(AirportSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
