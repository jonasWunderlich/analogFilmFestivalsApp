import { Component, OnInit } from '@angular/core';
import { mockCinemas } from '../_mock/cinema.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
import { sortByDate } from '../_mock/helpers.mock';
import { mockReports } from '../_mock/report.mocks';
import { Cinema } from '../_models/cinema';
import { Report } from '../_models/report';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss']
})
export class ReportOverviewComponent implements OnInit {

  map: any;
  reports: Report[] = mockReports(30)
    .sort((a, b) => sortByDate(a.date, b.date));
  cinemas: Cinema[] = mockCinemas(20);

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-report-overview'
    )
  }

}
