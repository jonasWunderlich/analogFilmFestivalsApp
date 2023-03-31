import { createAction } from '@ngrx/store';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';

export const triggerScreeningEventUpdate = createAction(
  '[EventService] Update ScreeningEvent triggered',
  (screeningEvent: ScreeningEventCreate) => ({ screeningEvent })
);

export const triggerScreeningEventCreation = createAction(
  '[EventService] Create ScreeningEvent triggered',
  (screeningEvent: ScreeningEventCreate) => ({ screeningEvent })
);

export const triggerScreeningEventRemoval = createAction(
  '[EventService] Delete ScreeningEvent triggered',
  (id: string) => ({ id })
);
