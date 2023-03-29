import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Map } from 'ol';
import {
  createCinemaFeatureList,
  getCoordinatesFromCinemaList,
} from 'src/app/shared/ui/cinema-map/cinema-mapping.helper';
import { MapService } from 'src/app/shared/services/map.service';
import { Cinema } from 'src/app/shared/_models/cinema';

export interface MapDataLike {
  id: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-cinema-map',
  templateUrl: './cinema-map.component.html',
  styleUrls: ['./cinema-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CinemaMapComponent {
  map?: Map;

  @Input()
  set cinemas(value: Cinema[] | null) {
    if (value) {
      this.buildMap(value);
    }
  }

  constructor(private readonly mapService: MapService) {}

  buildMap(cinemas: Cinema[]): void {
    if (cinemas) {
      this.map = this.mapService.buildMapFromFeatureCollection(
        createCinemaFeatureList(cinemas),
        getCoordinatesFromCinemaList(cinemas),
        'ol-map'
      );
    }
  }
}
