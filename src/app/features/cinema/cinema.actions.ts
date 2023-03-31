import { createAction, props } from '@ngrx/store';
import { CinemaCreate } from 'src/app/shared/_models/cinema';

export const setActiveCinemaId = createAction(
  '[Cinema Details] Active Cinema set',
  props<{ cinemaId: string }>()
);

export const triggerCinemaUpdate = createAction(
  '[CinemaService] Update Cinema triggered',
  (id: string, cinema: CinemaCreate) => ({ id, cinema })
);

export const triggerCinemaCreation = createAction(
  '[CinemaService] Create Cinema triggered',
  (cinema: CinemaCreate) => ({ cinema })
);

export const triggerCinemaRemoval = createAction(
  '[CinemaService] Deletet Cinema triggered',
  (id: string) => ({ id })
);
