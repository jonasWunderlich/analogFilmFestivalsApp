import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CinemaCreate } from 'src/app/core/_models/cinema';
import {
  triggerCinemaCreation,
  triggerCinemaRemoval,
  triggerCinemaUpdate,
} from './cinema.actions';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  constructor(private readonly store: Store, private readonly router: Router) {}

  create(screeningEvent: CinemaCreate): void {
    this.store.dispatch(triggerCinemaCreation(screeningEvent));
    this.router.navigate(['/cinema']);
  }

  delete(id: string): void {
    this.store.dispatch(triggerCinemaRemoval(id));
    this.router.navigate(['/cinema']);
  }

  update(id: string, screeningEvent: CinemaCreate): void {
    this.store.dispatch(triggerCinemaUpdate(id, screeningEvent));
    this.router.navigate(['/cinema']);
  }

  // MOVE somewhere else
  // titleExists(name: string): Observable<boolean> {
  //   return this.cinemas$.pipe(
  //     map(
  //       (arr) =>
  //         !arr.find((c) => {
  //           console.log(c.title.toLowerCase() === name.toLowerCase());
  //           return c.title.toLowerCase() === name.toLowerCase();
  //         })
  //     )
  //   );
  // }
}
