import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveProjection } from 'src/app/+state/projection-store/projection.selectors';
import { ProjectionCreate } from 'src/app/core/_models/projection';
import { ProjectionService } from '../projection.service';
import { enteredProjectionEdit } from './projection-edit.actions';

@Injectable()
export class ProjectionEditService {
  activeProjectionId?: string;
  activeProjection$ = this.store.select(selectActiveProjection);

  constructor(
    private readonly store: Store,
    private readonly common: ProjectionService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredProjectionEdit({ id }));
      this.activeProjectionId = id;
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }

  update(item: ProjectionCreate): void {
    if (this.activeProjectionId) {
      this.common.update(this.activeProjectionId, item);
    }
  }
}
