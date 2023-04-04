import { DatePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Report } from 'src/app/core/_models/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgFor, DatePipe],
})
export class ReportListComponent {
  private _reports: Report[] = [];

  @Input()
  set reports(value: Report[] | undefined) {
    if (value) {
      this._reports = value;
    }
  }
  get reports() {
    return this._reports;
  }
}
