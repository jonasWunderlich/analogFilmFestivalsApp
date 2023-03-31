import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import {
  triggerCinemaCreation,
  triggerCinemaUpdate,
  triggerCinemaRemoval,
} from 'src/app/features/cinema/cinema.actions';
import { neitherNullNorUndefined } from 'src/app/shared/helpers/null-or-undefined.helper';
import { AnalogKinoBackendService } from 'src/app/shared/services/analog-kino-http.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import * as CinemaActions from './cinema.actions';

@Injectable()
export class CinemaEffects {
  /* LOAD ALL CINEMAS */

  loadCinemas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CinemaActions.loadCinemas),
      switchMap(() =>
        this.analogHttpService.getCinemas().pipe(
          map((cinemas) => CinemaActions.loadCinemasSucceeded({ cinemas })),
          catchError((error) => of(CinemaActions.loadCinemasFailed({ error })))
        )
      )
    )
  );

  loadCinemasSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemasSucceeded),
        tap(() => this.notificationService.success('cinema.loadingSucceed'))
      ),
    { dispatch: false }
  );

  loadCinemasFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemasFailed),
        tap(() => this.notificationService.error('cinema.loadingFailed'))
      ),
    { dispatch: false }
  );

  /* LOAD CINEMA BY ID */

  loadCinemaById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CinemaActions.loadCinemaById),
      filter((params) => params?.id?.length > 0),
      switchMap((params) =>
        this.analogHttpService.getCinemaById(params.id).pipe(
          map((cinema) => CinemaActions.loadCinemaByIdSucceeded({ cinema })),
          catchError((error) =>
            of(CinemaActions.loadCinemaByIdFailed({ error }))
          )
        )
      )
    );
  });

  loadCinemaByIdSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemaByIdSucceeded),
        tap(() =>
          this.notificationService.success('cinema.loadCinemaByIdSucceed')
        )
      ),
    { dispatch: false }
  );

  loadCinemaByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemaByIdFailed),
        tap(() => this.notificationService.error('cinema.loadCinemaByIdFailed'))
      ),
    { dispatch: false }
  );

  /* CREATE SCREENING EVENT BY ID */

  createCinema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerCinemaCreation),
      filter((params) => neitherNullNorUndefined(params?.cinema)),
      switchMap((params) =>
        this.analogHttpService.createCinema(params?.cinema).pipe(
          map((cinema) => CinemaActions.updateCinemaSucceeded({ cinema })),
          catchError((error) => of(CinemaActions.updateCinemaFailed({ error })))
        )
      )
    );
  });

  createCinemaSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.createCinemaSucceeded),
        tap(() => this.notificationService.success('Event.createSucceeded'))
      ),
    { dispatch: false }
  );

  createCinemaFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.createCinemaFailed),
        tap(() => this.notificationService.error('Event.createFailed'))
      ),
    { dispatch: false }
  );

  /* UPDATE SCREENING EVENT BY ID */

  updateCinema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerCinemaUpdate),
      filter(
        (params) =>
          neitherNullNorUndefined(params?.id) &&
          neitherNullNorUndefined(params?.cinema)
      ),
      switchMap((params) =>
        this.analogHttpService.updateCinema(params?.id, params?.cinema).pipe(
          map((cinema) => CinemaActions.updateCinemaSucceeded({ cinema })),
          catchError((error) => of(CinemaActions.updateCinemaFailed({ error })))
        )
      )
    );
  });

  updateCinemaSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.updateCinemaSucceeded),
        tap(() => this.notificationService.success('Event.updateSucceeded'))
      ),
    { dispatch: false }
  );

  updateCinemaFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.updateCinemaFailed),
        tap(() => this.notificationService.error('Event.updateFailed'))
      ),
    { dispatch: false }
  );

  /* DELETE SCREENING EVENT BY ID */

  deleteCinema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerCinemaRemoval),
      filter((params) => neitherNullNorUndefined(params?.id)),
      switchMap((params) =>
        this.analogHttpService.deleteCinema(params?.id).pipe(
          map((id) => CinemaActions.deleteCinemaSucceeded({ id })),
          catchError((error) => of(CinemaActions.deleteCinemaFailed({ error })))
        )
      )
    );
  });

  deleteCinemaSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.deleteCinemaSucceeded),
        tap(() => this.notificationService.success('Event.deleteSucceeded'))
      ),
    { dispatch: false }
  );

  deleteCinemaFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.deleteCinemaFailed),
        tap(() => this.notificationService.error('Event.deleteFailed'))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly analogHttpService: AnalogKinoBackendService,
    private readonly notificationService: NotificationService
  ) {}
}
