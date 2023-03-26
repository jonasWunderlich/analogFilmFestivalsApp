import { createAction, props } from '@ngrx/store';
import { ScreeningEvent } from 'src/app/_models/screening-event';

export const loadScreeningEvents = createAction(
  '[Event] Load ScreeningEvents'
);

export const loadScreeningEventsSucceeded = createAction(
  '[Event] ScreeningEvents successfully loaded',
  props<{ screeningEvents: ScreeningEvent[] }>()
);

export const loadScreeningEventsFailed = createAction(
  '[Event] load ScreeningEvents failed',
  props<{ error: string }>()
);

export const loadScreeningEventById = createAction(
  '[Event] Load ScreeningEvent',
  (id: string) => ({ id })
);

export const loadScreeningEventByIdSucceeded = createAction(
  '[Event] ScreeningEvent successfully loaded',
  props<{ screeningEvent: ScreeningEvent }>()
);

export const loadScreeningEventByIdFailed = createAction(
  '[Event] load ScreeningEvent failed',
  props<{ error: string }>()
);
