import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Report } from 'src/app/shared/_models/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportListComponent {
  @Input() reports: Report[] = [];
}
