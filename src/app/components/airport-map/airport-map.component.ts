import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-airport-map',
  templateUrl: './airport-map.component.html',
  styleUrls: ['./airport-map.component.scss'],
})
export class AirportMapComponent implements AfterViewInit {
  map!: L.Map;

  @Input() lat!: number;
  @Input() lon!: number;

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 12,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    const marker = L.marker([this.lat, this.lon]);

    marker.addTo(this.map);
  }
}
