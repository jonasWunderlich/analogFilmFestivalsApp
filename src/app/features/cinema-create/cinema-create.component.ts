import { Component } from '@angular/core';
import { CinemaCreate } from 'src/app/shared/_models/cinema';
import { CinemaCreateService } from './cinema-create.service';

@Component({
  selector: 'app-cinema-create',
  templateUrl: './cinema-create.component.html',
  styleUrls: ['./cinema-create.component.scss'],
})
export class CinemaCreateComponent {
  constructor(private readonly service: CinemaCreateService) {}

  create(cinema: Partial<CinemaCreate>) {
    this.service.create(cinema).subscribe();
  }
}
