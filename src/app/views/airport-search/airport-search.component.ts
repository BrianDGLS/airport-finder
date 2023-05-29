import { Component, computed } from '@angular/core';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-airport-search',
  templateUrl: './airport-search.component.html',
  styleUrls: ['./airport-search.component.scss'],
})
export class AirportSearchComponent {
  showLoadingState = computed(() => this.airportService.requestInProgress());
  airports = computed(() => this.airportService.airportSearchResults());

  constructor(private airportService: AirportService) {}
}
