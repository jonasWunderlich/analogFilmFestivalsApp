import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Map } from 'ol';
import { MapService } from './map.service';
import {
  GeometryObject,
  buildVectorLayer,
  createFeatureList,
  extractCoordinates,
} from './geo-mapping.helper';
import { centerView } from './geo.interaction.utilities';

export enum MapMode {
  POINT = 'POINT',
  POINTS = 'POINTS',
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
  mode?: MapMode;

  @Input()
  set geoObject(obj: GeometryObject | undefined) {
    if (obj) {
      if (!this.map || this.mode === MapMode.POINTS) {
        this.mapService.buildSingleFeatureMap(
          obj.geoCoordinates || [],
          'ol-map'
        );
      } else {
        console.log('update point');
      }
    }
    this.mode = MapMode.POINT;
  }
  @Input()
  set geoArray(arr: GeometryObject[] | undefined) {
    if (arr) {
      const featureList = createFeatureList(arr, 'cinema');
      const coordinates = extractCoordinates(arr);
      const layer = buildVectorLayer(featureList);

      if (!this.map || this.mode === MapMode.POINTS) {
        this.mapService.buildMultiFeatureMap(layer, coordinates, 'ol-map');
      } else {
        this.map.getLayers().setAt(1, layer);
        centerView(this.map, coordinates);
        console.log('update array');
      }
    }
    this.mode = MapMode.POINT;
  }

  constructor(private readonly mapService: MapService) {}
}
