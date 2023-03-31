import { createAction, props } from '@ngrx/store';

export const setActiveReport = createAction(
  '[Report Details] Id of Active Report set',
  props<{ reportId: string }>()
);
