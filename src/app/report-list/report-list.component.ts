import { Component, OnInit } from '@angular/core';
import { mockCinemas } from '../_mock/cinema.mock';
import { sortByDate } from '../_mock/helpers.mock';
import { mockReports } from '../_mock/report.mocks';
import { Cinema } from '../_models/cinema';
import { Report } from '../_models/report';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  map: any;
  reports: Report[] = mockReports(30)
    .sort((a, b) => sortByDate(a.date, b.date));
  cinemas: Cinema[] = mockCinemas(20);

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMultiPointMap(
      this.cinemas.map(cinema => cinema.geoCoordinates),
      'ol-map'
    )
  }

}
