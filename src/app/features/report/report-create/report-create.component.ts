import { Component } from '@angular/core';
import { ReportCreate } from 'src/app/shared/_models/report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss'],
})
export class ReportCreateComponent {
  constructor(private readonly service: ReportService) {}

  create(report: ReportCreate) {
    this.service.create(report).subscribe();
  }
}
