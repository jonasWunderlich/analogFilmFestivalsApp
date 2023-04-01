import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MOCKED_TMDBIDS } from 'src/app/shared/_mock/constants';
import { ReportService } from '../report.service';
import { searchMoviesByIds } from 'src/app/root-store/movie-store/movie.actions';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDetailsComponent implements OnInit {
  cinemas$ = this.reportService.cinemas$;
  movies$ = this.reportService.movies$;
  report$ = this.reportService.report$;
  screeningEvents$ = this.reportService.screeningEvents$;
  projections$ = this.reportService.projections$;

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
    private readonly reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(searchMoviesByIds(MOCKED_TMDBIDS));

    this.route.params.subscribe((params) => {
      this.reportService.setActiveReport(params['id']);
    });
  }
}
