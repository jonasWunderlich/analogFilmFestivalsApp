import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, filter, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import * as MovieActions from './movie.actions';
import { TmdbHttpService } from 'src/app/shared/services/tmdb-http.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { neitherNullNorUndefined } from 'src/app/shared/helpers/null-or-undefined.helper';

const errorMessage =
  'Something bad happened with the tmdb plugin; please try again later.';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private notificationService = inject(NotificationService);
  private tmdbhttpService = inject(TmdbHttpService);

  /* search movies Movie by query: string */

  searchMoviesByQuery$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.searchMoviesByQuery),
      filter((params) => neitherNullNorUndefined(params.query)),
      concatMap((params) => this.tmdbhttpService.searchMovies(params.query)),
      map((movies) =>
        MovieActions.searchMoviesByQuerySuccess({ movies: movies?.results })
      ),
      catchError((error) =>
        of(MovieActions.searchMoviesByQueryFailed({ error }))
      )
    );
  });

  searchMoviesByQuerySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMoviesByQuerySuccess),
        tap(() =>
          this.notificationService.success('tmdb.searchMoviesByQuerySucceed')
        )
      ),
    { dispatch: false }
  );

  searchMoviesByQueryFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMoviesByQueryFailed),
        tap(() =>
          this.notificationService.error('projection.searchMoviesByQueryFailed')
        )
      ),
    { dispatch: false }
  );

  /* search one Movie by id: string */

  loadMovieById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMovieById),
      filter((params) => neitherNullNorUndefined(params.id)),
      concatMap((params) => this.tmdbhttpService.getMovieDetails(params.id)),
      map((movie) => MovieActions.loadMovieByIdSuccess({ movie })),
      catchError((error) => of(MovieActions.loadMovieByIdFailed({ error })))
    );
  });

  loadMovieByIdSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.loadMovieByIdSuccess),
        tap(() => this.notificationService.success('tmdb.loadMovieByIdSucceed'))
      ),
    { dispatch: false }
  );

  loadMovieByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.loadMovieByIdFailed),
        tap(() =>
          this.notificationService.error('projection.loadMovieByFailed')
        )
      ),
    { dispatch: false }
  );

  /* searched multiple Movies by Array<{id: string}> */

  loadMoviesByIds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMoviesByIds),
      filter((params) => params?.movieIds?.length > 0),
      concatMap((params) =>
        this.tmdbhttpService.getListOfMovies(params.movieIds)
      ),
      catchError(() => {
        return throwError(() => errorMessage);
      }),
      map((movies) => MovieActions.loadMoviesByIdsSuccess({ movies }))
    );
  });

  loadMoviesByIdsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.loadMoviesByIdsSuccess),
        tap(() =>
          this.notificationService.success('tmdb.loadMoviesByIdsSucceed')
        )
      ),
    { dispatch: false }
  );

  loadMoviesByIdsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.loadMoviesByIdsFailed),
        tap(() =>
          this.notificationService.error('projection.loadMoviesByIdsFailed')
        )
      ),
    { dispatch: false }
  );
}
