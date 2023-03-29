export interface ReportCreate {
  title: string;
  date: Date;
  text: string;
  images?: string[];
}

export interface Report extends ReportCreate {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;

  date: Date;
  text: string;
  images?: string[];
}
