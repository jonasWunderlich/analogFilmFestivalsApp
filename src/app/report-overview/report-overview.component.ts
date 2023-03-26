import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadReports } from '../+state/report-store/report.actions';
import { selectReports } from '../+state/report-store/report.selectors';
import { mockCinemas } from '../_mock/cinema.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
import { Cinema } from '../_models/cinema';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss']
})
export class ReportOverviewComponent implements OnInit {

  map: any;
  reports$ = this.store.select(selectReports);
  cinemas: Cinema[] = mockCinemas(20);

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-report-overview'
      )
    this.store.dispatch(loadReports());
  }

}
