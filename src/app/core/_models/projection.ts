import { ProjectionCharacter } from './projection-character';

export interface ProjectionCreate {
  title: string;
  text: string;
  date: string;
  tmdb?: string;
  character?: ProjectionCharacter[];
  black?: boolean;
  agent?: string;
}

export interface Projection extends ProjectionCreate {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
  title: string;
  text: string;
  date: string;
  images?: string[];
  tmdb?: string;
  black?: boolean;
  agent?: string;
  reportRefs?: string[];
  cinemaRef?: string;
  eventRef?: string;
  auditoriumRef?: string;
}
