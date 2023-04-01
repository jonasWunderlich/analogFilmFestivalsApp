import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ProjectionEffects } from './projection.effects';

describe('ProjectionEffects', () => {
  /* tslint:disable-next-line:no-explicit-any */
  let actions$: Observable<any>;
  let effects: ProjectionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectionEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ProjectionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
