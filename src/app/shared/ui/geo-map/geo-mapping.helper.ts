import { Feature } from 'ol';
import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { POINT_STYLE } from './geo-style.utilities';

export interface GeometryObject {
  geoCoordinates: Coordinate;
  title: string;
  id: string;
}

export function createFeatureList<T extends GeometryObject>(
  arr: Array<T>,
  urlPrefix: string
): Feature[] {
  return arr.map(
    (arr) =>
      new Feature({
        geometry: new Point(arr.geoCoordinates),
        title: arr.title,
        url: `/${urlPrefix}/${arr.id}`,
      })
  );
}

export function extractCoordinates<T extends GeometryObject>(
  objectWithGeo: Array<T>
): Coordinate[] {
  return objectWithGeo.map((item) => item.geoCoordinates);
}

export function buildVectorLayer(
  features: Feature[]
): VectorLayer<VectorSource> {
  return new VectorLayer({
    source: new VectorSource({ features }),
    style: POINT_STYLE,
    className: 'mygeo',
  });
}
