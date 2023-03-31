import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectionCreate } from 'src/app/shared/_models/projection';
import {
  setActiveProjectionId,
  triggerProjectionCreation,
  triggerProjectionRemoval,
  triggerProjectionUpdate,
} from './projection.actions';
import { selectActiveProjection } from 'src/app/root-store/projection-store/projection.selectors';

@Injectable({ providedIn: 'root' })
export class ProjectionService {
  activeProjectionId?: string;
  activeProjection$ = this.store.select(selectActiveProjection);

  constructor(private readonly store: Store) {}

  public setActiveProjection(id: string | undefined): void {
    if (id) {
      this.activeProjectionId = id;
      this.store.dispatch(
        setActiveProjectionId({
          projectionId: id,
        })
      );
    }
  }

  create(projection: ProjectionCreate): void {
    this.store.dispatch(triggerProjectionCreation(projection));
  }

  delete(id: string): void {
    this.store.dispatch(triggerProjectionRemoval(id));
  }

  update(projection: ProjectionCreate): void {
    if (this.activeProjectionId) {
      this.store.dispatch(
        triggerProjectionUpdate(this.activeProjectionId, projection)
      );
    }
  }
}
