import { Coordinate } from 'ol/coordinate';
import { Auditorium } from './auditorium';

export interface CinemaCreate {
  title: string;
  latitude?: number;
  longitude?: number;
  text?: string;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  linkOpeningHours?: string;
}

export interface Cinema extends CinemaCreate {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
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
  auditoriumRefs?: string[];
  eventRef?: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
}
