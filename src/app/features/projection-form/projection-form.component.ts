import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ProjectionCreate } from 'src/app/shared/_models/projection';

@Component({
  selector: 'app-projection-form',
  templateUrl: './projection-form.component.html',
  styleUrls: ['./projection-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class ProjectionFormComponent {
  @Output() submitEvent = new EventEmitter<ProjectionCreate>();

  constructor(private readonly fb: NonNullableFormBuilder) {}

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
}
