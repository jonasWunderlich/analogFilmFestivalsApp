import { Component, EventEmitter, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReportCreate } from 'src/app/shared/_models/report';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ReportFormComponent {
  @Output() submitEvent = new EventEmitter<Partial<ReportCreate>>();

  constructor(private readonly fb: NonNullableFormBuilder) {}

  reportForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    date: [new Date().toJSON(), []],
    images: [[], []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.reportForm.value);
  }
}
