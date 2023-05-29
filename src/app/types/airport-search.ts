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
