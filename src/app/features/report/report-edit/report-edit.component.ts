import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report, ReportCreate } from 'src/app/core/_models/report';
import { ReportEditService } from './report-edit.service';

@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportEditComponent implements OnInit {
  report$ = this.service.activeReport$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ReportEditService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveId(params['id']);
    });
  }

  update(item: ReportCreate) {
    this.service.update(item);
  }

  delete(report: Report) {
    this.service.delete(report.id);
  }
}
