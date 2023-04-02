import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import * as MovieActions from './movie.actions';
import { TmdbHttpService } from 'src/app/core/services/tmdb-http.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { of } from 'rxjs';

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
      switchMap((params) =>
        this.tmdbhttpService.searchMovies(params.query).pipe(
          map((movies) =>
            MovieActions.searchMoviesByQuerySuccess({ movies: movies?.results })
          ),
          catchError((error) =>
            of(MovieActions.searchMoviesByQueryFailed({ error }))
          )
        )
      )
    );
  });

  searchMoviesByQuerySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMoviesByQuerySuccess),
        tap(() =>
          this.notificationService.success('Queryabfrage erfolgreich', 'TMDB')
        )
      ),
    { dispatch: false }
  );

  searchMoviesByQueryFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMoviesByQueryFailed),
        tap(() =>
          this.notificationService.error('Queryabfrage fehlgeschlagen', 'TMDB')
        )
      ),
    { dispatch: false }
  );

  /* search one Movie by id: string */

  searchMovieById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.searchMovieById),
      filter((params) => neitherNullNorUndefined(params.id)),
      switchMap((params) =>
        this.tmdbhttpService.getMovieDetails(params.id).pipe(
          map((movie) => MovieActions.searchMovieByIdSuccess({ movie })),
          catchError((error) =>
            of(MovieActions.searchMovieByIdFailed({ error }))
          )
        )
      )
    );
  });

  searchMovieByIdSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMovieByIdSuccess),
        tap(() =>
          this.notificationService.success('Filme nach Id ermittelt', 'TMDB')
        )
      ),
    { dispatch: false }
  );

  searchMovieByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMovieByIdFailed),
        tap(() =>
          this.notificationService.error(
            'Filmsuche über Id fehlgeschlagen',
            'TMDB'
          )
        )
      ),
    { dispatch: false }
  );

  /* searched multiple Movies by Array<{id: string}> */

  searchMoviesByIds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.searchMoviesByIds),
      filter((params) => params?.movieIds?.length > 0),
      switchMap((params) =>
        this.tmdbhttpService.getListOfMovies(params.movieIds).pipe(
          map((movies) => MovieActions.searchMoviesByIdsSuccess({ movies })),
          catchError((error) =>
            of(MovieActions.searchMoviesByIdsFailed({ error }))
          )
        )
      )
    );
  });

  searchMoviesByIdsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMoviesByIdsSuccess),
        tap(() =>
          this.notificationService.success('Arrayabfrage erfolgreich', 'TMDB')
        )
      ),
    { dispatch: false }
  );

  searchMoviesByIdsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieActions.searchMoviesByIdsFailed),
        tap(() =>
          this.notificationService.error('Arrayabfrage fehlgeschlagen', 'TMDB')
        )
      ),
    { dispatch: false }
  );
}
