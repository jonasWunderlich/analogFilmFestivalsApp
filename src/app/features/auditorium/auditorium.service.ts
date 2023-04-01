import { Injectable } from '@angular/core';
import { AuditoriumCreate } from 'src/app/core/_models/auditorium';
import {
  triggerAuditoriumCreation,
  triggerAuditoriumRemoval,
  triggerAuditoriumUpdate,
} from './auditorium.actions';
import { Store } from '@ngrx/store';
import { selectActiveCinema } from 'src/app/+state/cinema-store/cinema.selectors';

@Injectable({ providedIn: 'root' })
export class AuditoriumService {
  cinema$ = this.store.select(selectActiveCinema);
  activeAuditoriumId?: string;

  constructor(private readonly store: Store) {}

  create(auditorium: AuditoriumCreate): void {
    this.store.dispatch(triggerAuditoriumCreation(auditorium));
  }

  delete(id: string): void {
    this.store.dispatch(triggerAuditoriumRemoval(id));
  }

  update(auditorium: AuditoriumCreate): void {
    if (this.activeAuditoriumId) {
      this.store.dispatch(
        triggerAuditoriumUpdate(this.activeAuditoriumId, auditorium)
      );
    }
  }
}
