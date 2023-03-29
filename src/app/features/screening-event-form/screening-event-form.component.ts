import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { generateSelectOptionsFromEnum } from 'src/app/shared/helpers/utilities';
import { ScreeningEventType } from 'src/app/shared/_models/sceening-event-type';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';

@Component({
  selector: 'app-screening-event-form',
  templateUrl: './screening-event-form.component.html',
  styleUrls: ['./screening-event-form.component.scss'],
  standalone: true,
  imports: [FormsModule, NgFor],
})
export class ScreeningEventFormComponent {
  @ViewChild('eventForm') eventForm?: NgForm;

  eventTypeSelectOptions = generateSelectOptionsFromEnum(
    '',
    ScreeningEventType
  );

  eventData: ScreeningEventCreate = {
    text: '',
    title: '',
    start: new Date(0),
    end: new Date(),
    type: ScreeningEventType.SINGLE,
    street: '',
    postcode: '',
    city: '',
    mail: '',
    phone: '',
    linkHomepage: '',
    linkProgram: '',
  };

  submitForm() {
    // TODO: Submit
  }
}
