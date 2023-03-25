import { Component, OnInit } from '@angular/core';

import { mockCinema } from '../_mock/cinema.mock';
import { randomDate, sortByDate } from '../_mock/helpers.mock';
import { mockProjections } from '../_mock/projection.mock';
import { Cinema } from '../_models/cinema';
import { Projection } from '../_models/projection';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  cinema: Cinema = mockCinema({});
  projections: Projection[] = mockProjections(12, randomDate(new Date(), new Date(2023, 1, 0)), 90)
    .sort((a, b) => sortByDate(a.date, b.date));
  map: any;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMap(this.cinema.geoCoordinates, 'ol-map-cinema-details')
  }

}
