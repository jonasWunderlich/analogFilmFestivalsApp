import { Report } from "./report";

export interface Projection {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  date: Date;
  name: string;
  agent?: string;
  tmdb?: string;
  cinema?: string;
  black?: boolean;

  reports?: Report[];
  reportRefs?: string[];
}
