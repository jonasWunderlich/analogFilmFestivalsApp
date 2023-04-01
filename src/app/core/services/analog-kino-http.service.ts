import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import {
  getRandomSubarray,
  mockNumber,
  sortByISODate,
} from '../utilities/mock-data';
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
    this.projections = mockProjections(100, new Date(), 400).sort((a, b) =>
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

  public deleteCinema(id: string): Observable<string> {
    return this.deleteGeneric(id, this.cinemas);
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
    return this.createGeneric<ScreeningEventCreate, ScreeningEvent>(newEvent);
  }

  public deleteScreeningEvent(id: string): Observable<string> {
    return this.deleteGeneric(id, this.screeningEvents);
  }

  public updateScreeningEvent(
    id: string,
    updateItem: ScreeningEventCreate,
    arr = this.screeningEvents
  ): Observable<ScreeningEvent> {
    return this.updateGeneric<ScreeningEvent, ScreeningEventCreate>(
      id,
      updateItem,
      arr
    ) as Observable<ScreeningEvent>;
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
    return this.createGeneric<ReportCreate, Report>(item);
  }

  public deleteReport(id: string): Observable<string> {
    return this.deleteGeneric(id, this.reports);
  }

  public updateReport(
    id: string,
    updateItem: ReportCreate,
    arr = this.reports
  ): Observable<Report> {
    return this.updateGeneric<Report, ReportCreate>(
      id,
      updateItem,
      arr
    ) as Observable<Report>;
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
    return this.createGeneric<AuditoriumCreate, Auditorium>(item);
  }

  public deleteAuditorium(id: string): Observable<string> {
    return this.deleteGeneric(id, this.auditoriums);
  }

  public updateAuditorium(
    id: string,
    updateItem: AuditoriumCreate,
    arr = this.auditoriums
  ): Observable<Auditorium> {
    return this.updateGeneric<Auditorium, AuditoriumCreate>(
      id,
      updateItem,
      arr
    ) as Observable<Auditorium>;
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
    return this.createGeneric<ProjectionCreate, Projection>(item);
  }

  public deleteProjection(id: string): Observable<string> {
    return this.removeFromMocks(this.projections, id);
  }

  public updateProjection(
    id: string,
    updateItem: ProjectionCreate,
    arr = this.projections
  ): Observable<Projection> {
    return this.updateGeneric<Projection, ProjectionCreate>(
      id,
      updateItem,
      arr
    ) as Observable<Projection>;
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

  public updateGeneric<T extends V & { id: string }, V>(
    id: string,
    updateItem: V,
    arr: Array<T>
  ): Observable<V> {
    const orgItem = arr.find((item) => item.id === id);
    if (orgItem === undefined) {
      return throwError(() => new Error('ERROR updating Value'));
    } else {
      // TODO: Somethings off with the return type
      return of({ ...orgItem, ...updateItem } as T);
    }
  }
}
