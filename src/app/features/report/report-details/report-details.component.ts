import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';

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
    private readonly route: ActivatedRoute,
    private readonly reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.reportService.dispatchMovies();
    this.route.params.subscribe((params) => {
      this.reportService.setActiveReport(params['id']);
    });
  }
}
