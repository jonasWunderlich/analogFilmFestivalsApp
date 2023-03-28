import { ScreeningEventType } from './sceening-event-type';
import { Projection } from './projection';
import { Report } from './report';
import { Cinema } from './cinema';

export interface ScreeningEvent {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  start: Date;
  end?: Date;
  text?: string;
  type?: ScreeningEventType;
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;

  // TODO: Fix reference models
  cinemas?: Cinema[];
  projections?: Projection[];
  reports?: Report[];
  cinemaRefs?: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
}
