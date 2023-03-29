import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_TITLE } from './app.module';
import { loadCinemas } from './root-store/cinema-store/cinema.actions';
import { loadReports } from './root-store/report-store/report.actions';
import { loadScreeningEvents } from './root-store/screening-event-store/screening-event.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appTitle?: string;
  constructor(
    @Inject(APP_TITLE) appTitle: string,
    private readonly store: Store
  ) {
    this.appTitle = appTitle;
  }

  ngOnInit(): void {
    this.store.dispatch(loadScreeningEvents());
    this.store.dispatch(loadCinemas());
    this.store.dispatch(loadReports());
  }
}
