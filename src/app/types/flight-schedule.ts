export type FlightScheduleResponse = {
  departures: Departure[];
  arrivals: Arrival[];
};

export type Arrival = {
  movement: {
    airport: {
      icao: string;
      iata: string;
      name: string;
    };
    scheduledTimeLocal: string;
    actualTimeLocal: string;
    scheduledTimeUtc: string;
    actualTimeUtc: string;
    scheduledTime: {
      utc: string;
      local: string;
    };
    revisedTime: {
      utc: string;
      local: string;
    };
    terminal: string;
    quality: string[];
  };
  number: string;
  callSign: string;
  status: string;
  codeshareStatus: string;
  isCargo: boolean;
  aircraft: {
    reg: string;
    modeS: string;
    model: string;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
};

export type Departure = {
  movement: {
    airport: {
      name: string;
    };
    scheduledTimeLocal: string;
    scheduledTimeUtc: string;
    scheduledTime: {
      utc: string;
      local: string;
    };
    terminal: string;
    quality: string[];
  };
  number: string;
  status: string;
  codeshareStatus: string;
  isCargo: boolean;
  aircraft: {
    model: string;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
};
