import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportDetailsService } from './report-details.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReportDetailsService],
})
export class ReportDetailsComponent implements OnInit {
  activeReport$ = this.facade.activeReport$;
  relatedMovies$ = this.facade.relatedMovies$;
  relatedCinema$ = this.facade.relatedCinema$;
  relatedEvent$ = this.facade.relatedEvent$;
  relatedProjections$ = this.facade.relatedProjections$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly facade: ReportDetailsService
  ) {}

  ngOnInit(): void {
    this.facade.dispatch();
    this.route.params.subscribe((params) => {
      this.facade.setActiveId(params['id']);
    });
  }

  delete(id: string): void {
    this.facade.delete(id);
  }
}
