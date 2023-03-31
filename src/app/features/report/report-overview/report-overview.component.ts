import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportOverviewComponent {
  reports$ = this.reportService.reports$;
  cinemas$ = this.reportService.cinemas$;

  constructor(private readonly reportService: ReportService) {}
}
