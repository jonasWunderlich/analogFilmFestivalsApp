import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Subscription } from 'rxjs';
import { selectSelectedCinemaByRoute } from '../../root-store/cinema-store/cinema.selectors';

import { randomDate, sortByDate } from '../../shared/helpers/mock-data.helper';
import { mockProjections } from '../../shared/_mock/projection.mock';
import { Projection } from '../../shared/_models/projection';
import { MapService } from '../../shared/services/map.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit, OnDestroy {
  // TODO: maybe switch to dispatch loadById / selectSelectedReport
  cinema$ = this.store.select(selectSelectedCinemaByRoute);
  map?: Map;
  projections: Projection[] = mockProjections(
    12,
    randomDate(new Date(), new Date(2023, 1, 0)),
    90
  ).sort((a, b) => sortByDate(a.date, b.date));
  subscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cinema$.subscribe((cinema) => {
        this.map = this.mapService.buildMap(
          cinema?.geoCoordinates || [],
          'ol-map-cinema-details'
        );
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
