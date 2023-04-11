import { Injectable } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { CinemaCreate } from 'src/app/core/_models/cinema';

@Injectable()
export class CinemaCreateFacadeService {
  constructor(private readonly common: CinemaService) {}

  create(cinema: CinemaCreate): void {
    this.common.create(cinema);
  }
}
