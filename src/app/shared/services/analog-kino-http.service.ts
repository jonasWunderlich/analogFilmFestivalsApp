import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import {
  getRandomSubarray,
  mockNumber,
  sortByISODate,
} from '../helpers/mock-data.helper';
import { mockProjections } from '../_mock/projection.mock';
import { mockReports } from '../_mock/report.mocks';
import { Auditorium, AuditoriumCreate } from '../_models/auditorium';
import { Cinema, CinemaCreate } from '../_models/cinema';
import { Projection, ProjectionCreate } from '../_models/projection';
import { Report, ReportCreate } from '../_models/report';
import {
  ScreeningEvent,
  ScreeningEventCreate,
} from '../_models/screening-event';
import { uniqueId } from 'lodash';

export enum CONTENT_TYPE {
  EVENT = 'EVENT',
  REPORT = 'REPORT',
  CINEMA = 'CINEMA',
  PROJECTION = 'PROJECTION',
  AUDITORIUM = 'AUDITORIUM',
}

@Injectable({
  providedIn: 'platform',
})
export class AnalogKinoBackendService {
  cinemas: Cinema[] = [];
  auditoriums: Auditorium[] = [];
  screeningEvents: ScreeningEvent[] = [];
  projections: Projection[] = [];
  reports: Report[] = [];

  constructor() {
    this.buildMocks();
  }

  /** M O C K S */

  private buildMocks() {
    this.reports = mockReports(40).sort((a, b) =>
      sortByISODate(a.date, b.date)
    );
    this.projections = mockProjections(200, new Date(), 400).sort((a, b) =>
      sortByISODate(a.date, b.date)
    );
    this.cinemas = mockCinemas(20);
    this.screeningEvents = mockScreeningEvents(40).sort((a, b) =>
      sortByISODate(a.start, b.start)
    );
    this.screeningEvents.forEach((event) => {
      event.cinemaRefs = getRandomSubarray(this.cinemas, mockNumber(1, 10)).map(
        (item) => item.id
      );
      event.projectionRefs = getRandomSubarray(
        this.projections,
        mockNumber(1, 10)
      ).map((item) => item.id);
      event.reportRefs = getRandomSubarray(this.reports, mockNumber(1, 10)).map(
        (item) => item.id
      );
    });
    this.cinemas.forEach((cinema) => {
      cinema.projectionRefs = getRandomSubarray(
        this.projections,
        mockNumber(1, 10)
      ).map((item) => item.id);
      cinema.reportRefs = getRandomSubarray(
        this.reports,
        mockNumber(1, 10)
      ).map((item) => item.id);
    });
  }

  /** HTTP GET Cinema(s) */

  public getCinemas(): Observable<Cinema[]> {
    return of(this.cinemas);
  }

  public getCinemaById(id: string): Observable<Cinema> {
    return this.getById(id, this.cinemas);
  }

  /** HTTP CRUD Cinmea */

  public createCinema(item: CinemaCreate): Observable<Cinema> {
    const transformed: Cinema = {
      id: uniqueId(),
      geoCoordinates: [item.longitude, item.latitude],
      ...item,
    } as Cinema;
    return of(transformed);
  }

  public updateCinema(
    id: string,
    updateItem: CinemaCreate
  ): Observable<Cinema> {
    const orgCinema = this.cinemas.find((item) => item.id === id);
    if (orgCinema === undefined) {
      return throwError(() => new Error('ERROR updating screening event'));
    }
    const merge = { ...orgCinema, ...updateItem };
    return of(merge as Cinema);
  }

  public deleteCinema(id: string): Observable<string> {
    return this.removeFromMocks(this.cinemas, id);
  }

  /** HTTP GET ScreeningEvent(s) */

  public getScreeningEvents(): Observable<ScreeningEvent[]> {
    return of(this.screeningEvents);
  }

  public getScreeningEventById(id: string): Observable<ScreeningEvent> {
    return this.getById(id, this.screeningEvents);
  }

  /** HTTP CRUD ScreeningEvent */

  public createScreeningEvent(
    newEvent: ScreeningEventCreate
  ): Observable<ScreeningEvent> {
    const transformed = {
      id: uniqueId(),
      ...newEvent,
    } as ScreeningEvent;
    return of(transformed);
  }

  public updateScreeningEvent(
    id: string,
    updateItem: ScreeningEventCreate
  ): Observable<ScreeningEvent> {
    const orgEvent = this.screeningEvents.find(
      (orgEvent) => orgEvent.id === id
    );
    if (orgEvent === undefined) {
      return throwError(() => new Error('ERROR updating screening event'));
    }
    const merge = { ...orgEvent, ...updateItem };
    return of(merge as ScreeningEvent);
  }

  public deleteScreeningEvent(id: string): Observable<string> {
    return this.removeFromMocks(this.screeningEvents, id);
  }

  /** HTTP GET Report(s) */

  public getReports(): Observable<Report[]> {
    return of(this.reports);
  }

  public getReportById(id: string): Observable<Report> {
    return this.getById(id, this.reports);
  }

  /** HTTP CRUD Report */

  public createReport(item: ReportCreate): Observable<Report> {
    const transformed: Report = {
      id: uniqueId(),
      ...item,
    } as Report;
    return of(transformed);
  }

  public updateReport(
    id: string,
    updateItem: ReportCreate
  ): Observable<Report> {
    const orgReport = this.reports.find((item) => item.id === id);
    if (orgReport === undefined) {
      return throwError(() => new Error('ERROR updating report'));
    }
    const merge = { ...orgReport, ...updateItem };
    return of(merge as Report);
  }

  public deleteReport(id: string): Observable<string> {
    return this.removeFromMocks(this.reports, id);
  }

  /** HTTP GET Auditorium(s) */

  public getAuditoriums(): Observable<Auditorium[]> {
    return of(this.auditoriums);
  }

  public getAuditoriumById(id: string): Observable<Auditorium> {
    return this.getById(id, this.auditoriums);
  }

  /** HTTP CRUD Auditorium */

  public createAuditorium(item: AuditoriumCreate): Observable<Auditorium> {
    const transformed: Auditorium = {
      id: uniqueId(),
      ...item,
    } as Auditorium;
    return of(transformed);
  }

  public updateAuditorium(
    id: string,
    updateItem: AuditoriumCreate
  ): Observable<Auditorium> {
    const orgAuditorium = this.auditoriums.find((item) => item.id === id);
    if (orgAuditorium === undefined) {
      return throwError(() => new Error('ERROR updating Auditorium'));
    }
    const merge = { ...orgAuditorium, ...updateItem };
    return of(merge as Auditorium);
  }

  public deleteAuditorium(id: string): Observable<string> {
    return this.removeFromMocks(this.auditoriums, id);
  }

  /** HTTP GET Projection(s) */

  public getProjections(): Observable<Projection[]> {
    return of(this.projections);
  }

  public getProjectionById(id: string): Observable<Projection> {
    return this.getById(id, this.projections);
  }

  /** HTTP CRUD Projection */

  public createProjection(item: ProjectionCreate): Observable<Projection> {
    const transformed: Projection = {
      id: uniqueId(),
      ...item,
    } as Projection;
    return of(transformed);
  }

  public updateProjection(
    id: string,
    updateItem: ProjectionCreate,
    arr = this.projections
  ): Observable<Projection> {
    const orgProjection = arr.find((item) => item.id === id);
    if (orgProjection === undefined) {
      return throwError(() => new Error('ERROR updating Projection'));
    }
    const merge = { ...orgProjection, ...updateItem };
    return of(merge as Projection);
  }

  public deleteProjection(id: string): Observable<string> {
    return this.removeFromMocks(this.projections, id);
  }

  /** Generic Helpers: GET */

  private getById<T extends { id: string }>(
    id: string,
    arr: T[]
  ): Observable<T | never> {
    const found = arr.find((item) => item.id === id);
    if (found === undefined) {
      return EMPTY;
    }
    return of(found);
  }

  /** Generic Helpers: CRUD */

  public createGeneric<T, V>(item: T): Observable<V> {
    const transformed: V = {
      id: uniqueId(),
      ...item,
    } as V;
    return of(transformed);
  }

  public updateGenerics<T extends { id: string }, V>(
    id: string,
    updateItem: V,
    arr: Array<T>
  ): Observable<V> {
    const orgItem = arr.find((item) => item.id === id);
    if (orgItem === undefined) {
      return throwError(() => new Error('ERROR updating Value'));
    } else {
      return of({ ...orgItem, ...updateItem } as V);
    }
  }

  public deleteGeneric<T extends { id: string }>(
    id: string,
    arr: Array<T>
  ): Observable<string> {
    this.deleteFromArray(arr, id);
    return of(id);
  }

  private removeFromMocks<T extends { id: string }>(
    arr: Array<T>,
    id: string
  ): Observable<string> {
    arr = this.deleteFromArray(arr, id);
    return of(id);
  }

  private deleteFromArray<T extends { id: string }>(
    arr: Array<T>,
    id: string
  ): Array<T> {
    return arr.filter((item) => item.id !== id);
  }
}
