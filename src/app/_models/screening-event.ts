import { ScreeningEventCharacter } from "./screening-event-character";
import { ScreeningEventType } from "./sceening-event-type";
import { Projection } from "./projection";
import { Report } from "./report";

export interface ScreeningEvent {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  date: Date;
  dateEnd?: Date;
  encrypt?: boolean;
  name?: string;
  text?: string;
  link?: string;
  type?: ScreeningEventType;
  character?: ScreeningEventCharacter[];
  projections?: Projection[];
  reports?: Report[];
}
