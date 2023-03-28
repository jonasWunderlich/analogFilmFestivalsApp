import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectActiveReport } from 'src/app/root-store/report-store/selectors/report.selectors';
import { selectCinemas } from '../../../root-store/cinema-store/cinema.selectors';
import { selectScreeningEvents } from '../../../root-store/screening-event-store/screening-event.selectors';
import { ScreeningEvent } from '../../../shared/_models/screening-event';
import { setActiveReport } from './report-details.actions';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit, OnDestroy {
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  screeningEvent: ScreeningEvent | null = null;
  report$ = this.store.select(selectActiveReport);
  subscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.screeningEvents$.subscribe((item) => {
        this.screeningEvent = item[0];
      })
    );
    this.activatedRoute.params.subscribe((params) => {
      params['id'] &&
        this.store.dispatch(setActiveReport({ reportId: params['id'] }));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
