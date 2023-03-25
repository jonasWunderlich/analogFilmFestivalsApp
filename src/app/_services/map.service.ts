import { Injectable } from '@angular/core';
import { useGeographic} from 'ol/proj.js';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import View from 'ol/View';
import { Geometry, Point } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import { Coordinate } from 'ol/coordinate';
import { boundingExtent } from 'ol/extent';
import { Router } from '@angular/router';
import { FlatStyleLike } from 'ol/style/flat';

const POINT_SIZE = 7;
const POINT_COLOR = 'rgb(255, 77, 0)';

@Injectable({
 providedIn: 'root',
})
export class MapService {

  pointStyle: FlatStyleLike = {
    'circle-radius': POINT_SIZE,
    'circle-fill-color': POINT_COLOR,
  }

  constructor(private readonly router: Router) {
  }

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
          style: this.pointStyle
        })
      ],
      target,
    });

  }

  public buildMapFromFeatureCollection(features: Feature[], collection: Coordinate[], target: string): Map {

    const vectorLayer = new VectorLayer({
      source: new VectorSource({features}),
      style: this.pointStyle
    });

    return this.commonMapFunction(vectorLayer, target, collection);
  }

  private commonMapFunction(vectorLayer: VectorLayer<VectorSource<Geometry>>, target: string, coords?: Coordinate[]): Map {

    useGeographic();

    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      target
    });

    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        if (feature.getProperties()['url']) {
          this.router.navigate([feature.getProperties()['url']]);
        }
      });
    });

    if (coords) {
      map.getView().fit(boundingExtent(coords), {
        padding: [40,40,40,40]
      });
    }

    return map;
  }

}
