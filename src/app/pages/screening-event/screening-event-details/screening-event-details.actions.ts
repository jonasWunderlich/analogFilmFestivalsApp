import { createAction, props } from '@ngrx/store';

export const setActiveScreeningEvent = createAction(
  '[Screening Event Details] Active Screening Event set',
  props<{ screeningEventId: string }>()
);
