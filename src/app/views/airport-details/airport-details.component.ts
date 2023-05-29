import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportCodeType } from 'src/app/enums/airport-code-type';
import { AirportService } from 'src/app/services/airport.service';
import { AirportByCodeResponse } from 'src/app/types/airport-search';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport-details.component.html',
  styleUrls: ['./airport-details.component.scss'],
})
export class AirportDetailsComponent implements OnInit {
  airportDetails!: AirportByCodeResponse;

  constructor(
    private route: ActivatedRoute,
    private airportService: AirportService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const iata = params.get('iata') ?? '';
      this.airportService
        .fetchAirport(AirportCodeType.IATA, iata)
        .subscribe((response) => {
          this.airportDetails = response;
        });
    });
  }
}
