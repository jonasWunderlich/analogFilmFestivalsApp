import { Injectable } from '@angular/core';
import { useGeographic} from 'ol/proj.js';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import View from 'ol/View';
import { MultiPoint, Point } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import { Coordinate } from 'ol/coordinate';
import { boundingExtent } from 'ol/extent';

const POINT_SIZE = 7;
const POINT_COLOR = 'rgb(255, 77, 0)'; // 'orange';

@Injectable({
 providedIn: 'root',
})
export class MapService {

  public buildMap(coordinates: Coordinate, target: string): Map {

    useGeographic();

    const point = new Point(coordinates);

    return new Map({
      view: new View({
        center: coordinates,
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
            'circle-radius': POINT_SIZE,
            'circle-fill-color': POINT_COLOR,
          },
        }),
      ],
      target
    });
  }

  public buildMultiPointMap(coordinates: Coordinate[], target: string): Map {

    useGeographic();
    const multipoint = new MultiPoint(coordinates);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature(multipoint)],
      }),
      style: {
        'circle-radius': POINT_SIZE,
        'circle-fill-color': POINT_COLOR,
      },
    });

    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      target
    });

    map.getView().fit(boundingExtent(coordinates), {
      padding: [40,40,40,40]
    });

    return map;
  }

  private adjust_map_zoom(map: Map, vectorLayer: VectorLayer<any>) {
    map.getView().fit(
      vectorLayer.getSource().getExtent(),
      {size:map.getSize(), maxZoom:16}
    );
    const zoom = map.getView().getZoom();
  }

}
