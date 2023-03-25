import { Coordinate } from "ol/coordinate";
import { Auditorium } from "./auditorium";
import { Report } from "./report";

export interface Cinema {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  geoCoordinates: Coordinate;
  name?: string;
  text?: string;
  auditoriums?: Auditorium[];
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  linkOpeningHours?: string;
  reports?: Report[];
}
