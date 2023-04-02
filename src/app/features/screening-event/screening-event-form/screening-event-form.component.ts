import { NgFor, NgIf } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalIsoDateValueAccessorModule } from 'angular-date-value-accessor';
import { generateSelectOptionsFromEnum } from 'src/app/core/utilities/utilities';
import { ScreeningEventType } from 'src/app/core/_models/sceening-event-type';
import {
  ScreeningEvent,
  ScreeningEventCreate,
} from 'src/app/core/_models/screening-event';
import { GenericContentFormComponent } from 'src/app/core/generics/generic-content-form.component';

@Component({
  selector: 'app-screening-event-form',
  templateUrl: './screening-event-form.component.html',
  styleUrls: ['./screening-event-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, LocalIsoDateValueAccessorModule],
})
export class ScreeningEventFormComponent
  extends GenericContentFormComponent<ScreeningEvent, ScreeningEventCreate>
  implements OnChanges
{
  type = ScreeningEventType;
  typeOptions = generateSelectOptionsFromEnum('', ScreeningEventType);

  override form = this.fb.group({
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

  constructor() {
    super();
  }

  updateType() {
    if (this.form) {
      if (this.form.value['type'] === ScreeningEventType.SINGLE) {
        this.form.controls.end.disable();
      } else {
        this.form.controls.end.enable();
      }
    }
  }

  override setFormValues(screeningEvent: ScreeningEvent) {
    if (this.form) {
      this.form.patchValue(screeningEvent);
      // TODO: fix default type disable/enable
      this.updateType();
    }
  }
}
