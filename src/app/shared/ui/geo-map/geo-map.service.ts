import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { useGeographic } from 'ol/proj.js';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Coordinate } from 'ol/coordinate';
import { getTileLayerStyle } from './geo-style.utilities';
import {
  addClickHandling,
  addPointerHandling,
  centerView,
} from './geo.interaction.utilities';

@Injectable({
  providedIn: 'root',
})
export class GeoMapService {
  map?: Map;

  constructor(private readonly router: Router) {}

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
