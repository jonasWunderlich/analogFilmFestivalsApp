import { Store } from '@ngrx/store';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';

interface EntityWithId {
  id: string;
}

export interface EntityWithCinemaRefs {
  cinemaRefs: string[];
  id: string;
}

export interface EntityWithEventRefs {
  eventRefs: string[];
  id: string;
}

export function selectReferencedObject<T extends EntityWithId>(
  arr: Array<T>,
  reference: string
): T | undefined {
  return arr.find((item) => item.id === reference);
}

export function selectReferencedObjects<T extends EntityWithId>(
  arr: Array<T>,
  references: string[]
): Array<T> {
  return arr.filter((item) => references.indexOf(item.id) > -1);
}

export function dispatchMap(ids: string[] | undefined, store: Store): void {
  if (ids) {
    store.dispatch(updateCinemasOnMap({ ids }));
  }
}

export function dispatchUpdateCinemapMapFromEntities<
  T extends EntityWithCinemaRefs
>(arr: Array<T>, store: Store): void {
  const cinemaRefs = arr.map((item) => item.cinemaRefs).flat();
  const withoutDuplicates = [...new Set(cinemaRefs)];
  store.dispatch(updateCinemasOnMap({ ids: withoutDuplicates }));
}

export function filterEntitiesByIds<T extends EntityWithId>(
  ids: string[],
  entities: T[] = []
): T[] {
  console.log(entities, ids);
  return entities.filter((item) => ids.indexOf(item.id) > -1);
}
