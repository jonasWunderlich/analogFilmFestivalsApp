export interface Projection {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  date: Date;
  name: string;
  agent?: string;
  reports?: [];
  tmdb?: string;
  cinema?: string;
  black?: boolean;
}
