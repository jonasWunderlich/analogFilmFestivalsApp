import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ScreeningEventCreate } from 'src/app/core/_models/screening-event';
import {
  triggerScreeningEventCreation,
  triggerScreeningEventRemoval,
  triggerScreeningEventUpdate,
} from './screening-event.actions';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventService {
  constructor(private readonly store: Store, private readonly router: Router) {}

  create(screeningEvent: ScreeningEventCreate): void {
    this.store.dispatch(triggerScreeningEventCreation(screeningEvent));
    this.router.navigate(['/events']);
  }

  delete(id: string): void {
    this.store.dispatch(triggerScreeningEventRemoval(id));
    this.router.navigate(['/events']);
  }

  update(id: string, screeningEvent: ScreeningEventCreate): void {
    if (id) {
      this.store.dispatch(triggerScreeningEventUpdate(id, screeningEvent));
      this.router.navigate(['/events']);
    }
  }
}
