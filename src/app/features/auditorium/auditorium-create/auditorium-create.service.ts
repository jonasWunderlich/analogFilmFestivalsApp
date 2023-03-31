import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuditoriumCreate } from 'src/app/shared/_models/auditorium';

@Injectable({ providedIn: 'platform' })
export class AuditoriumCreateService {
  create(
    auditorium: Partial<AuditoriumCreate>
  ): Observable<Partial<AuditoriumCreate>> {
    // TODO: dispatch create auditorium
    console.log('dispatch | create auditorium:', auditorium);
    return of(auditorium);
  }
}
