import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { mockScreeningEvents } from 'src/app/core/_mock/event.mock';
import { ScreeningEvent } from 'src/app/core/_models/screening-event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;
  results$ = Observable<ScreeningEvent[]>;
  mockedScreeningEvents = mockScreeningEvents(20);

  constructor() {
    this.input$
      .pipe(
        filter((term) => term.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true)),
        switchMap((term) => this.findInMockedEvents(term)),
        tap(() => (this.isLoading = false))
      )
      .subscribe();
  }

  private searchArray<T extends { title: string }>(
    array: Array<T>,
    input: string
  ): Array<T> {
    return array.filter((item) => item.title.includes(input));
  }

  private findInMockedEvents(
    query: string,
    events: ScreeningEvent[] = this.mockedScreeningEvents
  ): Observable<ScreeningEvent[]> {
    const found = this.searchArray(events, query);
    return of(found);
  }
}
