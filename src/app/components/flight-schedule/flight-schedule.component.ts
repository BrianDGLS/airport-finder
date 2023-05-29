import { Component, Input, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { Arrival, Departure } from 'src/app/types/flight-schedule';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.scss'],
})
export class FlightScheduleComponent implements OnInit {
  @Input() iata!: string;
  @Input() utcTime!: string;

  arrivals: Arrival[] = [];
  departures: Departure[] = [];

  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {
    this.flightService.fetchSchedule(this.iata).subscribe((response: any) => {
      this.arrivals = response.arrivals;
      this.departures = response.departures;
    });
  }

  shortTime(utcString: string) {
    const date = new Date(utcString);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
