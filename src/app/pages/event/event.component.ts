import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchedMovies } from '../../root-store/movie-store/movie.selectors';
import { selectSelectedScreeningEventByRoute } from '../../root-store/screening-event-store/screening-event.selectors';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';
import { Subscription } from 'rxjs';
import { MOCKED_TMDB_QUERIES } from '../../shared/_mock/constants';
import { sample } from 'lodash';
import { searchMoviesByQuery } from '../../root-store/movie-store/movie.actions';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit, OnDestroy {
  event$ = this.store.select(selectSelectedScreeningEventByRoute);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectSearchedMovies);
  subscription = new Subscription();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
