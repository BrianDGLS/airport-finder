import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, signal } from '@angular/core';
import { Observable, finalize, of } from 'rxjs';
import { AirportSearchItem } from '../types/airport-search';
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

  searchAirports(q: string): Observable<any> {
    // this.requestInProgress.set(true);
    // return this.http
    //   .get<AirportSearchResponse>(`${this.BASE_URL}/search/term`, {
    //     headers: this.headers,
    //     params: { q },
    //   })
    //   .pipe(finalize(() => this.requestInProgress.set(false)));
    return of({
      searchBy: 'lax',
      items: [
        {
          icao: 'KLAX',
          iata: 'LAX',
          name: 'Los Angeles',
          shortName: 'Los Angeles',
          municipalityName: 'Los Angeles',
          location: { lat: 33.9425, lon: -118.408 },
          countryCode: 'US',
        },
      ],
    });
  }

  fetchAirport(codeType: AirportCodeType, code: string) {
    this.requestInProgress.set(true);
    return this.http
      .get(`${this.BASE_URL}/${codeType}/${code}`, { headers: this.headers })
      .pipe(finalize(() => this.requestInProgress.set(false)));
  }
}
