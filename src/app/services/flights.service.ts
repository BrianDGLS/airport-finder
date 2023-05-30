import { Injectable, signal } from '@angular/core';
import { aeroDataBoxAPIKey } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, delay, finalize } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  readonly BASE_URL = 'https://aerodatabox.p.rapidapi.com/flights/airports';

  readonly headers = new HttpHeaders({
    'X-RapidAPI-Key': aeroDataBoxAPIKey,
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
  });

  requestInProgress = signal(false);

  constructor(private http: HttpClient) {}

  fetchSchedule(iata: string) {
    this.requestInProgress.set(true);
    const from = moment().format('YYYY-MM-DDTHH:mm');
    const to = moment().add(6, 'hours').format('YYYY-MM-DDTHH:mm');
    return this.http
      .get(`${this.BASE_URL}/Iata/${iata}/${from}/${to}`, {
        headers: this.headers,
      })
      .pipe(finalize(() => this.requestInProgress.set(false)));
  }
}
