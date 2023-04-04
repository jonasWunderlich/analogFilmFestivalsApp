import { Component, Inject } from '@angular/core';
import { APP_TITLE } from './app.module';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngrx/store';
import { loadCinemas } from './+state/cinema-store/cinema.actions';
import { loadProjections } from './+state/projection-store/projection.actions';
import { loadScreeningEvents } from './+state/screening-event-store/screening-event.actions';
import { loadReports } from './+state/report-store/report.actions';

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

    this.store.dispatch(loadScreeningEvents());
    this.store.dispatch(loadProjections());
    this.store.dispatch(loadCinemas());
    this.store.dispatch(loadReports());
  }
}
