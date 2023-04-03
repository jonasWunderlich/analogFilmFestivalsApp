import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { Report, ReportCreate } from 'src/app/core/_models/report';
import { GenericContentFormComponent } from 'src/app/core/generics/generic-content-form.component';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, LocalIsoDateValueAccessorModule],
})
export class ReportFormComponent
  extends GenericContentFormComponent<Report, ReportCreate>
  implements OnChanges
{
  override form = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    date: [new Date().toJSON(), []],
    images: ['', []],
  });
}
