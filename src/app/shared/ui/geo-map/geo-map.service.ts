import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { useGeographic } from 'ol/proj.js';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Coordinate } from 'ol/coordinate';
import { getTileLayerStyle, POINT_STYLE } from './geo-style.utilities';
import {
  addClickHandling,
  addPointerHandling,
  centerView,
} from './geo.interaction.utilities';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';

@Injectable({
  providedIn: 'root',
})
export class GeoMapService {
  $selectedGeoData = this.store.select(selectCinemas);
  map?: Map;

  constructor(private readonly router: Router, private readonly store: Store) {}

  // TODO: move in utilities
  buildSingleFeatureMap(coordinates: Coordinate, target: string): Map {
    useGeographic();
    const map = new Map({
      layers: [
        getTileLayerStyle('toner'),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(new Point(coordinates))],
          }),
          style: POINT_STYLE,
        }),
      ],
      target,
    });
    centerView(map, [coordinates]);
    return map;
  }

  // TODO: move in utilities
  buildMultiFeatureMap(
    vectorLayer: VectorLayer<VectorSource>,
    coords: Coordinate[],
    target: string
  ): Map {
    useGeographic();
    const map = new Map({
      layers: [getTileLayerStyle('toner'), vectorLayer],
      target,
    });
    addClickHandling(map, this.router);
    addPointerHandling(map);
    centerView(map, coords);
    return map;
  }
}
