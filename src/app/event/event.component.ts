import { Component, OnInit } from '@angular/core';

import { mockCinemas } from '../_mock/cinema.mock';
import { Cinema } from '../_models/cinema';
import { mockScreeningEvent } from '../_mock/event.mock';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';
import { mockNumber } from '../_mock/helpers.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: ScreeningEvent = mockScreeningEvent({});
  cinemas: Cinema[] = mockCinemas(mockNumber(1,6));
  map: any;

  constructor(
    private readonly mapService: MapService,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map'
    )
  }
}
