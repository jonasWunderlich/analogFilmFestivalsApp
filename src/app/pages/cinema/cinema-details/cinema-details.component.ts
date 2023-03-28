import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { filter, take } from 'rxjs';
import { selectActiveCinema } from '../../../root-store/cinema-store/cinema.selectors';

import { ActivatedRoute } from '@angular/router';
import {
  randomDate,
  sortByDate,
} from '../../../shared/helpers/mock-data.helper';
import { MapService } from '../../../shared/services/map.service';
import { mockProjections } from '../../../shared/_mock/projection.mock';
import { Projection } from '../../../shared/_models/projection';
import { setActiveCinemaId } from './cinema-details.actions';
import { neitherNullNorUndefined } from 'src/app/shared/helpers/null-or-undefined.helper';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss'],
})
export class CinemaDetailsComponent implements OnInit {
  cinema$ = this.store.select(selectActiveCinema);
  map?: Map;
  projections: Projection[] = mockProjections(
    12,
    randomDate(new Date(), new Date(2023, 1, 0)),
    90
  ).sort((a, b) => sortByDate(a.date, b.date));

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(filter((params) => neitherNullNorUndefined(params['id'])))
      .subscribe((params) => {
        this.store.dispatch(setActiveCinemaId({ cinemaId: params['id'] }));
      });
    this.cinema$.pipe(take(1)).subscribe((cinema) => {
      this.map = this.mapService.buildMap(
        cinema?.geoCoordinates || [],
        'ol-map-cinema-details'
      );
    });
  }
}
