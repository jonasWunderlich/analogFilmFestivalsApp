import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProjections } from 'src/app/+state/projection-store/projection.selectors';
import { ProjectionService } from '../projection.service';
import { enteredProjectionOverview } from './projection-overview.actions';

@Injectable({
  providedIn: 'root',
})
export class ProjectionOverviewService {
  projections$ = this.store.select(selectProjections);

  constructor(
    private readonly store: Store,
    private readonly common: ProjectionService
  ) {
    this.store.dispatch(enteredProjectionOverview());
  }

  delete(id: string): void {
    this.common.delete(id);
  }
}
