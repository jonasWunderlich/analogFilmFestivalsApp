import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectionCreate } from 'src/app/core/_models/projection';
import {
  setActiveProjectionId,
  triggerProjectionCreation,
  triggerProjectionRemoval,
  triggerProjectionUpdate,
} from './projection.actions';
import {
  selectActiveProjection,
  selectProjections,
} from 'src/app/+state/projection-store/projection.selectors';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProjectionService {
  activeProjectionId?: string;
  activeProjection$ = this.store.select(selectActiveProjection);
  allCinemas$ = this.store.select(selectCinemas);
  allProjections$ = this.store.select(selectProjections);

  constructor(private readonly store: Store, private readonly router: Router) {}

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
    this.router.navigate(['/projection']);
  }
}
