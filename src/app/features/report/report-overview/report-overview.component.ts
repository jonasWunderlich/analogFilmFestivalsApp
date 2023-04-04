import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReportOverviewService } from './report-overview.service';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportOverviewComponent {
  reports$ = this.facade.reports$;

  constructor(private readonly facade: ReportOverviewService) {
    this.facade.dispatchEnter();
  }

  public delete(id: string) {
    this.facade.delete(id);
  }
}
