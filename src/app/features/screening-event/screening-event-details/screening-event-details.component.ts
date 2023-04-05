import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningEventDetailsService } from './screening-event-details.service';

@Component({
  selector: 'app-screening-event-details',
  templateUrl: './screening-event-details.component.html',
  styleUrls: ['./screening-event-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventDetailsComponent implements OnInit {
  event$ = this.facade.event$;
  cinemas$ = this.facade.relatedCinemas$;
  movies$ = this.facade.relatedMovies$;
  reports$ = this.facade.relatedReports;
  projections$ = this.facade.relatedProjections$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly facade: ScreeningEventDetailsService
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
