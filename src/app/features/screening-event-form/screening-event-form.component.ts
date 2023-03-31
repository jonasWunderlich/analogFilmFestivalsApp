import { NgFor } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { generateSelectOptionsFromEnum } from 'src/app/shared/helpers/utilities';
import { ScreeningEventType } from 'src/app/shared/_models/sceening-event-type';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';

@Component({
  selector: 'app-screening-event-form',
  templateUrl: './screening-event-form.component.html',
  styleUrls: ['./screening-event-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class ScreeningEventFormComponent {
  @Output() submitEvent = new EventEmitter<ScreeningEventCreate>();
  typeOptions = generateSelectOptionsFromEnum('', ScreeningEventType);

  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    text: ['', []],
    title: ['', [Validators.required]],
    start: [new Date(0).toJSON()],
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
}
