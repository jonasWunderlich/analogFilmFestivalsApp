import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { selectActiveReport } from 'src/app/root-store/report-store/selectors/report.selectors';
import { neitherNullNorUndefined } from 'src/app/shared/helpers/null-or-undefined.helper';
import { selectCinemas } from '../../../root-store/cinema-store/cinema.selectors';
import { selectScreeningEvents } from '../../../root-store/screening-event-store/screening-event.selectors';
import { ScreeningEvent } from '../../../shared/_models/screening-event';
import { setActiveReport } from './report-details.actions';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  screeningEvent: ScreeningEvent | null = null;
  report$ = this.store.select(selectActiveReport);

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
