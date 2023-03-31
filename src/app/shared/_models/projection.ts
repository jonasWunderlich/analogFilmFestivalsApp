import { Cinema } from './cinema';
import { Report } from './report';
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
  tmdb?: string;
  character?: ProjectionCharacter[];
  black?: boolean;
  agent?: string;

  // TODO: Fix reference models
  cinema?: Cinema;
  cinemaRef?: string;
  reports?: Report[];
  reportRefs?: string[];
}
