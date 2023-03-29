import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Map } from 'ol';
import {
  createFeatureList,
  extractCoordinates,
  GeometryObject,
} from 'src/app/shared/ui/cinema-map/geo-mapping.helper';
import { MapService } from './map.service';

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
  set geoArray(value: GeometryObject[] | null) {
    if (value) {
      this.buildMap(value);
    }
  }

  constructor(private readonly mapService: MapService) {}

  buildMap(cinemas: GeometryObject[]): void {
    if (cinemas) {
      this.map = this.mapService.buildMapFromFeatureCollection(
        createFeatureList(cinemas, 'cinema'),
        extractCoordinates(cinemas),
        'ol-map'
      );
    }
  }
}
