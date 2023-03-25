import { Component, OnInit } from '@angular/core';

import { mockCinema } from '../_mock/cinema.mock';
import { Cinema } from '../_models/cinema';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  cinema: Cinema = mockCinema({});
  map: any;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMap(this.cinema.geoCoordinates, 'ol-map')
  }

}
