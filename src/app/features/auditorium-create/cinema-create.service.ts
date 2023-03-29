import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuditoriumCreate } from 'src/app/shared/_models/auditorium';

@Injectable({ providedIn: 'platform' })
export class AuditoriumCreateService {
  create(
    auditorium: Partial<AuditoriumCreate>
  ): Observable<Partial<AuditoriumCreate>> {
    console.log(auditorium);
    return of(auditorium);
  }
}
