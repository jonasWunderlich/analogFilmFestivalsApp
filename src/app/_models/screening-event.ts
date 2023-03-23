import { ScreeningEventCharacter } from "./screening-event-character";
import { ScreeningEventType } from "./sceening-event-type";
import { Projection } from "./projection";
import { Report } from "./report";

export interface ScreeningEvent {
  id: string,
  createdAt: string,
  lastModifiedAt: string,
  name?: string;
  text?: string;
  link?: string;
  type?: ScreeningEventType;
  character?: ScreeningEventCharacter[];
  date: Date;
  dateEnd?: Date;
  projections?: Projection[];
  reports?: Report[];
}
