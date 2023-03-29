import { Feature } from 'ol';
import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';

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
