import { Injectable } from '@angular/core';
import {
  TMDbSearchMovies,
  Search,
  TMDbMovieDetails,
  Movies,
} from '@igorissen/ngx-tmdb-api';
import { QueryParameters } from '@igorissen/ngx-tmdb-api/lib/types';
import { Observable, forkJoin } from 'rxjs';

const TMDB_API_KEY = '05180a707de5ada5dc9a38cd1f8da87b';

@Injectable({
  providedIn: 'platform',
})
export class TmdbHttpService {
  searchMovies(query: string): Observable<TMDbSearchMovies | null> {
    return Search.searchMovies({
      queryParams: <QueryParameters>{
        query: query,
        language: 'US',
        append_to_response: 'videos,images',
        api_key: TMDB_API_KEY,
      },
    });
  }

  getMovieDetails(id: string): Observable<TMDbMovieDetails | null> {
    return Movies.getDetails({
      pathParams: { movie_id: id },
      queryParams: {
        language: 'US',
        append_to_response: 'videos,images',
        api_key: TMDB_API_KEY,
      },
    });
  }

  getListOfMovies(ids: string[]): Observable<(TMDbMovieDetails | null)[]> {
    const observableArray = ids.map((movieId) => this.getMovieDetails(movieId));
    return forkJoin(observableArray);
  }
}
