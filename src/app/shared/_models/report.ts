export interface ReportCreate {
  title: string;
  date: string;
  text: string;
  images?: string[];
}

export interface Report extends ReportCreate {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  date: string;
  text: string;
  images?: string[];
}
