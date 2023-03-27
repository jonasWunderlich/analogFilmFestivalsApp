import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mockAuditoriums } from '../_mock/auditorium.mock';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import { sortByDate } from '../_mock/helpers.mock';
import { mockProjections } from '../_mock/projection.mock';
import { mockReports } from '../_mock/report.mocks';
import { Auditorium } from '../_models/auditorium';
import { Cinema } from '../_models/cinema';
import { Projection } from '../_models/projection';
import { Report } from '../_models/report';
import { ScreeningEvent } from '../_models/screening-event';

@Injectable({
  providedIn: 'root'
})
export class AnalogKinoBackendService {

  cinemas: Cinema[] = [];
  auditoriums: Auditorium[] = [];
  screeningEvents: ScreeningEvent[] = [];
  projections: Projection[] = [];
  reports: Report[] = [];

  constructor() {
    this.auditoriums = mockAuditoriums(40);
    this.cinemas = mockCinemas(40);
    this.projections = mockProjections(200, new Date(), 400).sort((a, b) => sortByDate(a.date, b.date));
    this.reports = mockReports(40).sort((a, b) => sortByDate(a.date, b.date));
    this.screeningEvents = mockScreeningEvents(40).sort((a, b) => sortByDate(a.start, b.start));
  }

  public getCinemas(): Observable<Cinema[]> {
    return of(this.cinemas);
  }

  public getCinemaById(id: string): Observable<Cinema> {
    return this.getById(id, this.cinemas);
  }

  public getAuditoriums(): Observable<Auditorium[]> {
    return of(this.auditoriums);
  }

  public getAuditoriumById(id: string): Observable<Auditorium> {
    return this.getById(id, this.cinemas);
  }

  public getScreeningEvents(): Observable<ScreeningEvent[]> {
    return of(this.screeningEvents);
  }

  public getScreeningEventById(id: string): Observable<ScreeningEvent> {
    return this.getById(id, this.screeningEvents);
  }

  public getProjections(): Observable<Projection[]> {
    return of(this.projections);
  }

  public getProjectionById(id: string): Observable<Projection> {
    return this.getById(id, this.projections);
  }

  public getReports(): Observable<Report[]> {
    return of(this.reports);
  }

  public getReportById(id: string): Observable<Report> {
    return this.getById(id, this.reports);
  }

  private getById(id: string, arr: any[]): Observable<any | never> {
    const found = arr.find(item => item.id === id)
    if (!found) {
      throwError
    }
    return of(found);
  }
}
