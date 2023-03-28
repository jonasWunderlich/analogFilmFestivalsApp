import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedReportByRoute } from '../+state/report-store/report.selectors';
import {
  createCinemaFeatureList,
  getCoordinatesFromCinemaList,
} from '../_helpers/geo.helper';
import { MapService } from '../_services/map.service';
import { Map } from 'ol';
import { selectCinemas } from '../+state/cinema-store/cinema.selectors';
import { Subscription } from 'rxjs';
import { selectScreeningEvents } from '../+state/screening-event-store/screening-event.selectors';
import { ScreeningEvent } from '../_models/screening-event';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit, OnDestroy {
  map?: Map;
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  screeningEvent: ScreeningEvent | null = null;
  // TODO: maybe switch to dispatch loadById / selectSelectedReport
  report$ = this.store.select(selectSelectedReportByRoute);
  subscription = new Subscription();

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cinemas$.subscribe((cinemas) => {
        this.map = this.mapService.buildMapFromFeatureCollection(
          createCinemaFeatureList(cinemas),
          getCoordinatesFromCinemaList(cinemas),
          'ol-map-report-details'
        );
      })
    );
    this.subscription.add(
      this.screeningEvents$.subscribe((item) => {
        this.screeningEvent = item[0];
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
