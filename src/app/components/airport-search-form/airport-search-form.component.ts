import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-airport-search-form',
  templateUrl: './airport-search-form.component.html',
  styleUrls: ['./airport-search-form.component.scss'],
})
export class AirportSearchFormComponent {
  searchForm = new FormGroup({
    searchText: new FormControl(),
  });

  validInputLength = signal(true);

  constructor(private airportService: AirportService) {}

  search() {
    const { searchText } = this.searchForm.getRawValue();
    this.validInputLength.set(searchText && this.searchForm.valid);
    if (this.validInputLength()) {
      this.airportService
        .searchAirports(searchText.trim())
        .subscribe((response) => {
          this.airportService.airportSearchResults.set(response.items);
          this.airportService.airportsUpdated.emit();
        });
    }
  }

  reset() {
    this.searchForm.reset();
  }
}
