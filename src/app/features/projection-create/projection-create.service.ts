import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectionCreate } from 'src/app/shared/_models/projection';

@Injectable({ providedIn: 'platform' })
export class ProjectionCreateService {
  create(
    projection: Partial<ProjectionCreate>
  ): Observable<Partial<ProjectionCreate>> {
    console.log(projection);
    return of(projection);
  }
}
