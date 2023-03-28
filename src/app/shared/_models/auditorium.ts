import { Report } from './report';

export interface Auditorium {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  attributes: string[];
  projectors: string[];
  screen?: string;
  seats?: number;
  sound: string[];
  text?: string;

  // TODO: Fix reference models
  reports?: Report[];
  reportRefs?: string[];
}
