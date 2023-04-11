import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveProjection } from 'src/app/+state/projection-store/projection.selectors';
import { ProjectionService } from '../projection.service';
import { enteredProjectionDetails } from './projection-details.actions';
import { first } from 'rxjs';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';

@Injectable()
export class ProjectionDetailsService {
  activeProjection$ = this.store.select(selectActiveProjection);

  constructor(
    private readonly store: Store,
    private readonly common: ProjectionService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredProjectionDetails({ id }));
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }

  dispatch(): void {
    // TODO: find more elegant way to dispatch id collection
    this.activeProjection$.pipe(first()).subscribe((proj) => {
      if (proj?.cinemaRef) {
        this.store.dispatch(updateCinemasOnMap({ ids: [proj?.cinemaRef] }));
      }
    });
  }
}
