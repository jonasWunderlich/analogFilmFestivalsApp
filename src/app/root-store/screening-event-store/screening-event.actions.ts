import { createAction, props } from '@ngrx/store';
import { ScreeningEvent } from 'src/app/shared/_models/screening-event';

export const loadScreeningEvents = createAction('[Event] Load ScreeningEvents');

export const loadScreeningEventById = createAction(
  '[Event] Load ScreeningEvent',
  (id: string) => ({ id })
);

export const loadScreeningEventsSucceeded = createAction(
  '[Event] ScreeningEvents successfully loaded',
  props<{ screeningEvents: ScreeningEvent[] }>()
);

export const loadScreeningEventsFailed = createAction(
  '[Event] load ScreeningEvents failed',
  props<{ error: string }>()
);

export const loadScreeningEventByIdSucceeded = createAction(
  '[Event] ScreeningEvent successfully loaded',
  props<{ screeningEvent: ScreeningEvent }>()
);

export const loadScreeningEventByIdFailed = createAction(
  '[Event] load ScreeningEvent failed',
  props<{ error: string }>()
);

export const createScreeningEventSucceeded = createAction(
  '[Event] ScreeningEvent successfully createed',
  props<{ screeningEvent: ScreeningEvent }>()
);

export const createScreeningEventFailed = createAction(
  '[Event] create ScreeningEvent failed',
  props<{ error: string }>()
);

export const updateScreeningEventSucceeded = createAction(
  '[Event] ScreeningEvent successfully updated',
  props<{ screeningEvent: ScreeningEvent }>()
);

export const updateScreeningEventFailed = createAction(
  '[Event] update ScreeningEvent failed',
  props<{ error: string }>()
);

export const deleteScreeningEventSucceeded = createAction(
  '[Event] ScreeningEvent successfully deleted',
  props<{ id: string }>()
);

export const deleteScreeningEventFailed = createAction(
  '[Event] delete ScreeningEvent failed',
  props<{ error: string }>()
);
