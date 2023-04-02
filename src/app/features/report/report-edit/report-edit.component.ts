import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { Report, ReportCreate } from 'src/app/core/_models/report';

@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.scss'],
})
export class ReportEditComponent implements OnInit {
  reportId = this.service.activeReportId;
  report$ = this.service.activeReport$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ReportService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveReport(params['id']);
    });
  }

  update(item: ReportCreate) {
    this.service.update(item);
  }

  delete(report: Report) {
    this.service.delete(report.id);
  }
}
