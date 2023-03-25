import { Report } from "./report";

export interface Auditorium {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  name: string;
  text?: string;
  projectors: string[];
  screen?: string;
  sound: string[];
  seats?: number;
  attributes: string[];
  reports?: Report[];
}
