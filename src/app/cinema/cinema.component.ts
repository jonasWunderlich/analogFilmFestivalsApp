import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Subscription } from 'rxjs';
import { selectSelectedCinemaByRoute } from '../+state/cinema-store/cinema.selectors';

import { randomDate, sortByDate } from '../_mock/helpers.mock';
import { mockProjections } from '../_mock/projection.mock';
import { Projection } from '../_models/projection';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit, OnDestroy {

  // TODO: maybe switch to dispatch loadById / selectSelectedReport
  cinema$ = this.store.select(selectSelectedCinemaByRoute);
  map = new Map;
  projections: Projection[] = mockProjections(12, randomDate(new Date(), new Date(2023, 1, 0)), 90)
    .sort((a, b) => sortByDate(a.date, b.date));
  subscription = new Subscription;

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService,
    ) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.cinema$.subscribe(cinema => {
        this.map = this.mapService.buildMap(cinema?.geoCoordinates || [],'ol-map-report-overview')
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
