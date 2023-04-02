import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveCinema } from 'src/app/+state/cinema-store/cinema.selectors';
import { CinemaCreate } from 'src/app/core/_models/cinema';
import { CinemaService } from '../cinema.service';
import { enteredCinemaEdit } from './cinema-edit.actions';

@Injectable({
  providedIn: 'root',
})
export class CinemaEditService {
  activeCinemaId?: string;
  activeCinema$ = this.store.select(selectActiveCinema);

  constructor(
    private readonly store: Store,
    private readonly common: CinemaService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredCinemaEdit({ id }));
      this.activeCinemaId = id;
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }

  update(item: CinemaCreate): void {
    if (this.activeCinemaId) {
      this.common.update(this.activeCinemaId, item);
    }
  }
}
