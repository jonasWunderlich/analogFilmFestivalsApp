import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportCreate } from 'src/app/core/_models/report';
import { ReportService } from '../report.service';
import { ReportCreateFacadeService } from './report-create.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReportCreateFacadeService],
})
export class ReportCreateComponent {
  constructor(private readonly service: ReportService) {}

  create(report: ReportCreate) {
    this.service.create(report);
  }
}
