import { Component, Inject } from '@angular/core';
import { APP_TITLE } from './app.module';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngrx/store';
import { enteredCinemaOverview } from './features/cinema/cinema-overview/cinema-overview.actions';
import { enteredProjectionOverview } from './features/projection/projection-overview/projection-overview.actions';
import { enteredReportOverview } from './features/report/report-overview/report-overview.actions';
import { enteredScreeningEventOverview } from './features/screening-event/screening-event-overview/screening-event-overview.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle?: string;
  constructor(
    @Inject(APP_TITLE) appTitle: string,
    public readonly auth: AuthService,
    public readonly store: Store
  ) {
    this.appTitle = appTitle;

    this.store.dispatch(enteredScreeningEventOverview());
    this.store.dispatch(enteredProjectionOverview());
    this.store.dispatch(enteredCinemaOverview());
    this.store.dispatch(enteredReportOverview());
  }
}
