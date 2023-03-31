import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CinemaCreate } from 'src/app/shared/_models/cinema';

@Injectable({ providedIn: 'platform' })
export class CinemaCreateService {
  create(cinema: CinemaCreate): Observable<CinemaCreate> {
    // TODO: dispatch create cinema
    console.log('dispatch | create cinema:', cinema);
    return of(cinema);
  }
}
