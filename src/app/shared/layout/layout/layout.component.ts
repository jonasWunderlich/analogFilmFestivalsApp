import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCinemas } from 'src/app/+state/cinema-store/cinema.actions';
import { loadProjections } from 'src/app/+state/projection-store/projection.actions';
import { loadReports } from 'src/app/+state/report-store/report.actions';
import { loadScreeningEvents } from 'src/app/+state/screening-event-store/screening-event.actions';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  $selectedGeoData = this.service.$selectedCinemasOnMap;

  constructor(
    private readonly store: Store,
    private readonly service: LayoutService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadScreeningEvents());
    this.store.dispatch(loadCinemas());
    this.store.dispatch(loadReports());
    this.store.dispatch(loadProjections());
  }
}
