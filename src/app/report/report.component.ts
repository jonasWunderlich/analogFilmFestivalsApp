import { Component, OnInit } from '@angular/core';
import { mockCinema } from '../_mock/cinema.mock';
import { mockScreeningEvent } from '../_mock/event.mock';
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
  cinema: Cinema = mockCinema({});
  event: ScreeningEvent = mockScreeningEvent({})
  map: any;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMap(this.cinema.long, this.cinema.lat, 'ol-map')
  }

}
