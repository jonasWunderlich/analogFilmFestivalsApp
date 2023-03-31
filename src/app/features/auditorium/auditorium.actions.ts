import { createAction } from '@ngrx/store';
import { AuditoriumCreate } from 'src/app/shared/_models/auditorium';

export const triggerAuditoriumUpdate = createAction(
  '[AuditoriumService] Update Auditorium triggered',
  (id: string, auditorium: AuditoriumCreate) => ({ id, auditorium })
);

export const triggerAuditoriumCreation = createAction(
  '[AuditoriumService] Create Auditorium triggered',
  (auditorium: AuditoriumCreate) => ({ auditorium })
);

export const triggerAuditoriumRemoval = createAction(
  '[AuditoriumService] Delete Auditorium triggered',
  (id: string) => ({ id })
);
