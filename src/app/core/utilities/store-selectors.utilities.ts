import { Store } from '@ngrx/store';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';

export function selectReferencedObject<T extends { id: string }>(
  arr: Array<T>,
  reference: string
): T | undefined {
  return arr.find((item) => item.id === reference);
}

export function selectReferencedObjects<T extends { id: string }>(
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
  T extends { cinemaRefs: string; id: string }
>(arr: Array<T>, store: Store): void {
  const cinemaRefs = arr.map((item) => item.cinemaRefs).flat();
  const withoutDuplicates = [...new Set(cinemaRefs)];
  store.dispatch(updateCinemasOnMap({ ids: withoutDuplicates }));
}
