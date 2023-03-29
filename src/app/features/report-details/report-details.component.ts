import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { loadMoviesByIds } from 'src/app/root-store/movie-store/movie.actions';
import { selectSearchedMoviesById } from 'src/app/root-store/movie-store/movie.selectors';
import { selectActiveReport } from 'src/app/root-store/report-store/report.selectors';
import { selectScreeningEvents } from 'src/app/root-store/screening-event-store/screening-event.selectors';
import { neitherNullNorUndefined } from 'src/app/shared/helpers/null-or-undefined.helper';
import { MOCKED_TMDBIDS } from 'src/app/shared/_mock/constants';
import { ScreeningEvent } from 'src/app/shared/_models/screening-event';
import { setActiveReport } from './report-details.actions';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDetailsComponent implements OnInit {
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  screeningEvent: ScreeningEvent | null = null;
  report$ = this.store.select(selectActiveReport);
  movies$ = this.store.select(selectSearchedMoviesById);

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadMoviesByIds(MOCKED_TMDBIDS));
    this.screeningEvents$.pipe(take(1)).subscribe((item) => {
      this.screeningEvent = item[0];
    });
    this.activatedRoute.params
      .pipe(take(1))
      .pipe(filter((params) => neitherNullNorUndefined(params['id'])))
      .subscribe((params) => {
        this.store.dispatch(setActiveReport({ reportId: params['id'] }));
      });
  }
}
