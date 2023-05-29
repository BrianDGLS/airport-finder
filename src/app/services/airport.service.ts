import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, signal } from '@angular/core';
import { Observable, finalize, of } from 'rxjs';
import {
  AirportByCodeResponse,
  AirportSearchItem,
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

  fetchAirport(codeType: AirportCodeType, code: string): Observable<any> {
    // this.requestInProgress.set(true);
    // return this.http
    //   .get<AirportByCodeResponse>(`${this.BASE_URL}/${codeType}/${code}`, {
    //     headers: this.headers,
    //     params: { withTime: true },
    //   })
    //   .pipe(finalize(() => this.requestInProgress.set(false)));
    return of({
      icao: 'KLAX',
      iata: 'LAX',
      shortName: 'Los Angeles',
      fullName: 'Los Angeles',
      municipalityName: 'Los Angeles',
      location: {
        lat: 33.9425,
        lon: -118.408,
      },
      elevation: {
        meter: 38.1,
        km: 0.04,
        mile: 0.02,
        nm: 0.02,
        feet: 125,
      },
      country: {
        code: 'US',
        name: 'United States',
      },
      continent: {
        code: 'NA',
        name: 'North America',
      },
      timeZone: 'America/Los_Angeles',
      urls: {
        webSite: 'http://www.airport-la.com/',
        wikipedia:
          'https://en.wikipedia.org/wiki/Los_Angeles_International_Airport',
        twitter: 'http://twitter.com/LAX_Official',
        googleMaps: 'https://www.google.com/maps/@33.942501,-118.407997,14z',
        liveAtc: 'http://www.liveatc.net/search/?icao=KLAX',
        flightRadar: 'https://www.flightradar24.com/33.94,-118.41/14',
      },
      currentTime: {
        utcTime: '2023-05-29 19:28Z',
        localTime: '2023-05-29 12:28-07:00',
        time: {
          utc: '2023-05-29 19:28Z',
          local: '2023-05-29 12:28-07:00',
        },
        timeZoneId: 'America/Los_Angeles',
      },
    });
  }
}
