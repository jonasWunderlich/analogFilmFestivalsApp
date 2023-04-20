import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Report } from 'src/app/core/_models/report';
import { ReportOverviewService } from './report-overview.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReportOverviewService],
})
export class ReportOverviewComponent {
  reports$ = this.facade.reports$;

  constructor(private readonly facade: ReportOverviewService) {
    this.facade.dispatch();
  }

  public delete(id: string) {
    this.facade.delete(id);
  }

  public trackByReportId(index: number, item: Report): string {
    return item.id;
  }
}
