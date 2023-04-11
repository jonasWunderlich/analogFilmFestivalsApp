import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectionCreate } from 'src/app/core/_models/projection';
import {
  triggerProjectionCreation,
  triggerProjectionRemoval,
  triggerProjectionUpdate,
} from './projection.actions';
import { Router } from '@angular/router';

@Injectable()
export class ProjectionService {
  constructor(private readonly store: Store, private readonly router: Router) {}

  create(projection: ProjectionCreate): void {
    this.store.dispatch(triggerProjectionCreation(projection));
    this.router.navigate(['/projection']);
  }

  delete(id: string): void {
    this.store.dispatch(triggerProjectionRemoval(id));
    this.router.navigate(['/projection']);
  }

  update(id: string, projection: ProjectionCreate): void {
    this.store.dispatch(triggerProjectionUpdate(id, projection));
    this.router.navigate(['/projection']);
  }
}
