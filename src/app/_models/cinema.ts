import { Auditorium } from "./auditorium";
import { Report } from "./report";

export interface Cinema {
  id: string,
  createdAt: string,
  lastModifiedAt: string,
  name?: string;
  lat: number;
  long: number;
  text?: string;
  auditoriums?: Auditorium[]
  street?: string;
  postcode?: string;
  city?: string;
  mail?: string;
  phone?: string;
  linkHomepage?: string;
  linkProgram?: string;
  openingHours?: string;
  reports: Report[];
}
