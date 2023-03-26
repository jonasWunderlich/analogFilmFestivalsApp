import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { mockCinema, mockCinemas } from 'src/app/_mock/cinema.mock';
import { NotificationService } from 'src/app/_services/notification.service';
import * as CinemaActions from './cinema.actions';

const cinemas = mockCinemas(40);

@Injectable()
export class CinemaEffects {

  loadCinemas$ = createEffect(
    () => this.actions$.pipe(
      ofType(CinemaActions.loadCinemas),
      switchMap(() =>
        of(cinemas).pipe(
          map(cinemas => CinemaActions.loadCinemasSucceeded({ cinemas })),
          catchError((error) => of(CinemaActions.loadCinemasFailed({ error })))
        )
      )
    )
  );

  loadCinemasSucceeded$ = createEffect(
    () => this.actions$.pipe(
      ofType(CinemaActions.loadCinemasSucceeded),
      tap(() => this.notificationService.success('cinema.loadingSucceed'))
    ), { dispatch: false }
  );

  loadCinemasFailed$ = createEffect(
    () => this.actions$.pipe(
      ofType(CinemaActions.loadCinemasFailed),
      tap(() => this.notificationService.error('cinema.loadingFailed'))
    ), { dispatch: false }
  );

  loadCinemaById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CinemaActions.loadCinemaById),
      filter(params => params?.id?.length > 0),
      switchMap((params) =>
        of(mockCinema({id: params.id})).pipe(
          map(cinema => CinemaActions.loadCinemaByIdSucceeded({ cinema })),
          catchError((error) => of(CinemaActions.loadCinemaByIdFailed({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly notificationService: NotificationService) {}
}
