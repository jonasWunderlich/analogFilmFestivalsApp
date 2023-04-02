import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportDetailsService } from './report-details.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDetailsComponent implements OnInit {
  activeReport$ = this.facade.activeReport$;
  relatedMovies$ = this.facade.relatedMovies$;
  // relatedCinemas$ = this.facade.relatedCinemas$;
  // relatedEvents$ = this.facade.relatedEvents$;
  // relatedProjections$ = this.facade.relatedProjections$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly facade: ReportDetailsService
  ) {}

  ngOnInit(): void {
    this.facade.dispatchMovies();
    this.route.params.subscribe((params) => {
      this.facade.setActiveId(params['id']);
    });
  }
}
