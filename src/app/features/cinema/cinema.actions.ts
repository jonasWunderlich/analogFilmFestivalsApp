import { createAction } from '@ngrx/store';
import { CinemaCreate } from 'src/app/shared/_models/cinema';

export const triggerCinemaUpdate = createAction(
  '[CinemaService] Update Cinema triggered',
  (cinema: CinemaCreate) => ({ cinema })
);

export const triggerCinemaCreation = createAction(
  '[CinemaService] Create Cinema triggered',
  (cinema: CinemaCreate) => ({ cinema })
);

export const triggerCinemaRemoval = createAction(
  '[CinemaService] Deletet Cinema triggered',
  (id: string) => ({ id })
);
