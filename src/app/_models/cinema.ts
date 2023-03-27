import { Coordinate } from "ol/coordinate";
import { Auditorium } from "./auditorium";
import { Projection } from "./projection";
import { Report } from "./report";

export interface Cinema {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  geoCoordinates: Coordinate;
  text?: string;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  linkOpeningHours?: string;
  images: string[];

  // TODO: Fix reference models
  auditoriums?: Auditorium[];
  reports?: Report[];
  projection?: Projection[];
  auditoriumRefs?: string[];
  reportRefs?: string[];
  projectionRefs?: string[];
}
