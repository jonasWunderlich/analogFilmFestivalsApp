import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchMoviesByQuery } from 'src/app/+state/movie-store/movie.actions';
import { selectQuerySearchedMovies } from 'src/app/+state/movie-store/movie.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/core/_mock/constants';
import { sample } from 'lodash';
import { enteredReportDetails } from './report-details.actions';
import { selectActiveReport } from 'src/app/+state/report-store/report.selectors';
import { Subscription, first, of } from 'rxjs';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';
import { selectActiveCinema } from 'src/app/+state/cinema-store/cinema.selectors';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { ReportService } from '../report.service';

@Injectable({
  providedIn: 'root',
})
export class ReportDetailsService {
  activeReport$ = this.store.select(selectActiveReport);
  relatedMovies$ = this.store.select(selectQuerySearchedMovies);
  relatedCinema$ = this.store.select(selectActiveCinema);
  relatedEvent$ = this.store.select(selectActiveScreeningEvent);
  relatedProjections$ = of([]);
  subscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly common: ReportService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredReportDetails({ id }));
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }

  dispatch(): void {
    // this.store.dispatch(searchMoviesByIds(MOCKED_TMDBIDS));
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
    this.activeReport$.pipe(first()).subscribe((report) => {
      // TODO: find more elegant way to dispatch id collection
      if (report?.cinemaRef) {
        this.store.dispatch(updateCinemasOnMap({ ids: [report?.cinemaRef] }));
      }
    });
  }
}
