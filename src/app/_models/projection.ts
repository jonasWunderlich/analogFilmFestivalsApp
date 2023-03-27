import { Cinema } from "./cinema";
import { Report } from "./report";
import { ProjectionCharacter } from "./projection-character";

export interface Projection {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  date: Date;
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
