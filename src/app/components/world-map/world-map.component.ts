import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
} from '@angular/core';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss'],
})
export class WorldMapComponent implements OnInit, AfterViewInit {
  countryCodes = computed(() =>
    this.airportService.airportSearchResults().map((item) => item.countryCode)
  );

  @ViewChild('mapRenderer') $mapRenderer!: ElementRef;
  @ViewChild('mapContainer') $mapContainer!: ElementRef;

  ctx!: CanvasRenderingContext2D;
  svgPaths!: SVGPathElement[];

  constructor(
    private elRef: ElementRef,
    private airportService: AirportService
  ) {}

  ngAfterViewInit(): void {
    this.$mapRenderer.nativeElement.width = 1109;
    this.$mapRenderer.nativeElement.height = 731;

    this.ctx = this.$mapRenderer.nativeElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    this.svgPaths = this.elRef.nativeElement.querySelectorAll('path');
    this.renderMapOnCanvas();
  }

  ngOnInit(): void {
    this.airportService.airportsUpdated.subscribe(this.renderMapOnCanvas);
  }

  renderMapOnCanvas = () => {
    this.clearCanvasFrame(this.ctx);
    for (const $path of this.svgPaths) {
      const id = $path.getAttribute('id') ?? '';
      const d = $path.getAttribute('d') ?? '';
      const fillColor = this.countryCodes().includes(id)
        ? '#0083FC'
        : '#F4F4F4';
      this.fillCountryPath(this.ctx, new Path2D(d), fillColor);
    }
  };

  clearCanvasFrame(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  fillCountryPath(
    ctx: CanvasRenderingContext2D,
    path2D: Path2D,
    color: string
  ): void {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fill(path2D);
    ctx.restore();
  }
}
