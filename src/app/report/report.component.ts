import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedReportByRoute } from '../+state/report-store/report.selectors';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvent } from '../_mock/event.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_helpers/geo.helper';
import { mockNumber } from '../_mock/helpers.mock';
import { Cinema } from '../_models/cinema';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  // TODO: maybe switch to dispatch loadById / selectSelectedReport
  report$ = this.store.select(selectSelectedReportByRoute);
  cinemas: Cinema[] = mockCinemas(mockNumber(1,6));
  event: ScreeningEvent = mockScreeningEvent({})
  map: any;

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-report-details'
    );
  }

}
