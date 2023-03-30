import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @Output() submitEvent = new EventEmitter<ScreeningEventCreate>();
  typeOptions = generateSelectOptionsFromEnum('', ScreeningEventType);

  eventData: ScreeningEventCreate = {
    text: '',
    title: '',
    start: new Date(0),
    end: new Date(),
    type: ScreeningEventType.FESTIVAL,
    street: '',
    postcode: '',
    city: '',
    mail: '',
    phone: '',
    linkHomepage: '',
    linkProgram: '',
  };

  submitForm() {
    console.log(this.typeOptions);

    if (this.eventForm?.valid) {
      this.submitEvent.emit(this.eventData);
    }
  }
}
