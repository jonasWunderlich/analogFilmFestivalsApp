import { ScreeningEventType } from './sceening-event-type';

export interface ScreeningEventCreate {
  title: string;
  start: string;
  end?: string;
  text?: string;
  type?: ScreeningEventType;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
}

export interface ScreeningEvent extends ScreeningEventCreate {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
  title: string;
  start: string;
  end?: string;
  text?: string;
  type?: ScreeningEventType;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  images?: string[];
  cinemaRefs: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
  auditoriumRefs?: string[];
}
