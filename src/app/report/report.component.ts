import { Component, OnInit } from '@angular/core';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvent } from '../_mock/event.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
import { mockNumber } from '../_mock/helpers.mock';
import { mockReport } from '../_mock/report.mocks';
import { Cinema } from '../_models/cinema';
import { Report } from '../_models/report';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  report: Report = mockReport({});
  cinemas: Cinema[] = mockCinemas(mockNumber(1,6));
  event: ScreeningEvent = mockScreeningEvent({})
  map: any;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-report-details'
    )
  }

}
