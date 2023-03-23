import { Component, OnInit } from '@angular/core';
import { mockCinemas } from '../_mock/cinema.mock';
import { Cinema } from '../_models/cinema';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {

  cinemas: Cinema[] = mockCinemas(30);
  map: any;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMap(this.cinemas[0].long, this.cinemas[0].lat, 'ol-map')
  }
}
