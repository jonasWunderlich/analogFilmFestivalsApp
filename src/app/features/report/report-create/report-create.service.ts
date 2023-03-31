import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReportCreate } from 'src/app/shared/_models/report';

@Injectable({ providedIn: 'platform' })
export class ReportCreateService {
  create(report: ReportCreate): Observable<ReportCreate> {
    // TODO: dispatch save report
    console.log('dispatch | create report:', report);
    return of(report);
  }
}
