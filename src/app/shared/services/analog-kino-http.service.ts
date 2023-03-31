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
import { Auditorium } from '../_models/auditorium';
import { Cinema } from '../_models/cinema';
import { Projection } from '../_models/projection';
import { Report } from '../_models/report';
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

  private buildMocks() {
    this.reports = mockReports(40).sort((a, b) =>
      sortByISODate(a.date, b.date)
    );
    this.projections = mockProjections(200, new Date(), 400).sort((a, b) =>
      sortByISODate(a.date, b.date)
    );
    this.cinemas = mockCinemas(40);
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
    return this.getById(id, this.auditoriums);
  }

  public getScreeningEvents(): Observable<ScreeningEvent[]> {
    return of(this.screeningEvents);
  }

  public getScreeningEventById(id: string): Observable<ScreeningEvent> {
    return this.getById(id, this.screeningEvents);
  }

  /** CRUD EVENT */

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
    updateItem: ScreeningEventCreate
  ): Observable<ScreeningEvent> {
    const orgEvent = this.screeningEvents.find(
      (orgEvent) => orgEvent.title === updateItem.title
    );
    if (!orgEvent) {
      return throwError(() => new Error('ERROR updating screening event'));
    }
    const merge = { ...orgEvent, ...updateItem };
    return of(merge as ScreeningEvent);
  }

  public deleteScreeningEvent(id: string): Observable<string> {
    return this.removeFromMocks(this.screeningEvents, id);
  }

  // PROJECTIONS

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

  private create<T>(updateItem: T): Observable<T> {
    return of(updateItem);
  }

  private update<T extends { id: string }>(updateItem: T): Observable<T> {
    return of(updateItem);
  }

  removeFromMocks<T extends { id: string }>(
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
