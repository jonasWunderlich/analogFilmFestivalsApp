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
  text: string;
  date: string;
  images?: string[];
  eventRef?: string;
  projectionRef?: string;
  cinemaRef?: string;
  auditoriumRef?: string;
}
