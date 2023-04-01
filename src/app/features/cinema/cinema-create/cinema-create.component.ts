import { Component } from '@angular/core';
import { GeometryObject } from 'src/app/shared/ui/cinema-map/geo-mapping.helper';
import { CinemaCreate } from 'src/app/core/_models/cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-create',
  templateUrl: './cinema-create.component.html',
  styleUrls: ['./cinema-create.component.scss'],
})
export class CinemaCreateComponent {
  constructor(private readonly service: CinemaService) {}

  // TODO: Share Placeholder model between form & map
  geoPlaceholder: GeometryObject = {
    geoCoordinates: [12.3195136, 51.3266199],
    title: 'Neues Kino',
    id: 'createCinema',
  };

  create(cinema: CinemaCreate) {
    this.service.create(cinema);
  }
}
