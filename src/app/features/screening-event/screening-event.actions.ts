import { createAction } from '@ngrx/store';
import { ScreeningEventCreate } from 'src/app/core/_models/screening-event';

export const triggerScreeningEventUpdate = createAction(
  '[CommonEventService] Update ScreeningEvent triggered',
  (id: string, screeningEvent: ScreeningEventCreate) => ({ id, screeningEvent })
);

export const triggerScreeningEventCreation = createAction(
  '[CommonEventService] Create ScreeningEvent triggered',
  (screeningEvent: ScreeningEventCreate) => ({ screeningEvent })
);

export const triggerScreeningEventRemoval = createAction(
  '[CommonEventService] Delete ScreeningEvent triggered',
  (id: string) => ({ id })
);
