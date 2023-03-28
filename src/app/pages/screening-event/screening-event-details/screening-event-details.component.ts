import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { sample } from 'lodash';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { searchMoviesByQuery } from 'src/app/root-store/movie-store/movie.actions';
import { selectSearchedMovies } from 'src/app/root-store/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/root-store/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/shared/_mock/constants';
import { setActiveScreeningEvent } from './screening-event-details.actions';

@Component({
  selector: 'app-screening-event-details',
  templateUrl: './screening-event-details.component.html',
  styleUrls: ['./screening-event-details.component.scss'],
})
export class ScreeningEventDetailsComponent implements OnInit {
  event$ = this.store.select(selectActiveScreeningEvent);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectSearchedMovies);

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
    this.activatedRoute.params.subscribe((params) => {
      params['id'] &&
        this.store.dispatch(
          setActiveScreeningEvent({ screeningEventId: params['id'] })
        );
    });
  }
}
