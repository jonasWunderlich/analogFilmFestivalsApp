import { Injectable } from '@angular/core';
import { useGeographic} from 'ol/proj.js';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import View from 'ol/View';
import Point from 'ol/geom/Point.js';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';

@Injectable({
 providedIn: 'root',
})
export class MapService {

  public buildMap(lat: number, long: number, target: string): Map {

    useGeographic();

    const place = [lat, long];
    const point = new Point(place);

    return new Map({
      view: new View({
        center: place,
        zoom: 15,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: {
            'circle-radius': 9,
            'circle-fill-color': 'red',
          },
        }),
      ],
      target
    });
  }

}
