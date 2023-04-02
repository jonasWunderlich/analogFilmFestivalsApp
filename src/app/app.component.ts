import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_TITLE } from './app.module';
import { loadCinemas } from './+state/cinema-store/cinema.actions';
import { loadReports } from './+state/report-store/report.actions';
import { loadScreeningEvents } from './+state/screening-event-store/screening-event.actions';
import { AuthService } from './core/services/auth.service';
import { loadProjections } from './+state/projection-store/projection.actions';
import { selectCinemas } from './+state/cinema-store/cinema.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appTitle?: string;
  $cinemas = this.store.select(selectCinemas);
  constructor(
    @Inject(APP_TITLE) appTitle: string,
    private readonly store: Store,
    public readonly auth: AuthService
  ) {
    this.appTitle = appTitle;
  }

  ngOnInit(): void {
    this.store.dispatch(loadScreeningEvents());
    this.store.dispatch(loadCinemas());
    this.store.dispatch(loadReports());
    this.store.dispatch(loadProjections());
  }
}
