import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AuditoriumCreate,
  AUDITORIUM_ATTRIBUTES,
  AUDITORIUM_PROJECTORS,
  AUDITORIUM_SOUND,
} from 'src/app/shared/_models/auditorium';

@Component({
  selector: 'app-auditorium-form',
  templateUrl: './auditorium-form.component.html',
  styleUrls: ['./auditorium-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class AuditoriumFormComponent {
  @Output() submitEvent = new EventEmitter<Partial<AuditoriumCreate>>();

  constructor(private readonly fb: NonNullableFormBuilder) {}

  auditoriumAttributes = AUDITORIUM_ATTRIBUTES;
  auditoriumProjectors = AUDITORIUM_PROJECTORS;
  auditoriumSound = AUDITORIUM_SOUND;

  auditoriumForm = this.fb.group({
    title: ['', [Validators.required]],
    attributes: [[], []],
    projectors: [[], []],
    screen: ['', []],
    seats: [100, []],
    sound: [[], []],
    text: ['', []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.auditoriumForm.value);
  }
}
