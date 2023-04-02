import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import {
  searchMoviesByIds,
  searchMoviesByQuery,
} from 'src/app/+state/movie-store/movie.actions';
import { selectQuerySearchedMovies } from 'src/app/+state/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import {
  MOCKED_TMDBIDS,
  MOCKED_TMDB_QUERIES,
} from 'src/app/core/_mock/constants';
import { sample } from 'lodash';
import { enteredReportDetails } from './report-details.actions';
import { ScreeningEventService } from '../../screening-event/screening-event.service';
import { selectActiveReport } from 'src/app/+state/report-store/report.selectors';

@Injectable({
  providedIn: 'root',
})
export class ReportDetailsService {
  activeReport$ = this.store.select(selectActiveReport);
  relatedMovies$ = this.store.select(selectQuerySearchedMovies);

  // relatedCinemas$ = this.store.select(selectRelatedCinemas);
  // relatedEvents$ = this.store.select(selectRelatedEvents);
  // relatedProjections$ = this.store.select(selectRelatedProjections);

  constructor(
    private readonly store: Store,
    private readonly common: ScreeningEventService
  ) {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
  }

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredReportDetails({ id }));
    }
  }

  dispatchMovies(): void {
    this.store.dispatch(searchMoviesByIds(MOCKED_TMDBIDS));
  }

  delete(id: string): void {
    this.common.delete(id);
  }
}
