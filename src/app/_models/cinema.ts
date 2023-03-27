import { Coordinate } from "ol/coordinate";
import { Auditorium } from "./auditorium";
import { Projection } from "./projection";
import { Report } from "./report";

export interface Cinema {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  geoCoordinates: Coordinate;
  name?: string;
  text?: string;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  linkOpeningHours?: string;

  auditoriums?: Auditorium[];
  reports?: Report[];
  projection?: Projection[];

  auditoriumRefs?: string[];
  reportRefs?: string[];
  projectionRefs?: string[];
}
