import { Component, Input } from '@angular/core';
import { Report } from 'src/app/_models/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {

  @Input() reports: Report[] = [];

}
