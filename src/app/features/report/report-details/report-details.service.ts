import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { selectSearchedMoviesById } from 'src/app/root-store/movie-store/movie.selectors';
import { selectActiveReport } from 'src/app/root-store/report-store/report.selectors';
import { selectScreeningEvents } from 'src/app/root-store/screening-event-store/screening-event.selectors';
import { setActiveReport } from './report-details.actions';

@Injectable({
  providedIn: 'root',
})
export class ReportDetailsService {
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
}
