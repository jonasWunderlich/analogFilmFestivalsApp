import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { mockCinemas } from '../_mock/cinema.mock';
import { Cinema } from '../_models/cinema';
import { mockScreeningEvent } from '../_mock/event.mock';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';
import { mockNumber } from '../_mock/helpers.mock';


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
    private readonly store: Store,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMultiPointMap(
      this.cinemas.map(cinema => cinema.geoCoordinates),
      'ol-map'
    )
  }
}
