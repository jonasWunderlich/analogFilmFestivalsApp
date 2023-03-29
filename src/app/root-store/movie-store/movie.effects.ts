import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, filter, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import * as MovieActions from './movie.actions';
import { TmdbHttpService } from 'src/app/shared/services/tmdb-http.service';

const errorMessage =
  'Something bad happened with the tmdb plugin; please try again later.';

@Injectable()
export class MovieEffects {
  searchMoviesByQuery$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.searchMoviesByQuery),
      filter((params) => params?.query?.length > 0),
      concatMap((params) => this.tmdbhttpService.searchMovies(params.query)),
      catchError(() => {
        return throwError(() => errorMessage);
      }),
      map((movies) =>
        MovieActions.searchedMoviesSuccess({ movies: movies?.results })
      )
    );
  });

  loadMovieById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMovieById),
      filter((params) => params?.id?.length > 0),
      concatMap((params) => this.tmdbhttpService.getMovieDetails(params.id)),
      catchError(() => {
        return throwError(() => errorMessage);
      }),
      map((movie) => MovieActions.loadMovieByIdSuccess({ movie }))
    );
  });

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

  constructor(
    private actions$: Actions,
    private tmdbhttpService: TmdbHttpService
  ) {}
}
