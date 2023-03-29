import { Component } from '@angular/core';
import { ReportCreate } from 'src/app/shared/_models/report';
import { ReportCreateService } from './report-create.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss'],
})
export class ReportCreateComponent {
  constructor(private readonly service: ReportCreateService) {}

  create(report: Partial<ReportCreate>) {
    this.service
      .create(report)
      .subscribe((report) => console.log('report created', report));
  }
}
