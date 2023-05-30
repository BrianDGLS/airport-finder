import { Injectable, computed } from '@angular/core';
import { FlightsService } from './flights.service';
import { AirportService } from './airport.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  showLoadingState = computed(() => {
    return (
      this.flightService.requestInProgress() ||
      this.airportService.requestInProgress()
    );
  });

  constructor(
    private flightService: FlightsService,
    private airportService: AirportService
  ) {}
}
