import { ChangeDetectionStrategy, Component } from '@angular/core';
import { T } from '@fullcalendar/core/internal-common';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { mockScreeningEvents } from 'src/app/shared/_mock/event.mock';
import { ScreeningEvent } from 'src/app/shared/_models/screening-event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;
  results$ = Observable<T[]>;
  mockedScreeningEvents = mockScreeningEvents(20);

  constructor() {
    this.input$.pipe(
      filter((term) => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => (this.isLoading = true)),
      switchMap((term) => this.findInMockedEvents(term)),
      tap(() => (this.isLoading = false))
    );
  }

  searchArray<T extends { title: string }>(
    array: Array<T>,
    input: string
  ): Array<T> {
    return array.filter((item) => item.title.includes(input));
  }

  findInMockedEvents(
    query: string,
    events: ScreeningEvent[] = this.mockedScreeningEvents
  ): Observable<ScreeningEvent[]> {
    const found = this.searchArray(events, query);
    console.log(found.length);
    return of(found);
  }
}
