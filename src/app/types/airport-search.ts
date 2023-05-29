export type Location = {
  lat: number;
  lon: number;
};

export type AirportSearchResponse = {
  searchBy: string;
  items: AirportSearchItem[];
};

export type AirportSearchItem = {
  icao: string;
  iata: string;
  name: string;
  localCode: string;
  shortName: string;
  location: Location;
  countryCode: string;
  municipalityName: string;
};

export type AirportByCodeResponse = {
  icao: string;
  iata: string;
  shortName: string;
  fullName: string;
  municipalityName: string;
  location: Location;
  elevation: {
    meter: number;
    km: number;
    mile: number;
    nm: number;
    feet: number;
  };
  country: {
    code: string;
    name: string;
  };
  continent: {
    code: string;
    name: string;
  };
  timeZone: string;
  urls: {
    webSite: string;
    wikipedia: string;
    twitter: string;
    googleMaps: string;
    liveAtc: string;
    flightRadar: string;
  };
  currentTime: {
    utcTime: string;
    localTime: string;
    time: {
      utc: string;
      local: string;
    };
    timeZoneId: string;
  };
};
