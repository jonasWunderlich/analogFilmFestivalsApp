import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EventEffects } from './screening-event.effects';

describe('EventEffects', () => {
  // tslint:disable-next-line
  let actions$: Observable<any>;
  let effects: EventEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(EventEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
