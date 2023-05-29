import { Component, Input } from '@angular/core';
import { AirportSearchItem } from 'src/app/types/airport-search';

@Component({
  selector: 'app-airport-search-result',
  templateUrl: './airport-search-result.component.html',
  styleUrls: ['./airport-search-result.component.scss'],
})
export class AirportSearchResultComponent {
  @Input() airport!: AirportSearchItem;
}
