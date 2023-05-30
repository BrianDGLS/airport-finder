import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, signal } from '@angular/core';
import { Observable, delay, finalize, of } from 'rxjs';
import {
  AirportByCodeResponse,
  AirportSearchItem,
  AirportSearchResponse,
} from '../types/airport-search';
import { AirportCodeType } from '../enums/airport-code-type';
import { aeroDataBoxAPIKey } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  readonly BASE_URL = 'https://aerodatabox.p.rapidapi.com/airports';

  readonly headers = new HttpHeaders({
    'X-RapidAPI-Key': aeroDataBoxAPIKey,
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
  });

  airportsUpdated = new EventEmitter();

  requestInProgress = signal(false);

  airports: AirportSearchItem[] = [];

  airportSearchResults = signal(this.airports);

  constructor(private http: HttpClient) {}

  searchAirports(q: string): Observable<AirportSearchResponse> {
    this.requestInProgress.set(true);
    return this.http
      .get<AirportSearchResponse>(`${this.BASE_URL}/search/term`, {
        headers: this.headers,
        params: { q },
      })
      .pipe(finalize(() => this.requestInProgress.set(false)));
  }

  fetchAirport(
    codeType: AirportCodeType,
    code: string
  ): Observable<AirportByCodeResponse> {
    this.requestInProgress.set(true);
    return this.http
      .get<AirportByCodeResponse>(`${this.BASE_URL}/${codeType}/${code}`, {
        headers: this.headers,
        params: { withTime: true },
      })
      .pipe(finalize(() => this.requestInProgress.set(false)));
  }
}
