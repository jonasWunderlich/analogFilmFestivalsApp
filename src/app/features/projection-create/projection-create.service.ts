import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectionCreate } from 'src/app/shared/_models/projection';

@Injectable({ providedIn: 'platform' })
export class ProjectionCreateService {
  create(projection: ProjectionCreate): Observable<ProjectionCreate> {
    // TODO: dispatch create projection
    console.log('dispatch | create projection:', projection);
    return of(projection);
  }
}
