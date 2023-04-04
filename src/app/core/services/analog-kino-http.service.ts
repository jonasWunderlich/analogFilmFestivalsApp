import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { Auditorium, AuditoriumCreate } from '../_models/auditorium';
import { Cinema, CinemaCreate } from '../_models/cinema';
import { Projection, ProjectionCreate } from '../_models/projection';
import { Report, ReportCreate } from '../_models/report';
import {
  ScreeningEvent,
  ScreeningEventCreate,
} from '../_models/screening-event';
import { uniqueId } from 'lodash';
import { buildRefrencedApiMocks } from '../utilities/build-referenced-mocks';

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
  refApiMocks = buildRefrencedApiMocks();

  /** HTTP GET Cinema(s) */

  public getCinemas(): Observable<Cinema[]> {
    return of(this.refApiMocks.cinemas);
  }

  public getCinemaById(id: string): Observable<Cinema> {
    return this.getById(id, this.refApiMocks.cinemas);
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
    return this.deleteGeneric(id, this.refApiMocks.cinemas);
  }

  public updateCinema(
    id: string,
    updateItem: CinemaCreate
  ): Observable<Cinema> {
    const orgCinema = this.refApiMocks.cinemas.find((item) => item.id === id);
    if (orgCinema === undefined) {
      return throwError(() => new Error('ERROR updating screening event'));
    }
    const merge = { ...orgCinema, ...updateItem };
    return of(merge as Cinema);
  }

  /** HTTP GET ScreeningEvent(s) */

  public getScreeningEvents(): Observable<ScreeningEvent[]> {
    return of(this.refApiMocks.screeningEvents);
  }

  public getScreeningEventById(id: string): Observable<ScreeningEvent> {
    return this.getById(id, this.refApiMocks.screeningEvents);
  }

  /** HTTP CRUD ScreeningEvent */

  public createScreeningEvent(
    newEvent: ScreeningEventCreate
  ): Observable<ScreeningEvent> {
    return this.createGeneric<ScreeningEventCreate, ScreeningEvent>(newEvent);
  }

  public deleteScreeningEvent(id: string): Observable<string> {
    return this.deleteGeneric(id, this.refApiMocks.screeningEvents);
  }

  public updateScreeningEvent(
    id: string,
    updateItem: ScreeningEventCreate,
    arr = this.refApiMocks.screeningEvents
  ): Observable<ScreeningEvent> {
    return this.updateGeneric<ScreeningEvent, ScreeningEventCreate>(
      id,
      updateItem,
      arr
    ) as Observable<ScreeningEvent>;
  }

  /** HTTP GET Report(s) */

  public getReports(): Observable<Report[]> {
    return of(this.refApiMocks.reports);
  }

  public getReportById(id: string): Observable<Report> {
    return this.getById(id, this.refApiMocks.reports);
  }

  /** HTTP CRUD Report */

  public createReport(item: ReportCreate): Observable<Report> {
    return this.createGeneric<ReportCreate, Report>(item);
  }

  public deleteReport(id: string): Observable<string> {
    return this.deleteGeneric(id, this.refApiMocks.reports);
  }

  public updateReport(
    id: string,
    updateItem: ReportCreate,
    arr = this.refApiMocks.reports
  ): Observable<Report> {
    return this.updateGeneric<Report, ReportCreate>(
      id,
      updateItem,
      arr
    ) as Observable<Report>;
  }

  /** HTTP GET Auditorium(s) */

  public getAuditoriums(): Observable<Auditorium[]> {
    return of(this.refApiMocks.auditoriums);
  }

  public getAuditoriumById(id: string): Observable<Auditorium> {
    return this.getById(id, this.refApiMocks.auditoriums);
  }

  /** HTTP CRUD Auditorium */

  public createAuditorium(item: AuditoriumCreate): Observable<Auditorium> {
    return this.createGeneric<AuditoriumCreate, Auditorium>(item);
  }

  public deleteAuditorium(id: string): Observable<string> {
    return this.deleteGeneric(id, this.refApiMocks.auditoriums);
  }

  public updateAuditorium(
    id: string,
    updateItem: AuditoriumCreate,
    arr = this.refApiMocks.auditoriums
  ): Observable<Auditorium> {
    return this.updateGeneric<Auditorium, AuditoriumCreate>(
      id,
      updateItem,
      arr
    ) as Observable<Auditorium>;
  }

  /** HTTP GET Projection(s) */

  public getProjections(): Observable<Projection[]> {
    return of(this.refApiMocks.projections);
  }

  public getProjectionById(id: string): Observable<Projection> {
    return this.getById(id, this.refApiMocks.projections);
  }

  /** HTTP CRUD Projection */

  public createProjection(item: ProjectionCreate): Observable<Projection> {
    return this.createGeneric<ProjectionCreate, Projection>(item);
  }

  public deleteProjection(id: string): Observable<string> {
    return this.removeFromMocks(this.refApiMocks.projections, id);
  }

  public updateProjection(
    id: string,
    updateItem: ProjectionCreate,
    arr = this.refApiMocks.projections
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
