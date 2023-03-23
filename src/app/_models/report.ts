export interface Report {
  id: string;
  createdAt: string,
  lastModifiedAt: string,
  date: Date;
  text: string;
  name?: string;
  images?: any;
}
