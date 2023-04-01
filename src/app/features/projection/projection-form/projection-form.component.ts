import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  inject,
  Input,
  OnChanges,
} from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { Projection, ProjectionCreate } from 'src/app/core/_models/projection';

@Component({
  selector: 'app-projection-form',
  templateUrl: './projection-form.component.html',
  styleUrls: ['./projection-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, LocalIsoDateValueAccessorModule],
})
export class ProjectionFormComponent implements OnChanges {
  @Input() projection?: Projection;
  @Output() deleteEvent = new EventEmitter<Projection>();
  @Output() submitEvent = new EventEmitter<ProjectionCreate>();
  editMode = false;
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    title: ['', [Validators.required]],
    date: [new Date().toJSON(), [Validators.required]],
    tmdb: ['', []],
    black: [false, []],
    agent: ['', []],
    text: ['', []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.form.getRawValue());
  }

  delete() {
    if (this.editMode) {
      this.deleteEvent.emit(this.projection);
    }
  }

  ngOnChanges(): void {
    if (this.projection?.id) {
      this.setFormValues(this.projection);
      this.editMode = true;
    }
  }

  setFormValues(model: Projection) {
    this.form.patchValue(model);
  }
}
