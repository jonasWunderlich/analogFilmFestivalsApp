import { Component, OnInit } from '@angular/core';

import { mockCinemas } from '../_mock/cinema.mock';
import { Cinema } from '../_models/cinema';
import { mockScreeningEvent } from '../_mock/event.mock';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';
import { mockNumber } from '../_mock/helpers.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
import { Store } from '@ngrx/store';
import { searchMoviesByQuery } from '../+state/movie-store/movie.actions';
import { selectSearchedMovies } from '../+state/movie-store/movie.selectors';
import { sample } from 'lodash';
import { MOCKED_TMDB_QUERIES } from '../_mock/constants';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: ScreeningEvent = mockScreeningEvent({});
  cinemas: Cinema[] = mockCinemas(mockNumber(1,6));
  map: any;

  someMovies$ = this.store.select(selectSearchedMovies);

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store,
    ) {
  }

  ngOnInit(): void {
    this.store.dispatch(searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'light'));
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-event-details'
    )
  }
}
