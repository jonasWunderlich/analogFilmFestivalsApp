import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import { Cinema } from "../_models/cinema";

export function createCinemaFeatureList(cinemas: Cinema[]): Feature[] {
  return cinemas.map(cinema => new Feature({
      geometry: new Point(cinema.geoCoordinates),
      title: cinema.title,
      url: `/cinema/${cinema.id}`,
    })
  );
}

export function getCoordinatesFromCinemaList(cinemas: Cinema[]): Coordinate[] {
  return cinemas.map(cinema => cinema.geoCoordinates);
}
