import { Component, OnInit } from '@angular/core';

import { mockCinema } from '../_mock/cinema.mock';
import { Cinema } from '../_models/cinema';
import { mockScreeningEvent } from '../_mock/event.mock';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';
import { Store } from '@ngrx/store';
import { loadMovieById } from '../+state/movie-store/movie.actions';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: ScreeningEvent = mockScreeningEvent({});
  cinema: Cinema = mockCinema({});
  map: any;

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMap(this.cinema.geoCoordinates, 'ol-map');
    this.store.next(loadMovieById('1'));
  }

}
