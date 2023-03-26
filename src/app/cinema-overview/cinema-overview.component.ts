import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCinemas } from '../+state/cinema-store/cinema.actions';
import { selectCinemas } from '../+state/cinema-store/cinema.selectors';
import { mockCinemas } from '../_mock/cinema.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
import { Cinema } from '../_models/cinema';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss']
})
export class CinemaOverviewComponent implements OnInit {

  map: any;

  cinemasDeprecated: Cinema[] = mockCinemas(30);
  cinemas$ = this.store.select(selectCinemas);

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemasDeprecated),
      getCoordinatesFromCinemaList(this.cinemasDeprecated),
      'ol-map-cinema-overview'
    )
    this.store.dispatch(loadCinemas());
  }
}
