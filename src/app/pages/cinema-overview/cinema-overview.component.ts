import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';
import {
  createCinemaFeatureList,
  getCoordinatesFromCinemaList,
} from '../../shared/helpers/geo.helper';
import { MapService } from '../../shared/services/map.service';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss'],
})
export class CinemaOverviewComponent implements OnInit, OnDestroy {
  map?: Map;
  cinemas$ = this.store.select(selectCinemas);
  subscription = new Subscription();

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cinemas$.subscribe((cinema) => {
        this.map = this.mapService.buildMapFromFeatureCollection(
          createCinemaFeatureList(cinema),
          getCoordinatesFromCinemaList(cinema),
          'ol-map-cinema-overview'
        );
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
