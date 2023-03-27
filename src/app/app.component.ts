import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCinemas } from './+state/cinema-store/cinema.actions';
import { loadReports } from './+state/report-store/report.actions';
import { loadScreeningEvents } from './+state/screening-event-store/screening-event.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadScreeningEvents());
    this.store.dispatch(loadCinemas());
    this.store.dispatch(loadReports());
  }
}
