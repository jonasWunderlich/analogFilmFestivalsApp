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
import { generateSelectOptionsFromEnum } from 'src/app/shared/helpers/utilities';
import { ScreeningEventType } from 'src/app/shared/_models/sceening-event-type';
import {
  ScreeningEvent,
  ScreeningEventCreate,
} from 'src/app/shared/_models/screening-event';

@Component({
  selector: 'app-screening-event-form',
  templateUrl: './screening-event-form.component.html',
  styleUrls: ['./screening-event-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, LocalIsoDateValueAccessorModule],
})
export class ScreeningEventFormComponent implements OnChanges {
  @Input() screeningEvent?: ScreeningEvent;
  @Output() submitEvent = new EventEmitter<ScreeningEventCreate>();
  @Output() deleteEvent = new EventEmitter<ScreeningEvent>();
  editMode = false;
  fb = inject(NonNullableFormBuilder);
  type = ScreeningEventType;
  typeOptions = generateSelectOptionsFromEnum('', ScreeningEventType);

  form = this.fb.group({
    text: ['', []],
    title: ['', [Validators.required]],
    start: [new Date().toJSON(), [Validators.required]],
    end: [new Date().toJSON()],
    type: [ScreeningEventType.FESTIVAL, [Validators.required]],
    street: ['', []],
    postcode: ['', []],
    city: ['', []],
    mail: ['', []],
    phone: ['', []],
    linkHomepage: ['', []],
    linkProgram: ['', []],
  });

  submitForm() {
    if (this.form?.valid) {
      this.submitEvent.emit(this.form.getRawValue());
    }
  }

  delete() {
    if (this.editMode) {
      this.deleteEvent.emit(this.screeningEvent);
    }
  }

  updateType() {
    if (this.form.value.type === ScreeningEventType.SINGLE) {
      this.form.controls.end.disable();
    } else {
      this.form.controls.end.enable();
    }
  }

  ngOnChanges(): void {
    if (this.screeningEvent?.id) {
      this.setFormValues(this.screeningEvent);
      this.editMode = true;
    }
  }

  setFormValues(screeningEvent: ScreeningEvent) {
    this.form.patchValue(screeningEvent);
    // TODO: fix default type disable/enable
    this.updateType();
  }
}
