import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Map } from 'ol';
import {
  GeometryObject,
  buildVectorLayer,
  createFeatureList,
  extractCoordinates,
} from './geo-mapping.helper';
import { centerView } from './geo.interaction.utilities';
import { GeoMapService } from './geo-map.service';

export enum MapMode {
  POINT = 'POINT',
  POINTS = 'POINTS',
}

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GeoMapComponent {
  map?: Map;
  mode?: MapMode;

  @Input()
  set geoObject(obj: GeometryObject | undefined) {
    if (obj) {
      if (!this.map || this.mode === MapMode.POINTS) {
        this.geoMapService.buildSingleFeatureMap(
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
      if (!this.map) {
        this.map = this.geoMapService.buildMultiFeatureMap(
          layer,
          coordinates,
          'ol-map'
        );
      } else {
        this.map.getLayers().setAt(1, layer);
        centerView(this.map, coordinates);
      }
    }
    this.mode = MapMode.POINT;
  }

  constructor(private readonly geoMapService: GeoMapService) {}
}
