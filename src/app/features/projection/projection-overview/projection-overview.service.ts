import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProjections } from 'src/app/+state/projection-store/projection.selectors';
import { enteredProjectionOverview } from './projection-overview.actions';
import { first } from 'rxjs';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';
import { ProjectionService } from '../projection.service';

@Injectable()
export class ProjectionOverviewService {
  projections$ = this.store.select(selectProjections);

  constructor(
    private readonly store: Store,
    private readonly common: ProjectionService
  ) {}

  delete(id: string): void {
    this.common.delete(id);
  }

  dispatchEnter(): void {
    this.store.dispatch(enteredProjectionOverview());
    // TODO: find more elegant way to dispatch id collection
    this.projections$.pipe(first()).subscribe((projection) => {
      const cinemaRefs = projection
        .filter((projection) => projection.cinemaRef)
        .map((ev) => ev.cinemaRef && ev.cinemaRef);
      const removeDuplicates = [...new Set(cinemaRefs)] as string[];
      this.store.dispatch(updateCinemasOnMap({ ids: removeDuplicates }));
    });
  }
}
