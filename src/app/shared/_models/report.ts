export interface Report {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  date: Date;
  text?: string;
  images?: string[];
}
