import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CinemaEffects } from './cinema.effects';

describe('CinemaEffects', () => {
  let actions$: Observable<any>;
  let effects: CinemaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CinemaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CinemaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
