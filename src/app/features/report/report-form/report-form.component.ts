import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { Report, ReportCreate } from 'src/app/core/_models/report';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, LocalIsoDateValueAccessorModule],
})
export class ReportFormComponent implements OnChanges {
  @Input() report?: Report;
  @Output() deleteEvent = new EventEmitter<Report>();
  @Output() submitEvent = new EventEmitter<ReportCreate>();
  editMode = false;
  fb = inject(NonNullableFormBuilder);

  reportForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    date: [new Date().toJSON(), []],
    images: ['', []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.reportForm.getRawValue());
  }

  delete() {
    if (this.editMode) {
      this.deleteEvent.emit(this.report);
    }
  }

  ngOnChanges(): void {
    if (this.report?.id) {
      this.setFormValues(this.report);
      this.editMode = true;
    }
  }

  setFormValues(model: Report) {
    this.reportForm.patchValue(model);
  }
}
