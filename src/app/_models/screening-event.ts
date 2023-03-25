import { ScreeningEventCharacter } from "./screening-event-character";
import { ScreeningEventType } from "./sceening-event-type";
import { Projection } from "./projection";
import { Report } from "./report";

export interface ScreeningEvent {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  start: Date;
  end?: Date;
  encrypt?: boolean;
  title?: string;
  text?: string;
  link?: string;
  type?: ScreeningEventType;
  character?: ScreeningEventCharacter[];
  projections?: Projection[];
  reports?: Report[];
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  url?: string;
}
