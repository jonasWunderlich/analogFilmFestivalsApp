import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { useGeographic} from 'ol/proj.js';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import View from 'ol/View';
import { Point } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Stamen from 'ol/source/Stamen';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps.js';
import { Coordinate } from 'ol/coordinate';
import { boundingExtent } from 'ol/extent';
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

  private getTileLayerStyle(style?: string): TileLayer<any> {

    enum BingMapStyles {
      ROAD_ON_DEMAND = 'RoadOnDemand',
      CANVAS_LIGHT = 'CanvasLight',
      CANVAS_GRAY = 'CanvasGray',
      CANVAS_DARK = 'CanvasDark',
      AERIAL = 'Aerial',
      AERIAL_WITH_LABELS_ON_DEMAND = 'AerialWithLabelsOnDemand',
      ORDNANCE_SURVEY = 'OrdnanceSurvey',
    }

    switch (style) {
      case ('toner'): {
        return new TileLayer({
          source: new Stamen({
            layer: 'toner',
          })
        });
      }
      case ('bing'): {
        return new TileLayer({
          visible: true,
          preload: Infinity,
          source: new BingMaps({
            key: 'Av5DvwITrvFW_vvHUW32CO3HtW6GY9PWmMMiBVwdz9JzDDCdbPiBvMSYDC-WO_y3',
            imagerySet: BingMapStyles.CANVAS_GRAY,
          }),
        })
      }
      default: {
        return new TileLayer({
          source: new OSM(),
        });
      }
    }
  }

  public buildMap(coordinates: Coordinate, target: string): Map {
    useGeographic();
    return new Map({
      view: new View({
        center: coordinates,
        zoom: 15,
      }),
      layers: [
        this.getTileLayerStyle('toner'),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(new Point(coordinates))],
          }),
          style: this.pointStyle
        })
      ],
      target,
    });
  }

  public buildMapFromFeatureCollection(features: Feature[], coords: Coordinate[], target: string): Map {

    useGeographic();

    // BUILD MAP
    const map = new Map({
      layers: [
        this.getTileLayerStyle('toner'),
        new VectorLayer({
          source: new VectorSource({features}),
          style: this.pointStyle
        }),
      ],
      target
    });

    // NAVIGATE AFTER CLICK
    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        if (feature.getProperties()['url']) {
          this.router.navigate([feature.getProperties()['url']]);
        }
      });
    });

    // CENTER VIEW
    if (coords) {
      map.getView().fit(boundingExtent(coords), {padding: [40,40,40,40]});
    }

    return map;
  }

}
