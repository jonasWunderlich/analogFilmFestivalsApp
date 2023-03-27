import { Component, OnDestroy, OnInit } from '@angular/core';

import { MapService } from '../_services/map.service';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_helpers/geo.helper';
import { Store } from '@ngrx/store';
import { selectSearchedMovies } from '../+state/movie-store/movie.selectors';
import { selectSelectedScreeningEventByRoute } from '../+state/screening-event-store/screening-event.selectors';
import { selectCinemas } from '../+state/cinema-store/cinema.selectors';
import { Subscription } from 'rxjs';
import { Map } from 'ol';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {

  event$ = this.store.select(selectSelectedScreeningEventByRoute);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectSearchedMovies);
  map = new Map;
  subscription = new Subscription;

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService,
    ) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.cinemas$.subscribe(cinemas => {
        this.map = this.mapService.buildMapFromFeatureCollection(
          createCinemaFeatureList(cinemas),
          getCoordinatesFromCinemaList(cinemas),
          'ol-map-event-overview'
          )
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
