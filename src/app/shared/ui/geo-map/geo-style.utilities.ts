import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import OSM from 'ol/source/OSM';
import Stamen from 'ol/source/Stamen';
import { FlatStyleLike } from 'ol/style/flat';

const BING_API_KEY =
  'Av5DvwITrvFW_vvHUW32CO3HtW6GY9PWmMMiBVwdz9JzDDCdbPiBvMSYDC-WO_y3';
const POINT_SIZE = 9;
const POINT_COLOR = 'rgb(255, 77, 0)';
const POINT_COLOR_HOVER = 'rgb(255, 77, 88)';

export const POINT_STYLE: FlatStyleLike = {
  'circle-radius': POINT_SIZE,
  'circle-fill-color': POINT_COLOR,
};

export function getTileLayerStyle(
  style?: string
): TileLayer<Stamen | BingMaps | OSM> {
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
    case 'toner': {
      return new TileLayer({
        source: new Stamen({
          layer: 'toner',
        }),
      });
    }
    case 'bing': {
      return new TileLayer({
        visible: true,
        preload: Infinity,
        source: new BingMaps({
          key: BING_API_KEY,
          imagerySet: BingMapStyles.CANVAS_GRAY,
        }),
      });
    }
    default: {
      return new TileLayer({
        source: new OSM(),
      });
    }
  }
}
