import { Injectable } from '@angular/core';
import { ReportService } from '../report.service';
import { ReportCreate } from 'src/app/core/_models/report';

@Injectable({
  providedIn: 'root',
})
export class ReportCreateFacadeService {
  constructor(private readonly common: ReportService) {}

  create(report: ReportCreate): void {
    this.common.create(report);
  }
}
