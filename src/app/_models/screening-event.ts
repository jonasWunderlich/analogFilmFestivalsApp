import { ScreeningEventCharacter } from "./screening-event-character";
import { ScreeningEventType } from "./sceening-event-type";
import { Projection } from "./projection";
import { Report } from "./report";
import { Cinema } from "./cinema";

export interface ScreeningEvent {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  start: Date;
  end?: Date;
  title?: string;
  text?: string;
  link?: string;
  type?: ScreeningEventType;
  character?: ScreeningEventCharacter[];
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  url?: string;

  cinemas?: Cinema[];
  projections?: Projection[];
  reports?: Report[];

  cinemaRefs?: string[];
  projectionRefs?: string[];
  reportRefs?: string[];
}
