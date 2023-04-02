import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, take } from 'rxjs';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import {
  selectActiveReport,
  selectReports,
} from 'src/app/+state/report-store/report.selectors';
import { selectScreeningEvents } from 'src/app/+state/screening-event-store/screening-event.selectors';
import {
  setActiveReport,
  triggerReportCreation,
  triggerReportRemoval,
  triggerReportUpdate,
} from './report.actions';
import { ReportCreate } from 'src/app/core/_models/report';
import { selectIdSearchedMovies } from 'src/app/+state/movie-store/movie.selectors';
import { searchMoviesByIds } from 'src/app/+state/movie-store/movie.actions';
import { MOCKED_TMDBIDS } from 'src/app/core/_mock/constants';
import { Router } from '@angular/router';
import { selectProjections } from 'src/app/+state/projection-store/projection.selectors';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  activeReportId?: string;
  activeReport$ = this.store.select(selectActiveReport);
  allReports$ = this.store.select(selectReports);

  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectIdSearchedMovies);
  projections$ = this.store.select(selectProjections);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  reports$ = this.screeningEvents$.pipe(
    take(1),
    map((arr) => arr[0].reports),
    filter((val) => val === undefined)
  );

  constructor(private readonly store: Store, private readonly router: Router) {}

  setActiveReport(id: string | undefined): void {
    if (id) {
      this.store.dispatch(
        setActiveReport({
          reportId: id,
        })
      );
      this.activeReportId = id;
    }
  }

  dispatchMovies(): void {
    this.store.dispatch(searchMoviesByIds(MOCKED_TMDBIDS));
  }

  create(report: ReportCreate): void {
    this.store.dispatch(triggerReportCreation(report));
  }

  delete(id: string): void {
    this.store.dispatch(triggerReportRemoval(id));
  }

  update(report: ReportCreate): void {
    if (this.activeReportId) {
      this.store.dispatch(triggerReportUpdate(this.activeReportId, report));
      this.router.navigate(['/report']);
    }
  }
}
