import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMoviesByIds } from 'src/app/root-store/movie-store/movie.actions';
import { MOCKED_TMDBIDS } from 'src/app/shared/_mock/constants';
import { ReportDetailsService } from './report-details.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDetailsComponent implements OnInit {
  cinemas$ = this.detailsService.cinemas$;
  movies$ = this.detailsService.movies$;
  report$ = this.detailsService.report$;
  screeningEvents$ = this.detailsService.screeningEvents$;
  projections$ = this.detailsService.projections$;

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
    private readonly detailsService: ReportDetailsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadMoviesByIds(MOCKED_TMDBIDS));

    this.route.params.subscribe((params) => {
      this.detailsService.setActiveReport(params['id']);
    });
  }
}
