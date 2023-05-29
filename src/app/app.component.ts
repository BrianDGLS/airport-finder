import { Component, computed } from '@angular/core';
import { AirportService } from './services/airport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showLoadingState = computed(() => this.airportService.requestInProgress());
  airports = computed(() => this.airportService.airportSearchResults());

  constructor(private airportService: AirportService) {}
}
