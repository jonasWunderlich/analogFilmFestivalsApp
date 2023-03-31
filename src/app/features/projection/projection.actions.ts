import { createAction, props } from '@ngrx/store';
import { ProjectionCreate } from 'src/app/shared/_models/projection';

export const setActiveProjectionId = createAction(
  '[Projection Details] Set Active Projection Id triggerd',
  props<{ projectionId: string }>()
);

export const triggerProjectionUpdate = createAction(
  '[ProjectionService] Update Projection triggered',
  (id: string, projection: ProjectionCreate) => ({ id, projection })
);

export const triggerProjectionCreation = createAction(
  '[ProjectionService] Create Projection triggered',
  (projection: ProjectionCreate) => ({ projection })
);

export const triggerProjectionRemoval = createAction(
  '[ProjectionService] Deletet Projection triggered',
  (id: string) => ({ id })
);
