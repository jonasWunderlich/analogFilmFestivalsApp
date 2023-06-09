import { createAction, props } from '@ngrx/store';
import { Projection } from 'src/app/core/_models/projection';

export const loadProjections = createAction(
  '[ProjectionStore] loading Projections triggerd'
);

export const loadProjectionsSucceeded = createAction(
  '[Projection] Projections successfully loaded',
  props<{ projections: Projection[] }>()
);

export const loadProjectionsFailed = createAction(
  '[Projection] load Projections failed',
  props<{ error: string }>()
);

export const loadProjectionByIdSucceeded = createAction(
  '[Projection] Projection successfully loaded',
  props<{ projection: Projection }>()
);

export const loadProjectionByIdFailed = createAction(
  '[Projection] load Projection failed',
  props<{ error: string }>()
);

export const createProjectionSucceeded = createAction(
  '[Projection] Projection successfully created',
  props<{ projection: Projection }>()
);

export const createProjectionFailed = createAction(
  '[Projection] create Projection failed',
  props<{ error: string }>()
);

export const updateProjectionSucceeded = createAction(
  '[Projection] Projection successfully updated',
  props<{ projection: Projection }>()
);

export const updateProjectionFailed = createAction(
  '[Projection] update Projection failed',
  props<{ error: string }>()
);

export const deleteProjectionSucceeded = createAction(
  '[Projection] Projection successfully deleted',
  props<{ id: string }>()
);

export const deleteProjectionFailed = createAction(
  '[Projection] delete Projection failed',
  props<{ error: string }>()
);
