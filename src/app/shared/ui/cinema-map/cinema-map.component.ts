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
  set geoObject(value: GeometryObject | null | undefined) {
    if (value) {
      this.buildMapFromObject(value);
    }
  }
  @Input()
  set geoArray(value: GeometryObject[] | null) {
    if (value) {
      this.buildMapFromCollection(value);
    }
  }

  constructor(private readonly mapService: MapService) {}

  buildMapFromObject(geoObj: GeometryObject): void {
    if (geoObj) {
      this.map = this.mapService.buildMap(
        geoObj.geoCoordinates || [],
        'ol-map'
      );
    }
  }

  buildMapFromCollection(geoObjs: GeometryObject[]): void {
    if (geoObjs) {
      this.map = this.mapService.buildMapFromFeatureCollection(
        createFeatureList(geoObjs, 'cinema'),
        extractCoordinates(geoObjs),
        'ol-map'
      );
    }
  }
}
