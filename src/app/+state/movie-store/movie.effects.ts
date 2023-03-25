import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, filter, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Movies, Search } from '@igorissen/ngx-tmdb-api';
import * as MovieActions from './movie.actions';
import { QueryParameters } from '@igorissen/ngx-tmdb-api/lib/types';

const TMDB_API_KEY = '05180a707de5ada5dc9a38cd1f8da87b';
const errorMessage = 'Something bad happened with the tmdb plugin; please try again later.';

@Injectable()
export class MovieEffects {

  searchMoviesByQuery$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.searchMoviesByQuery),
      filter(params => params?.query?.length > 0),
      concatMap((params) => Search.searchMovies({
        queryParams: <QueryParameters>{ query: params.query, language: 'US', append_to_response: 'videos,images', api_key: TMDB_API_KEY },
      })),
      catchError(() => {
        return throwError(() => errorMessage)
      }),
      map(movies => MovieActions.searchedMoviesSuccess({ movies }))
    );
  });

  loadMovieById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieActions.loadMovieById),
      // filter(params => params?.id?.length > 0),
      concatMap((params) => Movies.getDetails({
        pathParams: { movie_id: params.id },
        queryParams: { language: 'US', append_to_response: 'videos,images', api_key: TMDB_API_KEY },
      })),
      catchError(() => {
        return throwError(() => errorMessage)
      }),
      map(movie => MovieActions.loadMovieByIdSuccess({ movie }))
    );
  });

  constructor(private actions$: Actions) {}
}
