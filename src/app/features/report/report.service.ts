import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, map, of, take } from 'rxjs';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { selectSearchedMoviesById } from 'src/app/root-store/movie-store/movie.selectors';
import {
  selectActiveReport,
  selectReports,
} from 'src/app/root-store/report-store/report.selectors';
import { selectScreeningEvents } from 'src/app/root-store/screening-event-store/screening-event.selectors';
import { setActiveReport } from './report.actions';
import { ReportCreate } from 'src/app/shared/_models/report';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reports$ = this.store.select(selectReports);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectSearchedMoviesById);
  report$ = this.store.select(selectActiveReport);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  projections$ = this.screeningEvents$.pipe(
    take(1),
    map((arr) => arr[0].projections),
    filter((val) => val === undefined)
  );

  constructor(private readonly store: Store) {}

  public setActiveReport(id: string | undefined): void {
    id &&
      this.store.dispatch(
        setActiveReport({
          reportId: id,
        })
      );
  }

  create(report: ReportCreate): Observable<ReportCreate> {
    // TODO: dispatch save report
    console.log('dispatch | create report:', report);
    return of(report);
  }
}
