import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AuditoriumCreate,
  AUDITORIUM_ATTRIBUTES,
  PROJECTORS_OPTIONS,
  PROJECTOR_35_DUAL,
  PROJECTOR_DCP,
  SOUND_MONO,
  SOUND_OPTIONS,
  SOUND_STEREO,
} from 'src/app/core/_models/auditorium';

@Component({
  selector: 'app-auditorium-form',
  templateUrl: './auditorium-form.component.html',
  styleUrls: ['./auditorium-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class AuditoriumFormComponent {
  @Output() submitEvent = new EventEmitter<AuditoriumCreate>();

  fb = inject(NonNullableFormBuilder);

  attributeOptions = AUDITORIUM_ATTRIBUTES;
  projectorOptions = PROJECTORS_OPTIONS;
  soundOptions = SOUND_OPTIONS;

  auditoriumForm = this.fb.group({
    title: ['', [Validators.required]],
    attributes: [[], []],
    projectors: [[PROJECTOR_35_DUAL.id, PROJECTOR_DCP.id], []],
    screen: ['', []],
    seats: [100, []],
    sound: [[SOUND_MONO.id, SOUND_STEREO.id], []],
    text: ['', []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.auditoriumForm.getRawValue());
  }
}
