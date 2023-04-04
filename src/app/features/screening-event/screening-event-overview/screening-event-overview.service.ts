import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectScreeningEvents } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { ScreeningEventService } from '../screening-event.service';
import { enteredScreeningEventOverview } from './screening-event-overview.actions';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventOverviewService {
  events$ = this.store.select(selectScreeningEvents);

  constructor(
    private readonly store: Store,
    private readonly common: ScreeningEventService
  ) {}

  public dispatchEnter(): void {
    this.store.dispatch(enteredScreeningEventOverview());
  }

  public delete(id: string): void {
    this.common.delete(id);
  }
}
