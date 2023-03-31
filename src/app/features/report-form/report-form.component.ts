import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { ReportCreate } from 'src/app/shared/_models/report';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, LocalIsoDateValueAccessorModule],
})
export class ReportFormComponent {
  @Output() submitEvent = new EventEmitter<ReportCreate>();

  fb = inject(NonNullableFormBuilder);

  reportForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    date: [new Date().toJSON(), []],
    images: [[], []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.reportForm.getRawValue());
  }
}
