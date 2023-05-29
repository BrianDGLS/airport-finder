import { Injectable, signal } from '@angular/core';
import { aeroDataBoxAPIKey } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { of } from 'rxjs';

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
    // const from = moment().format('YYYY-MM-DDTHH:mm');
    // const to = moment().add(6, 'hours').format('YYYY-MM-DDTHH:mm');
    // return this.http.get(`${this.BASE_URL}/Iata/${iata}/${from}/${to}`, {
    //   headers: this.headers,
    // });
    return of({
      "departures": [
        {
          "movement": {
            "airport": {
              "name": "Provo"
            },
            "scheduledTimeLocal": "2023-05-29 20:24-07:00",
            "scheduledTimeUtc": "2023-05-30 03:24Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:24Z",
              "local": "2023-05-29 20:24-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "G4 1588",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Allegiant Air",
            "iata": "G4",
            "icao": "AAY"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "Mexico City"
            },
            "scheduledTimeLocal": "2023-05-29 23:30-07:00",
            "scheduledTimeUtc": "2023-05-30 06:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:30Z",
              "local": "2023-05-29 23:30-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "6R 301",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A300"
          },
          "airline": {
            "name": "Alrosa",
            "iata": "6R",
            "icao": "DRU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "CYYZ",
              "iata": "YYZ",
              "name": "Toronto"
            },
            "scheduledTimeLocal": "2023-05-29 22:30-07:00",
            "scheduledTimeUtc": "2023-05-30 05:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:30Z",
              "local": "2023-05-29 22:30-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AC 794",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Air Canada",
            "iata": "AC",
            "icao": "ACA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EDDF",
              "iata": "FRA",
              "name": "Frankfurt-am-Main"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "DE 2087",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "D-ANRI",
            "modeS": "3C7A49",
            "model": "Airbus A330-200"
          },
          "airline": {
            "name": "Condor",
            "iata": "DE",
            "icao": "CFG"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 20:30-07:00",
            "scheduledTimeUtc": "2023-05-30 03:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:30Z",
              "local": "2023-05-29 20:30-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 186",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A330-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "BA 268",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "British Airways",
            "iata": "BA",
            "icao": "BAW"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 22:50-07:00",
            "scheduledTimeUtc": "2023-05-30 05:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:50Z",
              "local": "2023-05-29 22:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "VS 24",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "Virgin Atlantic",
            "iata": "VS",
            "icao": "VIR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 23:22-07:00",
            "scheduledTimeUtc": "2023-05-30 06:22Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:22Z",
              "local": "2023-05-29 23:22-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 138",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-200"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KABQ",
              "iata": "ABQ",
              "name": "The Duke City"
            },
            "scheduledTimeLocal": "2023-05-29 20:35-07:00",
            "scheduledTimeUtc": "2023-05-30 03:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:35Z",
              "local": "2023-05-29 20:35-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 3932",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 21:45-07:00",
            "scheduledTimeUtc": "2023-05-30 04:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:45Z",
              "local": "2023-05-29 21:45-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 700",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 21:51-07:00",
            "scheduledTimeUtc": "2023-05-30 04:51Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:51Z",
              "local": "2023-05-29 21:51-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 1828",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 22:55-07:00",
            "scheduledTimeUtc": "2023-05-30 05:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:55Z",
              "local": "2023-05-29 22:55-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 395",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 23:55-07:00",
            "scheduledTimeUtc": "2023-05-30 06:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:55Z",
              "local": "2023-05-29 23:55-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 902",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KAUS",
              "iata": "AUS",
              "name": "Austin"
            },
            "scheduledTimeLocal": "2023-05-29 20:35-07:00",
            "scheduledTimeUtc": "2023-05-30 03:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:35Z",
              "local": "2023-05-29 20:35-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3377",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOI",
              "iata": "BOI",
              "name": "Boise"
            },
            "scheduledTimeLocal": "2023-05-29 20:40-07:00",
            "scheduledTimeUtc": "2023-05-30 03:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:40Z",
              "local": "2023-05-29 20:40-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 2050",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 20:45-07:00",
            "scheduledTimeUtc": "2023-05-30 03:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:45Z",
              "local": "2023-05-29 20:45-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2453",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 22:05-07:00",
            "scheduledTimeUtc": "2023-05-30 05:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:05Z",
              "local": "2023-05-29 22:05-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 622",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 21:45-07:00",
            "scheduledTimeUtc": "2023-05-30 04:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:45Z",
              "local": "2023-05-29 21:45-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 675",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-200"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 22:51-07:00",
            "scheduledTimeUtc": "2023-05-30 05:51Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:51Z",
              "local": "2023-05-29 22:51-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2424",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-200"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 23:59-07:00",
            "scheduledTimeUtc": "2023-05-30 06:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:59Z",
              "local": "2023-05-29 23:59-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 988",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBWI",
              "iata": "BWI",
              "name": "Baltimore"
            },
            "scheduledTimeLocal": "2023-05-29 22:20-07:00",
            "scheduledTimeUtc": "2023-05-30 05:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:20Z",
              "local": "2023-05-29 22:20-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 128",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBWI",
              "iata": "BWI",
              "name": "Baltimore"
            },
            "scheduledTimeLocal": "2023-05-29 22:35-07:00",
            "scheduledTimeUtc": "2023-05-30 05:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:35Z",
              "local": "2023-05-29 22:35-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1605",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCLE",
              "iata": "CLE",
              "name": "Cleveland"
            },
            "scheduledTimeLocal": "2023-05-29 23:26-07:00",
            "scheduledTimeUtc": "2023-05-30 06:26Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:26Z",
              "local": "2023-05-29 23:26-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1786",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCLT",
              "iata": "CLT",
              "name": "Charlotte"
            },
            "scheduledTimeLocal": "2023-05-29 22:49-07:00",
            "scheduledTimeUtc": "2023-05-30 05:49Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:49Z",
              "local": "2023-05-29 22:49-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2019",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCLT",
              "iata": "CLT",
              "name": "Charlotte"
            },
            "scheduledTimeLocal": "2023-05-29 23:50-07:00",
            "scheduledTimeUtc": "2023-05-30 06:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:50Z",
              "local": "2023-05-29 23:50-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2113",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCLT",
              "iata": "CLT",
              "name": "Charlotte"
            },
            "scheduledTimeLocal": "2023-05-29 23:48-07:00",
            "scheduledTimeUtc": "2023-05-30 06:48Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:48Z",
              "local": "2023-05-29 23:48-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 203",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCVG",
              "iata": "CVG",
              "name": "Cincinnati"
            },
            "scheduledTimeLocal": "2023-05-29 21:50-07:00",
            "scheduledTimeUtc": "2023-05-30 04:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:50Z",
              "local": "2023-05-29 21:50-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 442",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 20:30-07:00",
            "scheduledTimeUtc": "2023-05-30 03:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:30Z",
              "local": "2023-05-29 20:30-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1049",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 22:15-07:00",
            "scheduledTimeUtc": "2023-05-30 05:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:15Z",
              "local": "2023-05-29 22:15-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1937",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDFW",
              "iata": "DFW",
              "name": "Dallas-Fort Worth"
            },
            "scheduledTimeLocal": "2023-05-29 23:50-07:00",
            "scheduledTimeUtc": "2023-05-30 06:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:50Z",
              "local": "2023-05-29 23:50-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 1200",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDFW",
              "iata": "DFW",
              "name": "Dallas-Fort Worth"
            },
            "scheduledTimeLocal": "2023-05-29 23:59-07:00",
            "scheduledTimeUtc": "2023-05-30 06:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:59Z",
              "local": "2023-05-29 23:59-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 1582",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDTW",
              "iata": "DTW",
              "name": "Detroit"
            },
            "scheduledTimeLocal": "2023-05-29 22:15-07:00",
            "scheduledTimeUtc": "2023-05-30 05:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:15Z",
              "local": "2023-05-29 22:15-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 407",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KELP",
              "iata": "ELP",
              "name": "El Paso"
            },
            "scheduledTimeLocal": "2023-05-29 20:35-07:00",
            "scheduledTimeUtc": "2023-05-30 03:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:35Z",
              "local": "2023-05-29 20:35-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 3147",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 21:11-07:00",
            "scheduledTimeUtc": "2023-05-30 04:11Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:11Z",
              "local": "2023-05-29 21:11-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 2323",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 21:10-07:00",
            "scheduledTimeUtc": "2023-05-30 04:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:10Z",
              "local": "2023-05-29 21:10-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1484",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 22:20-07:00",
            "scheduledTimeUtc": "2023-05-30 05:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:20Z",
              "local": "2023-05-29 22:20-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 288",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1574",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 23:55-07:00",
            "scheduledTimeUtc": "2023-05-30 06:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:55Z",
              "local": "2023-05-29 23:55-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2096",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-200"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KFLL",
              "iata": "FLL",
              "name": "Fort Lauderdale"
            },
            "scheduledTimeLocal": "2023-05-29 21:35-07:00",
            "scheduledTimeUtc": "2023-05-30 04:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:35Z",
              "local": "2023-05-29 21:35-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 343",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KFLL",
              "iata": "FLL",
              "name": "Fort Lauderdale"
            },
            "scheduledTimeLocal": "2023-05-29 21:10-07:00",
            "scheduledTimeUtc": "2023-05-30 04:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:10Z",
              "local": "2023-05-29 21:10-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 700",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KFLL",
              "iata": "FLL",
              "name": "Fort Lauderdale"
            },
            "scheduledTimeLocal": "2023-05-29 21:43-07:00",
            "scheduledTimeUtc": "2023-05-30 04:43Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:43Z",
              "local": "2023-05-29 21:43-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 310",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KFLL",
              "iata": "FLL",
              "name": "Fort Lauderdale"
            },
            "scheduledTimeLocal": "2023-05-29 23:30-07:00",
            "scheduledTimeUtc": "2023-05-30 06:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:30Z",
              "local": "2023-05-29 23:30-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 676",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAD",
              "iata": "IAD",
              "name": "District of Columbia"
            },
            "scheduledTimeLocal": "2023-05-29 21:20-07:00",
            "scheduledTimeUtc": "2023-05-30 04:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:20Z",
              "local": "2023-05-29 21:20-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 344",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAD",
              "iata": "IAD",
              "name": "District of Columbia"
            },
            "scheduledTimeLocal": "2023-05-29 23:07-07:00",
            "scheduledTimeUtc": "2023-05-30 06:07Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:07Z",
              "local": "2023-05-29 23:07-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1495",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIPL",
              "iata": "IPL",
              "name": "Imperial"
            },
            "scheduledTimeLocal": "2023-05-29 20:30-07:00",
            "scheduledTimeUtc": "2023-05-30 03:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:30Z",
              "local": "2023-05-29 20:30-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "9X 808",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Cessna 208 Caravan"
          },
          "airline": {
            "name": "Southern Airways Express",
            "iata": "9X",
            "icao": "FDY"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 20:30-07:00",
            "scheduledTimeUtc": "2023-05-30 03:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:30Z",
              "local": "2023-05-29 20:30-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 2124",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 22:17-07:00",
            "scheduledTimeUtc": "2023-05-30 05:17Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:17Z",
              "local": "2023-05-29 22:17-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 10",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 21:40-07:00",
            "scheduledTimeUtc": "2023-05-30 04:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:40Z",
              "local": "2023-05-29 21:40-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 349",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-400"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 23:25-07:00",
            "scheduledTimeUtc": "2023-05-30 06:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:25Z",
              "local": "2023-05-29 23:25-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 28",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 22:55-07:00",
            "scheduledTimeUtc": "2023-05-30 05:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:55Z",
              "local": "2023-05-29 22:55-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 280",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 23:29-07:00",
            "scheduledTimeUtc": "2023-05-30 06:29Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:29Z",
              "local": "2023-05-29 23:29-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 124",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 23:55-07:00",
            "scheduledTimeUtc": "2023-05-30 06:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:55Z",
              "local": "2023-05-29 23:55-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 524",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 21:15-07:00",
            "scheduledTimeUtc": "2023-05-30 04:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:15Z",
              "local": "2023-05-29 21:15-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1524",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 20:45-07:00",
            "scheduledTimeUtc": "2023-05-30 03:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:45Z",
              "local": "2023-05-29 20:45-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 2699",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 21:15-07:00",
            "scheduledTimeUtc": "2023-05-30 04:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:15Z",
              "local": "2023-05-29 21:15-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2832",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 22:43-07:00",
            "scheduledTimeUtc": "2023-05-30 05:43Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:43Z",
              "local": "2023-05-29 22:43-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2620",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 22:15-07:00",
            "scheduledTimeUtc": "2023-05-30 05:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:15Z",
              "local": "2023-05-29 22:15-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 136",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 21:10-07:00",
            "scheduledTimeUtc": "2023-05-30 04:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:10Z",
              "local": "2023-05-29 21:10-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2091",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 21:45-07:00",
            "scheduledTimeUtc": "2023-05-30 04:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:45Z",
              "local": "2023-05-29 21:45-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 132",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 22:55-07:00",
            "scheduledTimeUtc": "2023-05-30 05:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:55Z",
              "local": "2023-05-29 22:55-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1730",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 23:50-07:00",
            "scheduledTimeUtc": "2023-05-30 06:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:50Z",
              "local": "2023-05-29 23:50-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 539",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-29 20:49-07:00",
            "scheduledTimeUtc": "2023-05-30 03:49Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:49Z",
              "local": "2023-05-29 20:49-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 2985",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-29 22:59-07:00",
            "scheduledTimeUtc": "2023-05-30 05:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:59Z",
              "local": "2023-05-29 22:59-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2807",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-29 23:45-07:00",
            "scheduledTimeUtc": "2023-05-30 06:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:45Z",
              "local": "2023-05-29 23:45-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 340",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMSP",
              "iata": "MSP",
              "name": "Minneapolis"
            },
            "scheduledTimeLocal": "2023-05-29 23:30-07:00",
            "scheduledTimeUtc": "2023-05-30 06:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:30Z",
              "local": "2023-05-29 23:30-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 430",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KOAK",
              "iata": "OAK",
              "name": "Oakland"
            },
            "scheduledTimeLocal": "2023-05-29 21:15-07:00",
            "scheduledTimeUtc": "2023-05-30 04:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:15Z",
              "local": "2023-05-29 21:15-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 3909",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 23:22-07:00",
            "scheduledTimeUtc": "2023-05-30 06:22Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:22Z",
              "local": "2023-05-29 23:22-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2002",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 23:15-07:00",
            "scheduledTimeUtc": "2023-05-30 06:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:15Z",
              "local": "2023-05-29 23:15-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 2804",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 23:11-07:00",
            "scheduledTimeUtc": "2023-05-30 06:11Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:11Z",
              "local": "2023-05-29 23:11-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2622",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 23:56-07:00",
            "scheduledTimeUtc": "2023-05-30 06:56Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:56Z",
              "local": "2023-05-29 23:56-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 706",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPDX",
              "iata": "PDX",
              "name": "Portland"
            },
            "scheduledTimeLocal": "2023-05-29 20:59-07:00",
            "scheduledTimeUtc": "2023-05-30 03:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:59Z",
              "local": "2023-05-29 20:59-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2770",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHL",
              "iata": "PHL",
              "name": "Philadelphia"
            },
            "scheduledTimeLocal": "2023-05-29 23:02-07:00",
            "scheduledTimeUtc": "2023-05-30 06:02Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:02Z",
              "local": "2023-05-29 23:02-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 981",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHX",
              "iata": "PHX",
              "name": "Phoenix"
            },
            "scheduledTimeLocal": "2023-05-29 20:25-07:00",
            "scheduledTimeUtc": "2023-05-30 03:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:25Z",
              "local": "2023-05-29 20:25-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1509",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHX",
              "iata": "PHX",
              "name": "Phoenix"
            },
            "scheduledTimeLocal": "2023-05-29 21:09-07:00",
            "scheduledTimeUtc": "2023-05-30 04:09Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:09Z",
              "local": "2023-05-29 21:09-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1608",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHX",
              "iata": "PHX",
              "name": "Phoenix"
            },
            "scheduledTimeLocal": "2023-05-29 21:45-07:00",
            "scheduledTimeUtc": "2023-05-30 04:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:45Z",
              "local": "2023-05-29 21:45-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3230",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPIT",
              "iata": "PIT",
              "name": "Pittsburgh"
            },
            "scheduledTimeLocal": "2023-05-29 21:40-07:00",
            "scheduledTimeUtc": "2023-05-30 04:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:40Z",
              "local": "2023-05-29 21:40-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 656",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KRNO",
              "iata": "RNO",
              "name": "Reno"
            },
            "scheduledTimeLocal": "2023-05-29 21:15-07:00",
            "scheduledTimeUtc": "2023-05-30 04:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:15Z",
              "local": "2023-05-29 21:15-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2416",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSAN",
              "iata": "SAN",
              "name": "San Diego"
            },
            "scheduledTimeLocal": "2023-05-29 21:40-07:00",
            "scheduledTimeUtc": "2023-05-30 04:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:40Z",
              "local": "2023-05-29 21:40-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 3528",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSAN",
              "iata": "SAN",
              "name": "San Diego"
            },
            "scheduledTimeLocal": "2023-05-29 22:35-07:00",
            "scheduledTimeUtc": "2023-05-30 05:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:35Z",
              "local": "2023-05-29 22:35-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 4629",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSBA",
              "iata": "SBA",
              "name": "Santa Barbara"
            },
            "scheduledTimeLocal": "2023-05-29 22:37-07:00",
            "scheduledTimeUtc": "2023-05-30 05:37Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:37Z",
              "local": "2023-05-29 22:37-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 4796",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSBP",
              "iata": "SBP",
              "name": "San Luis Obispo"
            },
            "scheduledTimeLocal": "2023-05-29 22:36-07:00",
            "scheduledTimeUtc": "2023-05-30 05:36Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:36Z",
              "local": "2023-05-29 22:36-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 5510",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Canadair reg jet 700"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 20:45-07:00",
            "scheduledTimeUtc": "2023-05-30 03:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:45Z",
              "local": "2023-05-29 20:45-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1215",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1233",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 3393",
          "callSign": "ASA3393",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 130",
          "callSign": "SWA130",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 3305",
          "callSign": "ASA3305",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 21:59-07:00",
            "scheduledTimeUtc": "2023-05-30 04:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:59Z",
              "local": "2023-05-29 21:59-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2985",
          "callSign": "DAL2985",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1597",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSJC",
              "iata": "SJC",
              "name": "San Jose"
            },
            "scheduledTimeLocal": "2023-05-29 20:50-07:00",
            "scheduledTimeUtc": "2023-05-30 03:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:50Z",
              "local": "2023-05-29 20:50-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 668",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSLC",
              "iata": "SLC",
              "name": "Salt Lake City"
            },
            "scheduledTimeLocal": "2023-05-29 20:35-07:00",
            "scheduledTimeUtc": "2023-05-30 03:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:35Z",
              "local": "2023-05-29 20:35-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 3034",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSMF",
              "iata": "SMF",
              "name": "Sacramento"
            },
            "scheduledTimeLocal": "2023-05-29 21:05-07:00",
            "scheduledTimeUtc": "2023-05-30 04:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:05Z",
              "local": "2023-05-29 21:05-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 3711",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSMF",
              "iata": "SMF",
              "name": "Sacramento"
            },
            "scheduledTimeLocal": "2023-05-29 20:50-07:00",
            "scheduledTimeUtc": "2023-05-30 03:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:50Z",
              "local": "2023-05-29 20:50-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3253",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KTPA",
              "iata": "TPA",
              "name": "Tampa"
            },
            "scheduledTimeLocal": "2023-05-29 22:43-07:00",
            "scheduledTimeUtc": "2023-05-30 05:43Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:43Z",
              "local": "2023-05-29 22:43-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2969",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KTPA",
              "iata": "TPA",
              "name": "Tampa"
            },
            "scheduledTimeLocal": "2023-05-29 22:30-07:00",
            "scheduledTimeUtc": "2023-05-30 05:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:30Z",
              "local": "2023-05-29 22:30-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 910",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KTPA",
              "iata": "TPA",
              "name": "Tampa"
            },
            "scheduledTimeLocal": "2023-05-29 23:22-07:00",
            "scheduledTimeUtc": "2023-05-30 06:22Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:22Z",
              "local": "2023-05-29 23:22-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2018",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KTUS",
              "iata": "TUS",
              "name": "Tucson"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2458",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "LFPG",
              "iata": "CDG",
              "name": "Paris"
            },
            "scheduledTimeLocal": "2023-05-29 21:15-07:00",
            "scheduledTimeUtc": "2023-05-30 04:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:15Z",
              "local": "2023-05-29 21:15-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AF 79",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-200"
          },
          "airline": {
            "name": "Air France",
            "iata": "AF",
            "icao": "AFR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MGGT",
              "iata": "GUA",
              "name": "Guatemala City"
            },
            "scheduledTimeLocal": "2023-05-29 23:35-07:00",
            "scheduledTimeUtc": "2023-05-30 06:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:35Z",
              "local": "2023-05-29 23:35-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1897",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMUN",
              "iata": "CUN",
              "name": "Cancún"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1447",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MPTO",
              "iata": "PTY",
              "name": "Tocumen"
            },
            "scheduledTimeLocal": "2023-05-29 22:16-07:00",
            "scheduledTimeUtc": "2023-05-30 05:16Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:16Z",
              "local": "2023-05-29 22:16-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CM 362",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Copa",
            "iata": "CM",
            "icao": "CMP"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MRLB",
              "iata": "LIR",
              "name": "Liberia"
            },
            "scheduledTimeLocal": "2023-05-29 23:40-07:00",
            "scheduledTimeUtc": "2023-05-30 06:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1330",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "NFFN",
              "iata": "NAN",
              "name": "Nadi"
            },
            "scheduledTimeLocal": "2023-05-29 23:55-07:00",
            "scheduledTimeUtc": "2023-05-30 06:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:55Z",
              "local": "2023-05-29 23:55-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "FJ 811",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Fiji Airways",
            "iata": "FJ",
            "icao": "FJI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "NZAA",
              "iata": "AKL",
              "name": "Auckland"
            },
            "scheduledTimeLocal": "2023-05-29 22:00-07:00",
            "scheduledTimeUtc": "2023-05-30 05:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:00Z",
              "local": "2023-05-29 22:00-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "NZ 5",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "Air New Zealand",
            "iata": "NZ",
            "icao": "ANZ"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "NZAA",
              "iata": "AKL",
              "name": "Auckland"
            },
            "scheduledTimeLocal": "2023-05-29 23:50-07:00",
            "scheduledTimeUtc": "2023-05-30 06:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:50Z",
              "local": "2023-05-29 23:50-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 83",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "OEJN",
              "iata": "JED",
              "name": "Jeddah"
            },
            "scheduledTimeLocal": "2023-05-29 20:40-07:00",
            "actualTimeLocal": "2023-05-29 20:40-07:00",
            "scheduledTimeUtc": "2023-05-30 03:40Z",
            "actualTimeUtc": "2023-05-30 03:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:40Z",
              "local": "2023-05-29 20:40-07:00"
            },
            "revisedTime": {
              "utc": "2023-05-30 03:40Z",
              "local": "2023-05-29 20:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic",
              "Live"
            ]
          },
          "number": "SV 42",
          "callSign": "SVA042",
          "status": "Expected",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "reg": "HZ-AK43",
            "modeS": "710121",
            "model": "Boeing 777"
          },
          "airline": {
            "name": "Saudia",
            "iata": "SV",
            "icao": "SVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RKSI",
              "iata": "ICN",
              "name": "Seoul"
            },
            "scheduledTimeLocal": "2023-05-29 23:30-07:00",
            "scheduledTimeUtc": "2023-05-30 06:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:30Z",
              "local": "2023-05-29 23:30-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "KE 12",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 747-8"
          },
          "airline": {
            "name": "Korean Air",
            "iata": "KE",
            "icao": "KAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RKSI",
              "iata": "ICN",
              "name": "Seoul"
            },
            "scheduledTimeLocal": "2023-05-29 23:00-07:00",
            "scheduledTimeUtc": "2023-05-30 06:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:00Z",
              "local": "2023-05-29 23:00-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "OZ 203",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Asiana",
            "iata": "OZ",
            "icao": "AAR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RPLL",
              "iata": "MNL",
              "name": "Manila"
            },
            "scheduledTimeLocal": "2023-05-29 23:40-07:00",
            "actualTimeLocal": "2023-05-29 23:40-07:00",
            "scheduledTimeUtc": "2023-05-30 06:40Z",
            "actualTimeUtc": "2023-05-30 06:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "revisedTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic",
              "Live"
            ]
          },
          "number": "PR 103",
          "callSign": "PAL103",
          "status": "Expected",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "reg": "RP-C7775",
            "modeS": "7580EF",
            "model": "Boeing 777-300"
          },
          "airline": {
            "name": "Philippine",
            "iata": "PR",
            "icao": "PAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "SKBO",
              "iata": "BOG",
              "name": "Bogotá"
            },
            "scheduledTimeLocal": "2023-05-29 20:45-07:00",
            "scheduledTimeUtc": "2023-05-30 03:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:45Z",
              "local": "2023-05-29 20:45-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AV 83",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A330-200"
          },
          "airline": {
            "name": "SA AVIANCA",
            "iata": "AV",
            "icao": "AVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "SPJC",
              "iata": "LIM",
              "name": "Lima"
            },
            "scheduledTimeLocal": "2023-05-29 21:10-07:00",
            "scheduledTimeUtc": "2023-05-30 04:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:10Z",
              "local": "2023-05-29 21:10-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "LA 535",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-8"
          },
          "airline": {
            "name": "LATAM",
            "iata": "LA",
            "icao": "LAN"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "VHHH",
              "iata": "HKG",
              "name": "Hong Kong"
            },
            "scheduledTimeLocal": "2023-05-29 23:30-07:00",
            "scheduledTimeUtc": "2023-05-30 06:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:30Z",
              "local": "2023-05-29 23:30-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CX 883",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Cathay Pacific",
            "iata": "CX",
            "icao": "CPA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "WSSS",
              "iata": "SIN",
              "name": "Singapore"
            },
            "scheduledTimeLocal": "2023-05-29 23:40-07:00",
            "scheduledTimeUtc": "2023-05-30 06:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "SQ 37",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Singapore",
            "iata": "SQ",
            "icao": "SIA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YBBN",
              "iata": "BNE",
              "name": "Brisbane City"
            },
            "scheduledTimeLocal": "2023-05-29 21:20-07:00",
            "scheduledTimeUtc": "2023-05-30 04:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:20Z",
              "local": "2023-05-29 21:20-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "QF 16",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A330-200"
          },
          "airline": {
            "name": "Qantas",
            "iata": "QF",
            "icao": "QFA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YMML",
              "iata": "MEL",
              "name": "Melbourne City"
            },
            "scheduledTimeLocal": "2023-05-29 22:20-07:00",
            "scheduledTimeUtc": "2023-05-30 05:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:20Z",
              "local": "2023-05-29 22:20-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "QF 94",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "Qantas",
            "iata": "QF",
            "icao": "QFA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YMML",
              "iata": "MEL",
              "name": "Melbourne City"
            },
            "scheduledTimeLocal": "2023-05-29 22:40-07:00",
            "scheduledTimeUtc": "2023-05-30 05:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:40Z",
              "local": "2023-05-29 22:40-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 98",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YSSY",
              "iata": "SYD",
              "name": "Sydney City"
            },
            "scheduledTimeLocal": "2023-05-29 22:40-07:00",
            "scheduledTimeUtc": "2023-05-30 05:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:40Z",
              "local": "2023-05-29 22:40-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 41",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YSSY",
              "iata": "SYD",
              "name": "Sydney City"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 839",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YSSY",
              "iata": "SYD",
              "name": "Sydney City"
            },
            "scheduledTimeLocal": "2023-05-29 22:40-07:00",
            "scheduledTimeUtc": "2023-05-30 05:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:40Z",
              "local": "2023-05-29 22:40-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 73",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "YSSY",
              "iata": "SYD",
              "name": "Sydney City"
            },
            "scheduledTimeLocal": "2023-05-29 23:40-07:00",
            "scheduledTimeUtc": "2023-05-30 06:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "QF 12",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A380-800"
          },
          "airline": {
            "name": "Qantas",
            "iata": "QF",
            "icao": "QFA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-30 00:40-07:00",
            "scheduledTimeUtc": "2023-05-30 07:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:40Z",
              "local": "2023-05-30 00:40-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 548",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDFW",
              "iata": "DFW",
              "name": "Dallas-Fort Worth"
            },
            "scheduledTimeLocal": "2023-05-30 01:33-07:00",
            "scheduledTimeUtc": "2023-05-30 08:33Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:33Z",
              "local": "2023-05-30 01:33-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 971",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAH",
              "iata": "IAH",
              "name": "Houston"
            },
            "scheduledTimeLocal": "2023-05-30 00:55-07:00",
            "scheduledTimeUtc": "2023-05-30 07:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:55Z",
              "local": "2023-05-30 00:55-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1536",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-30 00:59-07:00",
            "scheduledTimeUtc": "2023-05-30 07:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:59Z",
              "local": "2023-05-30 00:59-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1316",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-30 00:56-07:00",
            "scheduledTimeUtc": "2023-05-30 07:56Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:56Z",
              "local": "2023-05-30 00:56-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 362",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMSP",
              "iata": "MSP",
              "name": "Minneapolis"
            },
            "scheduledTimeLocal": "2023-05-30 00:50-07:00",
            "scheduledTimeUtc": "2023-05-30 07:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:50Z",
              "local": "2023-05-30 00:50-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 868",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MGGT",
              "iata": "GUA",
              "name": "Guatemala City"
            },
            "scheduledTimeLocal": "2023-05-30 00:10-07:00",
            "scheduledTimeUtc": "2023-05-30 07:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:10Z",
              "local": "2023-05-30 00:10-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Q6 4093",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Volaris Costa Rica",
            "iata": "Q6",
            "icao": "VOC"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-30 00:43-07:00",
            "scheduledTimeUtc": "2023-05-30 07:43Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:43Z",
              "local": "2023-05-30 00:43-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 919",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-30 00:50-07:00",
            "scheduledTimeUtc": "2023-05-30 07:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:50Z",
              "local": "2023-05-30 00:50-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "VB 519",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "VivaAerobus",
            "iata": "VB",
            "icao": "VIV"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-30 01:10-07:00",
            "scheduledTimeUtc": "2023-05-30 08:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:10Z",
              "local": "2023-05-30 01:10-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 917",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMLO",
              "iata": "BJX",
              "name": "Silao"
            },
            "scheduledTimeLocal": "2023-05-30 00:50-07:00",
            "scheduledTimeUtc": "2023-05-30 07:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:50Z",
              "local": "2023-05-30 00:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 899",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMMM",
              "iata": "MLM",
              "name": "Morelia"
            },
            "scheduledTimeLocal": "2023-05-30 00:43-07:00",
            "scheduledTimeUtc": "2023-05-30 07:43Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:43Z",
              "local": "2023-05-30 00:43-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 921",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMMX",
              "iata": "MEX",
              "name": "Mexico City"
            },
            "scheduledTimeLocal": "2023-05-30 00:10-07:00",
            "scheduledTimeUtc": "2023-05-30 07:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:10Z",
              "local": "2023-05-30 00:10-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "VB 147",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "VivaAerobus",
            "iata": "VB",
            "icao": "VIV"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MPTO",
              "iata": "PTY",
              "name": "Tocumen"
            },
            "scheduledTimeLocal": "2023-05-30 01:54-07:00",
            "scheduledTimeUtc": "2023-05-30 08:54Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:54Z",
              "local": "2023-05-30 01:54-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CM 303",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Copa",
            "iata": "CM",
            "icao": "CMP"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MPTO",
              "iata": "PTY",
              "name": "Tocumen"
            },
            "scheduledTimeLocal": "2023-05-30 02:04-07:00",
            "scheduledTimeUtc": "2023-05-30 09:04Z",
            "scheduledTime": {
              "utc": "2023-05-30 09:04Z",
              "local": "2023-05-30 02:04-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CM 473",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Copa",
            "iata": "CM",
            "icao": "CMP"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MSLP",
              "iata": "SAL",
              "name": "Santa Clara"
            },
            "scheduledTimeLocal": "2023-05-30 00:05-07:00",
            "scheduledTimeUtc": "2023-05-30 07:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:05Z",
              "local": "2023-05-30 00:05-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AV 521",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "SA AVIANCA",
            "iata": "AV",
            "icao": "AVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MSLP",
              "iata": "SAL",
              "name": "Santa Clara"
            },
            "scheduledTimeLocal": "2023-05-30 01:00-07:00",
            "scheduledTimeUtc": "2023-05-30 08:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:00Z",
              "local": "2023-05-30 01:00-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AV 529",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "SA AVIANCA",
            "iata": "AV",
            "icao": "AVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-30 00:15-07:00",
            "scheduledTimeUtc": "2023-05-30 07:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:15Z",
              "local": "2023-05-30 00:15-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "BR 11",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "EVA Air",
            "iata": "BR",
            "icao": "EVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-30 00:50-07:00",
            "scheduledTimeUtc": "2023-05-30 07:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:50Z",
              "local": "2023-05-30 00:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "BR 15",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "EVA Air",
            "iata": "BR",
            "icao": "EVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-30 00:05-07:00",
            "scheduledTimeUtc": "2023-05-30 07:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:05Z",
              "local": "2023-05-30 00:05-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CI 7",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "China",
            "iata": "CI",
            "icao": "CAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-30 00:50-07:00",
            "scheduledTimeUtc": "2023-05-30 07:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:50Z",
              "local": "2023-05-30 00:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "JX 1",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Starlux",
            "iata": "JX",
            "icao": "SJX"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RJTT",
              "iata": "HND",
              "name": "Tokyo"
            },
            "scheduledTimeLocal": "2023-05-30 00:50-07:00",
            "scheduledTimeUtc": "2023-05-30 07:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:50Z",
              "local": "2023-05-30 00:50-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 169",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-8"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RJTT",
              "iata": "HND",
              "name": "Tokyo"
            },
            "scheduledTimeLocal": "2023-05-30 01:20-07:00",
            "scheduledTimeUtc": "2023-05-30 08:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:20Z",
              "local": "2023-05-30 01:20-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "NH 105",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "VHHH",
              "iata": "HKG",
              "name": "Hong Kong"
            },
            "scheduledTimeLocal": "2023-05-30 00:30-07:00",
            "scheduledTimeUtc": "2023-05-30 07:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:30Z",
              "local": "2023-05-30 00:30-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CX 881",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "Cathay Pacific",
            "iata": "CX",
            "icao": "CPA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "ZSNJ",
              "iata": "NKG",
              "name": "Nanjing"
            },
            "scheduledTimeLocal": "2023-05-30 00:40-07:00",
            "scheduledTimeUtc": "2023-05-30 07:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:40Z",
              "local": "2023-05-30 00:40-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "Y8 7492",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 747 Cargo"
          },
          "airline": {
            "name": "Suparna",
            "iata": "Y8",
            "icao": "YZR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "ZSPD",
              "iata": "PVG",
              "name": "Shanghai"
            },
            "scheduledTimeLocal": "2023-05-30 00:25-07:00",
            "scheduledTimeUtc": "2023-05-30 07:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:25Z",
              "local": "2023-05-30 00:25-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "Y8 7408",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 747 Cargo"
          },
          "airline": {
            "name": "Suparna",
            "iata": "Y8",
            "icao": "YZR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "ZSPD",
              "iata": "PVG",
              "name": "Shanghai"
            },
            "scheduledTimeLocal": "2023-05-30 00:45-07:00",
            "scheduledTimeUtc": "2023-05-30 07:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:45Z",
              "local": "2023-05-30 00:45-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "Y8 7460",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 747 Cargo"
          },
          "airline": {
            "name": "Suparna",
            "iata": "Y8",
            "icao": "YZR"
          }
        }
      ],
      "arrivals": [
        {
          "movement": {
            "airport": {
              "icao": "RPLL",
              "iata": "MNL",
              "name": "Manila"
            },
            "scheduledTimeLocal": "2023-05-29 19:50-07:00",
            "actualTimeLocal": "2023-05-29 21:31-07:00",
            "scheduledTimeUtc": "2023-05-30 02:50Z",
            "actualTimeUtc": "2023-05-30 04:31Z",
            "scheduledTime": {
              "utc": "2023-05-30 02:50Z",
              "local": "2023-05-29 19:50-07:00"
            },
            "revisedTime": {
              "utc": "2023-05-30 04:31Z",
              "local": "2023-05-29 21:31-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic",
              "Live"
            ]
          },
          "number": "PR 102",
          "callSign": "PAL112",
          "status": "Expected",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "reg": "RP-C7773",
            "modeS": "75827B",
            "model": "Boeing 777-300"
          },
          "airline": {
            "name": "Philippine",
            "iata": "PR",
            "icao": "PAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 20:20-07:00",
            "scheduledTimeUtc": "2023-05-30 03:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:20Z",
              "local": "2023-05-29 20:20-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 135",
          "callSign": "AAL135",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "N729AN",
            "modeS": "A9C508",
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBNA",
              "iata": "BNA",
              "name": "Nashville"
            },
            "scheduledTimeLocal": "2023-05-29 20:57-07:00",
            "scheduledTimeUtc": "2023-05-30 03:57Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:57Z",
              "local": "2023-05-29 20:57-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 1409",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 20:31-07:00",
            "scheduledTimeUtc": "2023-05-30 03:31Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:31Z",
              "local": "2023-05-29 20:31-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2364",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDFW",
              "iata": "DFW",
              "name": "Dallas-Fort Worth"
            },
            "scheduledTimeLocal": "2023-05-29 20:22-07:00",
            "scheduledTimeUtc": "2023-05-30 03:22Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:22Z",
              "local": "2023-05-29 20:22-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 779",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-8"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "CYUL",
              "iata": "YUL",
              "name": "Montréal"
            },
            "scheduledTimeLocal": "2023-05-29 20:34-07:00",
            "scheduledTimeUtc": "2023-05-30 03:34Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:34Z",
              "local": "2023-05-29 20:34-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AC 779",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Air Canada",
            "iata": "AC",
            "icao": "ACA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "CYYZ",
              "iata": "YYZ",
              "name": "Toronto"
            },
            "scheduledTimeLocal": "2023-05-29 20:59-07:00",
            "scheduledTimeUtc": "2023-05-30 03:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:59Z",
              "local": "2023-05-29 20:59-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AC 793",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Air Canada",
            "iata": "AC",
            "icao": "ACA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 20:50-07:00",
            "scheduledTimeUtc": "2023-05-30 03:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:50Z",
              "local": "2023-05-29 20:50-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1054",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMUN",
              "iata": "CUN",
              "name": "Cancún"
            },
            "scheduledTimeLocal": "2023-05-29 20:36-07:00",
            "scheduledTimeUtc": "2023-05-30 03:36Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:36Z",
              "local": "2023-05-29 20:36-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 441",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 20:36-07:00",
            "scheduledTimeUtc": "2023-05-30 03:36Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:36Z",
              "local": "2023-05-29 20:36-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 807",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "BR 16",
          "callSign": "EVA016",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "B-16705",
            "modeS": "8990D4",
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "EVA Air",
            "iata": "BR",
            "icao": "EVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-29 20:50-07:00",
            "scheduledTimeUtc": "2023-05-30 03:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:50Z",
              "local": "2023-05-29 20:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CI 8",
          "callSign": "CAL008",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "B-18001",
            "modeS": "89901B",
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "China",
            "iata": "CI",
            "icao": "CAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 20:59-07:00",
            "scheduledTimeUtc": "2023-05-30 03:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:59Z",
              "local": "2023-05-29 20:59-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2291",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDTW",
              "iata": "DTW",
              "name": "Detroit"
            },
            "scheduledTimeLocal": "2023-05-29 20:41-07:00",
            "scheduledTimeUtc": "2023-05-30 03:41Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:41Z",
              "local": "2023-05-29 20:41-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 302",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHOG",
              "iata": "OGG",
              "name": "Kahului"
            },
            "scheduledTimeLocal": "2023-05-29 20:54-07:00",
            "scheduledTimeUtc": "2023-05-30 03:54Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:54Z",
              "local": "2023-05-29 20:54-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 355",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KOAK",
              "iata": "OAK",
              "name": "Oakland"
            },
            "scheduledTimeLocal": "2023-05-29 20:35-07:00",
            "scheduledTimeUtc": "2023-05-30 03:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:35Z",
              "local": "2023-05-29 20:35-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 3859",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "Albukerke"
            },
            "scheduledTimeLocal": "2023-05-29 20:17-07:00",
            "scheduledTimeUtc": "2023-05-30 03:17Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:17Z",
              "local": "2023-05-29 20:17-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 4010",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBNA",
              "iata": "BNA",
              "name": "Nashville"
            },
            "scheduledTimeLocal": "2023-05-29 20:47-07:00",
            "scheduledTimeUtc": "2023-05-30 03:47Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:47Z",
              "local": "2023-05-29 20:47-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 449",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMSP",
              "iata": "MSP",
              "name": "Minneapolis"
            },
            "scheduledTimeLocal": "2023-05-29 20:40-07:00",
            "scheduledTimeUtc": "2023-05-30 03:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:40Z",
              "local": "2023-05-29 20:40-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 748",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 20:27-07:00",
            "scheduledTimeUtc": "2023-05-30 03:27Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:27Z",
              "local": "2023-05-29 20:27-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 897",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHOG",
              "iata": "OGG",
              "name": "Kahului"
            },
            "scheduledTimeLocal": "2023-05-29 20:55-07:00",
            "scheduledTimeUtc": "2023-05-30 03:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:55Z",
              "local": "2023-05-29 20:55-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "HA 34",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A330-200"
          },
          "airline": {
            "name": "Hawaiian",
            "iata": "HA",
            "icao": "HAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "RCTP",
              "iata": "TPE",
              "name": "Taipei"
            },
            "scheduledTimeLocal": "2023-05-29 20:30-07:00",
            "scheduledTimeUtc": "2023-05-30 03:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:30Z",
              "local": "2023-05-29 20:30-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "JX 2",
          "callSign": "SJX002",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "B-58502",
            "modeS": "8991E5",
            "model": "Airbus A350-900"
          },
          "airline": {
            "name": "Starlux",
            "iata": "JX",
            "icao": "SJX"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 20:40-07:00",
            "scheduledTimeUtc": "2023-05-30 03:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:40Z",
              "local": "2023-05-29 20:40-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1200",
          "callSign": "UAL1200",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 20:34-07:00",
            "scheduledTimeUtc": "2023-05-30 03:34Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:34Z",
              "local": "2023-05-29 20:34-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1368",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAD",
              "iata": "IAD",
              "name": "District of Columbia"
            },
            "scheduledTimeLocal": "2023-05-29 20:39-07:00",
            "scheduledTimeUtc": "2023-05-30 03:39Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:39Z",
              "local": "2023-05-29 20:39-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2276",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 20:52-07:00",
            "scheduledTimeUtc": "2023-05-30 03:52Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:52Z",
              "local": "2023-05-29 20:52-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2339",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 20:40-07:00",
            "scheduledTimeUtc": "2023-05-30 03:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:40Z",
              "local": "2023-05-29 20:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "VS 23",
          "callSign": "VIR23X",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "G-VWOO",
            "modeS": "4072EA",
            "model": "Boeing 787-9"
          },
          "airline": {
            "name": "Virgin Atlantic",
            "iata": "VS",
            "icao": "VIR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 20:50-07:00",
            "scheduledTimeUtc": "2023-05-30 03:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:50Z",
              "local": "2023-05-29 20:50-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 2803",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPIT",
              "iata": "PIT",
              "name": "Pittsburgh"
            },
            "scheduledTimeLocal": "2023-05-29 20:41-07:00",
            "scheduledTimeUtc": "2023-05-30 03:41Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:41Z",
              "local": "2023-05-29 20:41-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 653",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHKO",
              "iata": "KOA",
              "name": "Kailua/Kona"
            },
            "scheduledTimeLocal": "2023-05-29 20:30-07:00",
            "scheduledTimeUtc": "2023-05-30 03:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:30Z",
              "local": "2023-05-29 20:30-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2416",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KOAK",
              "iata": "OAK",
              "name": "Oakland"
            },
            "scheduledTimeLocal": "2023-05-29 20:35-07:00",
            "scheduledTimeUtc": "2023-05-30 03:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:35Z",
              "local": "2023-05-29 20:35-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2832",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHLI",
              "iata": "LIH",
              "name": "Lihue"
            },
            "scheduledTimeLocal": "2023-05-29 20:50-07:00",
            "scheduledTimeUtc": "2023-05-30 03:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 03:50Z",
              "local": "2023-05-29 20:50-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3230",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 21:05-07:00",
            "scheduledTimeUtc": "2023-05-30 04:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:05Z",
              "local": "2023-05-29 21:05-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 1181",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHNL",
              "iata": "HNL",
              "name": "Honolulu"
            },
            "scheduledTimeLocal": "2023-05-29 21:57-07:00",
            "scheduledTimeUtc": "2023-05-30 04:57Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:57Z",
              "local": "2023-05-29 21:57-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 162",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHX",
              "iata": "PHX",
              "name": "Phoenix"
            },
            "scheduledTimeLocal": "2023-05-29 21:49-07:00",
            "scheduledTimeUtc": "2023-05-30 04:49Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:49Z",
              "local": "2023-05-29 21:49-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2001",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHL",
              "iata": "PHL",
              "name": "Philadelphia"
            },
            "scheduledTimeLocal": "2023-05-29 21:36-07:00",
            "scheduledTimeUtc": "2023-05-30 04:36Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:36Z",
              "local": "2023-05-29 21:36-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2004",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSTL",
              "iata": "STL",
              "name": "Saint Louis"
            },
            "scheduledTimeLocal": "2023-05-29 21:45-07:00",
            "scheduledTimeUtc": "2023-05-30 04:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:45Z",
              "local": "2023-05-29 21:45-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2473",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "Dallas"
            },
            "scheduledTimeLocal": "2023-05-29 21:59-07:00",
            "scheduledTimeUtc": "2023-05-30 04:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:59Z",
              "local": "2023-05-29 21:59-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2697",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-29 21:16-07:00",
            "scheduledTimeUtc": "2023-05-30 04:16Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:16Z",
              "local": "2023-05-29 21:16-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 327",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KFLL",
              "iata": "FLL",
              "name": "Fort Lauderdale"
            },
            "scheduledTimeLocal": "2023-05-29 21:46-07:00",
            "scheduledTimeUtc": "2023-05-30 04:46Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:46Z",
              "local": "2023-05-29 21:46-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 345",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KELP",
              "iata": "ELP",
              "name": "El Paso"
            },
            "scheduledTimeLocal": "2023-05-29 21:13-07:00",
            "scheduledTimeUtc": "2023-05-30 04:13Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:13Z",
              "local": "2023-05-29 21:13-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 4877",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 21:29-07:00",
            "scheduledTimeUtc": "2023-05-30 04:29Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:29Z",
              "local": "2023-05-29 21:29-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 4882",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPDX",
              "iata": "PDX",
              "name": "Portland"
            },
            "scheduledTimeLocal": "2023-05-29 21:12-07:00",
            "scheduledTimeUtc": "2023-05-30 04:12Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:12Z",
              "local": "2023-05-29 21:12-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 4900",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 21:49-07:00",
            "scheduledTimeUtc": "2023-05-30 04:49Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:49Z",
              "local": "2023-05-29 21:49-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 496",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPDX",
              "iata": "PDX",
              "name": "Portland"
            },
            "scheduledTimeLocal": "2023-05-29 21:24-07:00",
            "scheduledTimeUtc": "2023-05-30 04:24Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:24Z",
              "local": "2023-05-29 21:24-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1208",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSTS",
              "iata": "STS",
              "name": "Santa Rosa"
            },
            "scheduledTimeLocal": "2023-05-29 21:07-07:00",
            "scheduledTimeUtc": "2023-05-30 04:07Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:07Z",
              "local": "2023-05-29 21:07-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 3365",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 21:30-07:00",
            "scheduledTimeUtc": "2023-05-30 04:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:30Z",
              "local": "2023-05-29 21:30-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1279",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSLC",
              "iata": "SLC",
              "name": "Salt Lake City"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1731",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KAUS",
              "iata": "AUS",
              "name": "Austin"
            },
            "scheduledTimeLocal": "2023-05-29 21:03-07:00",
            "scheduledTimeUtc": "2023-05-30 04:03Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:03Z",
              "local": "2023-05-29 21:03-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1297",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMEM",
              "iata": "MEM",
              "name": "Memphis"
            },
            "scheduledTimeLocal": "2023-05-29 21:25-07:00",
            "scheduledTimeUtc": "2023-05-30 04:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:25Z",
              "local": "2023-05-29 21:25-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1350",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 21:12-07:00",
            "scheduledTimeUtc": "2023-05-30 04:12Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:12Z",
              "local": "2023-05-29 21:12-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2004",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 21:35-07:00",
            "scheduledTimeUtc": "2023-05-30 04:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:35Z",
              "local": "2023-05-29 21:35-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2054",
          "callSign": "DAL2054",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KABQ",
              "iata": "ABQ",
              "name": "The Duke City"
            },
            "scheduledTimeLocal": "2023-05-29 21:00-07:00",
            "scheduledTimeUtc": "2023-05-30 04:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:00Z",
              "local": "2023-05-29 21:00-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 4126",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHNL",
              "iata": "HNL",
              "name": "Honolulu"
            },
            "scheduledTimeLocal": "2023-05-29 21:00-07:00",
            "scheduledTimeUtc": "2023-05-30 04:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:00Z",
              "local": "2023-05-29 21:00-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 480",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMUN",
              "iata": "CUN",
              "name": "Cancún"
            },
            "scheduledTimeLocal": "2023-05-29 21:24-07:00",
            "scheduledTimeUtc": "2023-05-30 04:24Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:24Z",
              "local": "2023-05-29 21:24-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 614",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 21:40-07:00",
            "scheduledTimeUtc": "2023-05-30 04:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:40Z",
              "local": "2023-05-29 21:40-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 966",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 21:35-07:00",
            "scheduledTimeUtc": "2023-05-30 04:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:35Z",
              "local": "2023-05-29 21:35-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 985",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBWI",
              "iata": "BWI",
              "name": "Baltimore"
            },
            "scheduledTimeLocal": "2023-05-29 21:20-07:00",
            "scheduledTimeUtc": "2023-05-30 04:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:20Z",
              "local": "2023-05-29 21:20-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 141",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KAUS",
              "iata": "AUS",
              "name": "Austin"
            },
            "scheduledTimeLocal": "2023-05-29 21:58-07:00",
            "scheduledTimeUtc": "2023-05-30 04:58Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:58Z",
              "local": "2023-05-29 21:58-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 2455",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHX",
              "iata": "PHX",
              "name": "Phoenix"
            },
            "scheduledTimeLocal": "2023-05-29 21:41-07:00",
            "scheduledTimeUtc": "2023-05-30 04:41Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:41Z",
              "local": "2023-05-29 21:41-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1892",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAH",
              "iata": "IAH",
              "name": "Houston"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2236",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 21:47-07:00",
            "scheduledTimeUtc": "2023-05-30 04:47Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:47Z",
              "local": "2023-05-29 21:47-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 333",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-200"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 391",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHLI",
              "iata": "LIH",
              "name": "Lihue"
            },
            "scheduledTimeLocal": "2023-05-29 21:33-07:00",
            "scheduledTimeUtc": "2023-05-30 04:33Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:33Z",
              "local": "2023-05-29 21:33-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 466",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 21:53-07:00",
            "scheduledTimeUtc": "2023-05-30 04:53Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:53Z",
              "local": "2023-05-29 21:53-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 512",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSAN",
              "iata": "SAN",
              "name": "San Diego"
            },
            "scheduledTimeLocal": "2023-05-29 21:23-07:00",
            "scheduledTimeUtc": "2023-05-30 04:23Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:23Z",
              "local": "2023-05-29 21:23-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 5462",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSMF",
              "iata": "SMF",
              "name": "Sacramento"
            },
            "scheduledTimeLocal": "2023-05-29 21:41-07:00",
            "scheduledTimeUtc": "2023-05-30 04:41Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:41Z",
              "local": "2023-05-29 21:41-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 5496",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Canadair reg jet 700"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHOG",
              "iata": "OGG",
              "name": "Kahului"
            },
            "scheduledTimeLocal": "2023-05-29 21:28-07:00",
            "scheduledTimeUtc": "2023-05-30 04:28Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:28Z",
              "local": "2023-05-29 21:28-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 706",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHNL",
              "iata": "HNL",
              "name": "Honolulu"
            },
            "scheduledTimeLocal": "2023-05-29 21:25-07:00",
            "scheduledTimeUtc": "2023-05-30 04:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:25Z",
              "local": "2023-05-29 21:25-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 136",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KRNO",
              "iata": "RNO",
              "name": "Reno"
            },
            "scheduledTimeLocal": "2023-05-29 21:40-07:00",
            "scheduledTimeUtc": "2023-05-30 04:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:40Z",
              "local": "2023-05-29 21:40-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1937",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "WSSS",
              "iata": "SIN",
              "name": "Singapore"
            },
            "scheduledTimeLocal": "2023-05-29 21:40-07:00",
            "actualTimeLocal": "2023-05-29 20:58-07:00",
            "scheduledTimeUtc": "2023-05-30 04:40Z",
            "actualTimeUtc": "2023-05-30 03:58Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:40Z",
              "local": "2023-05-29 21:40-07:00"
            },
            "revisedTime": {
              "utc": "2023-05-30 03:58Z",
              "local": "2023-05-29 20:58-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic",
              "Live"
            ]
          },
          "number": "SQ 38",
          "callSign": "SIA38",
          "status": "Expected",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "reg": "9V-SWQ",
            "modeS": "76CEF1",
            "model": "Boeing 777-300"
          },
          "airline": {
            "name": "Singapore",
            "iata": "SQ",
            "icao": "SIA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHKO",
              "iata": "KOA",
              "name": "Kailua/Kona"
            },
            "scheduledTimeLocal": "2023-05-29 21:45-07:00",
            "scheduledTimeUtc": "2023-05-30 04:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:45Z",
              "local": "2023-05-29 21:45-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1205",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHNL",
              "iata": "HNL",
              "name": "Honolulu"
            },
            "scheduledTimeLocal": "2023-05-29 21:24-07:00",
            "scheduledTimeUtc": "2023-05-30 04:24Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:24Z",
              "local": "2023-05-29 21:24-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1231",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 777"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMUN",
              "iata": "CUN",
              "name": "Cancún"
            },
            "scheduledTimeLocal": "2023-05-29 21:05-07:00",
            "scheduledTimeUtc": "2023-05-30 04:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:05Z",
              "local": "2023-05-29 21:05-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1277",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCI",
              "iata": "MCI",
              "name": "Kansas City"
            },
            "scheduledTimeLocal": "2023-05-29 21:50-07:00",
            "scheduledTimeUtc": "2023-05-30 04:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:50Z",
              "local": "2023-05-29 21:50-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 913",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3610",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 21:30-07:00",
            "scheduledTimeUtc": "2023-05-30 04:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:30Z",
              "local": "2023-05-29 21:30-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 5998",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSJC",
              "iata": "SJC",
              "name": "San Jose"
            },
            "scheduledTimeLocal": "2023-05-29 21:55-07:00",
            "scheduledTimeUtc": "2023-05-30 04:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:55Z",
              "local": "2023-05-29 21:55-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 709",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "CYYC",
              "iata": "YYC",
              "name": "Calgary"
            },
            "scheduledTimeLocal": "2023-05-29 21:34-07:00",
            "scheduledTimeUtc": "2023-05-30 04:34Z",
            "scheduledTime": {
              "utc": "2023-05-30 04:34Z",
              "local": "2023-05-29 21:34-07:00"
            },
            "terminal": "2",
            "quality": [
              "Basic"
            ]
          },
          "number": "WS 1512",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "WestJet",
            "iata": "WS",
            "icao": "WJA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-29 22:20-07:00",
            "scheduledTimeUtc": "2023-05-30 05:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:20Z",
              "local": "2023-05-29 22:20-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "6R 300",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A300"
          },
          "airline": {
            "name": "Alrosa",
            "iata": "6R",
            "icao": "DRU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCLT",
              "iata": "CLT",
              "name": "Charlotte"
            },
            "scheduledTimeLocal": "2023-05-29 22:38-07:00",
            "scheduledTimeUtc": "2023-05-30 05:38Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:38Z",
              "local": "2023-05-29 22:38-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2113",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHOG",
              "iata": "OGG",
              "name": "Kahului"
            },
            "scheduledTimeLocal": "2023-05-29 22:03-07:00",
            "scheduledTimeUtc": "2023-05-30 05:03Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:03Z",
              "local": "2023-05-29 22:03-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 212",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-29 22:20-07:00",
            "scheduledTimeUtc": "2023-05-30 05:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:20Z",
              "local": "2023-05-29 22:20-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2289",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KAUS",
              "iata": "AUS",
              "name": "Austin"
            },
            "scheduledTimeLocal": "2023-05-29 22:34-07:00",
            "scheduledTimeUtc": "2023-05-30 05:34Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:34Z",
              "local": "2023-05-29 22:34-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 1086",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "EGLL",
              "iata": "LHR",
              "name": "London"
            },
            "scheduledTimeLocal": "2023-05-29 22:11-07:00",
            "scheduledTimeUtc": "2023-05-30 05:11Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:11Z",
              "local": "2023-05-29 22:11-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 139",
          "callSign": "AAL139",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "N790AN",
            "modeS": "AAB812",
            "model": "Boeing 777-200"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAH",
              "iata": "IAH",
              "name": "Houston"
            },
            "scheduledTimeLocal": "2023-05-29 22:14-07:00",
            "scheduledTimeUtc": "2023-05-30 05:14Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:14Z",
              "local": "2023-05-29 22:14-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 4899",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "CYYZ",
              "iata": "YYZ",
              "name": "Toronto"
            },
            "scheduledTimeLocal": "2023-05-29 22:59-07:00",
            "scheduledTimeUtc": "2023-05-30 05:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:59Z",
              "local": "2023-05-29 22:59-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AC 795",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Air Canada",
            "iata": "AC",
            "icao": "ACA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMMX",
              "iata": "MEX",
              "name": "Mexico City"
            },
            "scheduledTimeLocal": "2023-05-29 22:25-07:00",
            "scheduledTimeUtc": "2023-05-30 05:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:25Z",
              "local": "2023-05-29 22:25-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AM 648",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Aeromexico",
            "iata": "AM",
            "icao": "AMX"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 22:40-07:00",
            "scheduledTimeUtc": "2023-05-30 05:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:40Z",
              "local": "2023-05-29 22:40-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1224",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMSD",
              "iata": "SJD",
              "name": "San José del Cabo"
            },
            "scheduledTimeLocal": "2023-05-29 22:26-07:00",
            "scheduledTimeUtc": "2023-05-30 05:26Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:26Z",
              "local": "2023-05-29 22:26-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1389",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAD",
              "iata": "IAD",
              "name": "District of Columbia"
            },
            "scheduledTimeLocal": "2023-05-29 22:32-07:00",
            "scheduledTimeUtc": "2023-05-30 05:32Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:32Z",
              "local": "2023-05-29 22:32-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 309",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 22:02-07:00",
            "scheduledTimeUtc": "2023-05-30 05:02Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:02Z",
              "local": "2023-05-29 22:02-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 3412",
          "callSign": "ASA3412",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MSLP",
              "iata": "SAL",
              "name": "Santa Clara"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AV 520",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "SA AVIANCA",
            "iata": "AV",
            "icao": "AVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 22:40-07:00",
            "scheduledTimeUtc": "2023-05-30 05:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:40Z",
              "local": "2023-05-29 22:40-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 131",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 22:16-07:00",
            "scheduledTimeUtc": "2023-05-30 05:16Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:16Z",
              "local": "2023-05-29 22:16-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 187",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KFLL",
              "iata": "FLL",
              "name": "Fort Lauderdale"
            },
            "scheduledTimeLocal": "2023-05-29 22:48-07:00",
            "scheduledTimeUtc": "2023-05-30 05:48Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:48Z",
              "local": "2023-05-29 22:48-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 2501",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "VHHH",
              "iata": "HKG",
              "name": "Hong Kong"
            },
            "scheduledTimeLocal": "2023-05-29 22:15-07:00",
            "scheduledTimeUtc": "2023-05-30 05:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:15Z",
              "local": "2023-05-29 22:15-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CX 880",
          "callSign": "CPA880",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "reg": "B-KPI",
            "modeS": "780220",
            "model": "Boeing 777-300ER"
          },
          "airline": {
            "name": "Cathay Pacific",
            "iata": "CX",
            "icao": "CPA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 22:05-07:00",
            "scheduledTimeUtc": "2023-05-30 05:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:05Z",
              "local": "2023-05-29 22:05-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1312",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSLC",
              "iata": "SLC",
              "name": "Salt Lake City"
            },
            "scheduledTimeLocal": "2023-05-29 22:17-07:00",
            "scheduledTimeUtc": "2023-05-30 05:17Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:17Z",
              "local": "2023-05-29 22:17-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2167",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPDX",
              "iata": "PDX",
              "name": "Portland"
            },
            "scheduledTimeLocal": "2023-05-29 22:25-07:00",
            "scheduledTimeUtc": "2023-05-30 05:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:25Z",
              "local": "2023-05-29 22:25-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 2459",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 22:37-07:00",
            "scheduledTimeUtc": "2023-05-30 05:37Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:37Z",
              "local": "2023-05-29 22:37-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 429",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 22:10-07:00",
            "scheduledTimeUtc": "2023-05-30 05:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:10Z",
              "local": "2023-05-29 22:10-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 509",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-200"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-29 22:55-07:00",
            "scheduledTimeUtc": "2023-05-30 05:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:55Z",
              "local": "2023-05-29 22:55-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 715",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCO",
              "iata": "MCO",
              "name": "Orlando"
            },
            "scheduledTimeLocal": "2023-05-29 22:09-07:00",
            "scheduledTimeUtc": "2023-05-30 05:09Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:09Z",
              "local": "2023-05-29 22:09-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 867",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMSY",
              "iata": "MSY",
              "name": "New Orleans"
            },
            "scheduledTimeLocal": "2023-05-29 22:12-07:00",
            "scheduledTimeUtc": "2023-05-30 05:12Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:12Z",
              "local": "2023-05-29 22:12-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 936",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KTPA",
              "iata": "TPA",
              "name": "Tampa"
            },
            "scheduledTimeLocal": "2023-05-29 22:19-07:00",
            "scheduledTimeUtc": "2023-05-30 05:19Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:19Z",
              "local": "2023-05-29 22:19-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 940",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMFR",
              "iata": "MFR",
              "name": "Medford"
            },
            "scheduledTimeLocal": "2023-05-29 22:11-07:00",
            "scheduledTimeUtc": "2023-05-30 05:11Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:11Z",
              "local": "2023-05-29 22:11-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "G4 763",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Allegiant Air",
            "iata": "G4",
            "icao": "AAY"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KCVG",
              "iata": "CVG",
              "name": "Cincinnati"
            },
            "scheduledTimeLocal": "2023-05-29 22:21-07:00",
            "scheduledTimeUtc": "2023-05-30 05:21Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:21Z",
              "local": "2023-05-29 22:21-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "G4 772",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Allegiant Air",
            "iata": "G4",
            "icao": "AAY"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSGF",
              "iata": "SGF",
              "name": "Springfield"
            },
            "scheduledTimeLocal": "2023-05-29 22:40-07:00",
            "scheduledTimeUtc": "2023-05-30 05:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:40Z",
              "local": "2023-05-29 22:40-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "G4 784",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Allegiant Air",
            "iata": "G4",
            "icao": "AAY"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHLI",
              "iata": "LIH",
              "name": "Lihue"
            },
            "scheduledTimeLocal": "2023-05-29 22:30-07:00",
            "scheduledTimeUtc": "2023-05-30 05:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:30Z",
              "local": "2023-05-29 22:30-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "HA 64",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Hawaiian",
            "iata": "HA",
            "icao": "HAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 22:13-07:00",
            "scheduledTimeUtc": "2023-05-30 05:13Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:13Z",
              "local": "2023-05-29 22:13-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 1786",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MGGT",
              "iata": "GUA",
              "name": "Guatemala City"
            },
            "scheduledTimeLocal": "2023-05-29 22:50-07:00",
            "scheduledTimeUtc": "2023-05-30 05:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:50Z",
              "local": "2023-05-29 22:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Q6 4092",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Volaris Costa Rica",
            "iata": "Q6",
            "icao": "VOC"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "Montreal"
            },
            "scheduledTimeLocal": "2023-05-29 22:35-07:00",
            "scheduledTimeUtc": "2023-05-30 05:35Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:35Z",
              "local": "2023-05-29 22:35-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "TS 240",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Air Transat",
            "iata": "TS",
            "icao": "TSC"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-29 22:25-07:00",
            "scheduledTimeUtc": "2023-05-30 05:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:25Z",
              "local": "2023-05-29 22:25-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2110",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 621",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-200"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSMF",
              "iata": "SMF",
              "name": "Sacramento"
            },
            "scheduledTimeLocal": "2023-05-29 22:10-07:00",
            "scheduledTimeUtc": "2023-05-30 05:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:10Z",
              "local": "2023-05-29 22:10-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1978",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMCI",
              "iata": "MCI",
              "name": "Kansas City"
            },
            "scheduledTimeLocal": "2023-05-29 22:30-07:00",
            "scheduledTimeUtc": "2023-05-30 05:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:30Z",
              "local": "2023-05-29 22:30-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1981",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KOAK",
              "iata": "OAK",
              "name": "Oakland"
            },
            "scheduledTimeLocal": "2023-05-29 22:25-07:00",
            "scheduledTimeUtc": "2023-05-30 05:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:25Z",
              "local": "2023-05-29 22:25-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2566",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 22:20-07:00",
            "scheduledTimeUtc": "2023-05-30 05:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:20Z",
              "local": "2023-05-29 22:20-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2627",
          "callSign": "SWA2627",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KAUS",
              "iata": "AUS",
              "name": "Austin"
            },
            "scheduledTimeLocal": "2023-05-29 22:00-07:00",
            "scheduledTimeUtc": "2023-05-30 05:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:00Z",
              "local": "2023-05-29 22:00-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3499",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "ZSNJ",
              "iata": "NKG",
              "name": "Nanjing"
            },
            "scheduledTimeLocal": "2023-05-29 22:10-07:00",
            "scheduledTimeUtc": "2023-05-30 05:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:10Z",
              "local": "2023-05-29 22:10-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "Y8 7491",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 747 Cargo"
          },
          "airline": {
            "name": "Suparna",
            "iata": "Y8",
            "icao": "YZR"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-29 23:58-07:00",
            "scheduledTimeUtc": "2023-05-30 06:58Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:58Z",
              "local": "2023-05-29 23:58-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 117",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMMX",
              "iata": "MEX",
              "name": "Mexico City"
            },
            "scheduledTimeLocal": "2023-05-29 22:55-07:00",
            "scheduledTimeUtc": "2023-05-30 05:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:55Z",
              "local": "2023-05-29 22:55-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "VB 146",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "VivaAerobus",
            "iata": "VB",
            "icao": "VIV"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBNA",
              "iata": "BNA",
              "name": "Nashville"
            },
            "scheduledTimeLocal": "2023-05-29 22:45-07:00",
            "scheduledTimeUtc": "2023-05-30 05:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 05:45Z",
              "local": "2023-05-29 22:45-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1341",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-800"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDFW",
              "iata": "DFW",
              "name": "Dallas-Fort Worth"
            },
            "scheduledTimeLocal": "2023-05-29 23:49-07:00",
            "scheduledTimeUtc": "2023-05-30 06:49Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:49Z",
              "local": "2023-05-29 23:49-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 1644",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-29 23:04-07:00",
            "scheduledTimeUtc": "2023-05-30 06:04Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:04Z",
              "local": "2023-05-29 23:04-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2110",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHLI",
              "iata": "LIH",
              "name": "Lihue"
            },
            "scheduledTimeLocal": "2023-05-29 23:24-07:00",
            "scheduledTimeUtc": "2023-05-30 06:24Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:24Z",
              "local": "2023-05-29 23:24-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 266",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDFW",
              "iata": "DFW",
              "name": "Dallas-Fort Worth"
            },
            "scheduledTimeLocal": "2023-05-29 23:10-07:00",
            "scheduledTimeUtc": "2023-05-30 06:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:10Z",
              "local": "2023-05-29 23:10-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2939",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHKO",
              "iata": "KOA",
              "name": "Kailua/Kona"
            },
            "scheduledTimeLocal": "2023-05-29 23:59-07:00",
            "scheduledTimeUtc": "2023-05-30 06:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:59Z",
              "local": "2023-05-29 23:59-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 58",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MRLB",
              "iata": "LIR",
              "name": "Liberia"
            },
            "scheduledTimeLocal": "2023-05-29 23:40-07:00",
            "scheduledTimeUtc": "2023-05-30 06:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1415",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 23:08-07:00",
            "scheduledTimeUtc": "2023-05-30 06:08Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:08Z",
              "local": "2023-05-29 23:08-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 287",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-29 23:12-07:00",
            "scheduledTimeUtc": "2023-05-30 06:12Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:12Z",
              "local": "2023-05-29 23:12-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 3456",
          "callSign": "ASA3456",
          "status": "Expected",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Embraer 175"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MSLP",
              "iata": "SAL",
              "name": "Santa Clara"
            },
            "scheduledTimeLocal": "2023-05-29 23:25-07:00",
            "scheduledTimeUtc": "2023-05-30 06:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:25Z",
              "local": "2023-05-29 23:25-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "AV 528",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "SA AVIANCA",
            "iata": "AV",
            "icao": "AVA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KEWR",
              "iata": "EWR",
              "name": "Newark"
            },
            "scheduledTimeLocal": "2023-05-29 23:12-07:00",
            "scheduledTimeUtc": "2023-05-30 06:12Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:12Z",
              "local": "2023-05-29 23:12-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1873",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-29 23:55-07:00",
            "scheduledTimeUtc": "2023-05-30 06:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:55Z",
              "local": "2023-05-29 23:55-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 2886",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBDL",
              "iata": "BDL",
              "name": "Hartford"
            },
            "scheduledTimeLocal": "2023-05-29 23:59-07:00",
            "scheduledTimeUtc": "2023-05-30 06:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:59Z",
              "local": "2023-05-29 23:59-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 67",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPDX",
              "iata": "PDX",
              "name": "Portland"
            },
            "scheduledTimeLocal": "2023-05-29 23:59-07:00",
            "scheduledTimeUtc": "2023-05-30 06:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:59Z",
              "local": "2023-05-29 23:59-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AS 1076",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Alaska",
            "iata": "AS",
            "icao": "ASA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MPTO",
              "iata": "PTY",
              "name": "Tocumen"
            },
            "scheduledTimeLocal": "2023-05-29 23:31-07:00",
            "scheduledTimeUtc": "2023-05-30 06:31Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:31Z",
              "local": "2023-05-29 23:31-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "CM 302",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Copa",
            "iata": "CM",
            "icao": "CMP"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSLC",
              "iata": "SLC",
              "name": "Salt Lake City"
            },
            "scheduledTimeLocal": "2023-05-29 23:56-07:00",
            "scheduledTimeUtc": "2023-05-30 06:56Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:56Z",
              "local": "2023-05-29 23:56-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1268",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSEA",
              "iata": "SEA",
              "name": "Seattle"
            },
            "scheduledTimeLocal": "2023-05-29 23:54-07:00",
            "scheduledTimeUtc": "2023-05-30 06:54Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:54Z",
              "local": "2023-05-29 23:54-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 1550",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDTW",
              "iata": "DTW",
              "name": "Detroit"
            },
            "scheduledTimeLocal": "2023-05-29 23:10-07:00",
            "scheduledTimeUtc": "2023-05-30 06:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:10Z",
              "local": "2023-05-29 23:10-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 694",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 757-300"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSHV",
              "iata": "SHV",
              "name": "Shreveport"
            },
            "scheduledTimeLocal": "2023-05-29 23:10-07:00",
            "scheduledTimeUtc": "2023-05-30 06:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:10Z",
              "local": "2023-05-29 23:10-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "G4 802",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A319"
          },
          "airline": {
            "name": "Allegiant Air",
            "iata": "G4",
            "icao": "AAY"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHNL",
              "iata": "HNL",
              "name": "Honolulu"
            },
            "scheduledTimeLocal": "2023-05-29 23:00-07:00",
            "scheduledTimeUtc": "2023-05-30 06:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:00Z",
              "local": "2023-05-29 23:00-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "HA 2",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A330-200"
          },
          "airline": {
            "name": "Hawaiian",
            "iata": "HA",
            "icao": "HAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHKO",
              "iata": "KOA",
              "name": "Kailua/Kona"
            },
            "scheduledTimeLocal": "2023-05-29 23:50-07:00",
            "scheduledTimeUtc": "2023-05-30 06:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:50Z",
              "local": "2023-05-29 23:50-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "HA 62",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Hawaiian",
            "iata": "HA",
            "icao": "HAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 23:00-07:00",
            "scheduledTimeUtc": "2023-05-30 06:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:00Z",
              "local": "2023-05-29 23:00-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 194",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMSP",
              "iata": "MSP",
              "name": "Minneapolis"
            },
            "scheduledTimeLocal": "2023-05-29 23:46-07:00",
            "scheduledTimeUtc": "2023-05-30 06:46Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:46Z",
              "local": "2023-05-29 23:46-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 996",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-29 23:20-07:00",
            "scheduledTimeUtc": "2023-05-30 06:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:20Z",
              "local": "2023-05-29 23:20-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "VB 518",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "VivaAerobus",
            "iata": "VB",
            "icao": "VIV"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDEN",
              "iata": "DEN",
              "name": "Denver"
            },
            "scheduledTimeLocal": "2023-05-29 23:25-07:00",
            "scheduledTimeUtc": "2023-05-30 06:25Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:25Z",
              "local": "2023-05-29 23:25-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1634",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KHOU",
              "iata": "HOU",
              "name": "Houston"
            },
            "scheduledTimeLocal": "2023-05-29 23:50-07:00",
            "scheduledTimeUtc": "2023-05-30 06:50Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:50Z",
              "local": "2023-05-29 23:50-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 1822",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSTL",
              "iata": "STL",
              "name": "Saint Louis"
            },
            "scheduledTimeLocal": "2023-05-29 23:55-07:00",
            "scheduledTimeUtc": "2023-05-30 06:55Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:55Z",
              "local": "2023-05-29 23:55-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2275",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KLAS",
              "iata": "LAS",
              "name": "Las Vegas"
            },
            "scheduledTimeLocal": "2023-05-29 23:10-07:00",
            "scheduledTimeUtc": "2023-05-30 06:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:10Z",
              "local": "2023-05-29 23:10-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 3405",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMLO",
              "iata": "BJX",
              "name": "Silao"
            },
            "scheduledTimeLocal": "2023-05-29 23:30-07:00",
            "scheduledTimeUtc": "2023-05-30 06:30Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:30Z",
              "local": "2023-05-29 23:30-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 900",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-29 23:10-07:00",
            "scheduledTimeUtc": "2023-05-30 06:10Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:10Z",
              "local": "2023-05-29 23:10-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 914",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMGL",
              "iata": "GDL",
              "name": "Guadalajara"
            },
            "scheduledTimeLocal": "2023-05-29 23:40-07:00",
            "scheduledTimeUtc": "2023-05-30 06:40Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:40Z",
              "local": "2023-05-29 23:40-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 918",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMMM",
              "iata": "MLM",
              "name": "Morelia"
            },
            "scheduledTimeLocal": "2023-05-29 23:00-07:00",
            "scheduledTimeUtc": "2023-05-30 06:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:00Z",
              "local": "2023-05-29 23:00-07:00"
            },
            "terminal": "B",
            "quality": [
              "Basic"
            ]
          },
          "number": "Y4 920",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320 NEO"
          },
          "airline": {
            "name": "Volaris",
            "iata": "Y4",
            "icao": "VOI"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "ZSPD",
              "iata": "PVG",
              "name": "Shanghai"
            },
            "scheduledTimeLocal": "2023-05-29 23:59-07:00",
            "scheduledTimeUtc": "2023-05-30 06:59Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:59Z",
              "local": "2023-05-29 23:59-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "Y8 7459",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 747 Cargo"
          },
          "airline": {
            "name": "Suparna",
            "iata": "Y8",
            "icao": "YZR"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KIAH",
              "iata": "IAH",
              "name": "Houston"
            },
            "scheduledTimeLocal": "2023-05-29 23:36-07:00",
            "scheduledTimeUtc": "2023-05-30 06:36Z",
            "scheduledTime": {
              "utc": "2023-05-30 06:36Z",
              "local": "2023-05-29 23:36-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 1813",
          "status": "Unknown",
          "codeshareStatus": "Unknown",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-900"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMIA",
              "iata": "MIA",
              "name": "Miami"
            },
            "scheduledTimeLocal": "2023-05-30 00:13-07:00",
            "scheduledTimeUtc": "2023-05-30 07:13Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:13Z",
              "local": "2023-05-30 00:13-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 2468",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-30 00:20-07:00",
            "scheduledTimeUtc": "2023-05-30 07:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:20Z",
              "local": "2023-05-30 00:20-07:00"
            },
            "terminal": "0",
            "quality": [
              "Basic"
            ]
          },
          "number": "AA 300",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "American",
            "iata": "AA",
            "icao": "AAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "CYVR",
              "iata": "YVR",
              "name": "Vancouver"
            },
            "scheduledTimeLocal": "2023-05-30 00:17-07:00",
            "scheduledTimeUtc": "2023-05-30 07:17Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:17Z",
              "local": "2023-05-30 00:17-07:00"
            },
            "terminal": "6",
            "quality": [
              "Basic"
            ]
          },
          "number": "AC 560",
          "status": "Expected",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Air Canada",
            "iata": "AC",
            "icao": "ACA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KBOS",
              "iata": "BOS",
              "name": "Boston"
            },
            "scheduledTimeLocal": "2023-05-30 00:32-07:00",
            "scheduledTimeUtc": "2023-05-30 07:32Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:32Z",
              "local": "2023-05-30 00:32-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1387",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-30 00:56-07:00",
            "scheduledTimeUtc": "2023-05-30 07:56Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:56Z",
              "local": "2023-05-30 00:56-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1823",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDTW",
              "iata": "DTW",
              "name": "Detroit"
            },
            "scheduledTimeLocal": "2023-05-30 00:45-07:00",
            "scheduledTimeUtc": "2023-05-30 07:45Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:45Z",
              "local": "2023-05-30 00:45-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 856",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KATL",
              "iata": "ATL",
              "name": "Atlanta"
            },
            "scheduledTimeLocal": "2023-05-30 00:38-07:00",
            "scheduledTimeUtc": "2023-05-30 07:38Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:38Z",
              "local": "2023-05-30 00:38-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 886",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A321"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KORD",
              "iata": "ORD",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-30 00:52-07:00",
            "scheduledTimeUtc": "2023-05-30 07:52Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:52Z",
              "local": "2023-05-30 00:52-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "NK 1024",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "Spirit",
            "iata": "NK",
            "icao": "NKS"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KSFO",
              "iata": "SFO",
              "name": "San Francisco"
            },
            "scheduledTimeLocal": "2023-05-30 00:27-07:00",
            "scheduledTimeUtc": "2023-05-30 07:27Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:27Z",
              "local": "2023-05-30 00:27-07:00"
            },
            "terminal": "7",
            "quality": [
              "Basic"
            ]
          },
          "number": "UA 2034",
          "callSign": "UAL2034",
          "status": "Expected",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "United",
            "iata": "UA",
            "icao": "UAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KMDW",
              "iata": "MDW",
              "name": "Chicago"
            },
            "scheduledTimeLocal": "2023-05-30 00:15-07:00",
            "scheduledTimeUtc": "2023-05-30 07:15Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:15Z",
              "local": "2023-05-30 00:15-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2011",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "PHOG",
              "iata": "OGG",
              "name": "Kahului"
            },
            "scheduledTimeLocal": "2023-05-30 00:05-07:00",
            "scheduledTimeUtc": "2023-05-30 07:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:05Z",
              "local": "2023-05-30 00:05-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2056",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KDAL",
              "iata": "DAL",
              "name": "Dallas"
            },
            "scheduledTimeLocal": "2023-05-30 00:20-07:00",
            "scheduledTimeUtc": "2023-05-30 07:20Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:20Z",
              "local": "2023-05-30 00:20-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2352",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KPHX",
              "iata": "PHX",
              "name": "Phoenix"
            },
            "scheduledTimeLocal": "2023-05-30 00:05-07:00",
            "scheduledTimeUtc": "2023-05-30 07:05Z",
            "scheduledTime": {
              "utc": "2023-05-30 07:05Z",
              "local": "2023-05-30 00:05-07:00"
            },
            "terminal": "1",
            "quality": [
              "Basic"
            ]
          },
          "number": "WN 2442",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 737-700"
          },
          "airline": {
            "name": "Southwest",
            "iata": "WN",
            "icao": "SWA"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-30 01:53-07:00",
            "scheduledTimeUtc": "2023-05-30 08:53Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:53Z",
              "local": "2023-05-30 01:53-07:00"
            },
            "terminal": "5",
            "quality": [
              "Basic"
            ]
          },
          "number": "B6 1723",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A320"
          },
          "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "KJFK",
              "iata": "JFK",
              "name": "New York"
            },
            "scheduledTimeLocal": "2023-05-30 01:22-07:00",
            "scheduledTimeUtc": "2023-05-30 08:22Z",
            "scheduledTime": {
              "utc": "2023-05-30 08:22Z",
              "local": "2023-05-30 01:22-07:00"
            },
            "terminal": "3",
            "quality": [
              "Basic"
            ]
          },
          "number": "DL 308",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Boeing 767-400"
          },
          "airline": {
            "name": "Delta Air Lines",
            "iata": "DL",
            "icao": "DAL"
          }
        },
        {
          "movement": {
            "airport": {
              "icao": "MMMX",
              "iata": "MEX",
              "name": "Mexico City"
            },
            "scheduledTimeLocal": "2023-05-30 02:00-07:00",
            "scheduledTimeUtc": "2023-05-30 09:00Z",
            "scheduledTime": {
              "utc": "2023-05-30 09:00Z",
              "local": "2023-05-30 02:00-07:00"
            },
            "quality": [
              "Basic"
            ]
          },
          "number": "6R 302",
          "status": "Unknown",
          "codeshareStatus": "IsOperator",
          "isCargo": false,
          "aircraft": {
            "model": "Airbus A300"
          },
          "airline": {
            "name": "Alrosa",
            "iata": "6R",
            "icao": "DRU"
          }
        }
      ]
    })
  }
}
