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

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GeoMapComponent {
  map?: Map;

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
  }

  constructor(private readonly geoMapService: GeoMapService) {}
}
