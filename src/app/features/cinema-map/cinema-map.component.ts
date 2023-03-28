import { Component, Input, OnChanges } from '@angular/core';
import { Map } from 'ol';
import {
  createCinemaFeatureList,
  getCoordinatesFromCinemaList,
} from 'src/app/features/cinema-map/cinema-mapping.helper';
import { MapService } from 'src/app/shared/services/map.service';
import { Cinema } from 'src/app/shared/_models/cinema';

export interface MapDataLike {
  id: string;
  url: string;
  title: string;
}

@Component({
  selector: 'app-cinema-map',
  templateUrl: './cinema-map.component.html',
  styleUrls: ['./cinema-map.component.scss'],
})
export class CinemaMapComponent implements OnChanges {
  @Input() cinemas?: Cinema[];
  map?: Map;

  constructor(private readonly mapService: MapService) {}

  ngOnChanges(): void {
    if (this.cinemas) {
      this.map = this.mapService.buildMapFromFeatureCollection(
        createCinemaFeatureList(this.cinemas),
        getCoordinatesFromCinemaList(this.cinemas),
        'ol-map'
      );
    }
  }
}
