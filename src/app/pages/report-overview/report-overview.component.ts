import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';
import { selectReports } from '../../root-store/report-store/report.selectors';
import {
  createCinemaFeatureList,
  getCoordinatesFromCinemaList,
} from '../../shared/helpers/geo.helper';
import { MapService } from '../../shared/services/map.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
})
export class ReportOverviewComponent implements OnInit, OnDestroy {
  map?: Map;
  reports$ = this.store.select(selectReports);
  cinemas$ = this.store.select(selectCinemas);
  subscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cinemas$.subscribe((cinemas) => {
        this.map = this.mapService.buildMapFromFeatureCollection(
          createCinemaFeatureList(cinemas),
          getCoordinatesFromCinemaList(cinemas),
          'ol-map-report-overview'
        );
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
