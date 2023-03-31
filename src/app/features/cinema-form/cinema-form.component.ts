import { Component, EventEmitter, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CinemaCreate } from 'src/app/shared/_models/cinema';

@Component({
  selector: 'app-cinema-form',
  templateUrl: './cinema-form.component.html',
  styleUrls: ['./cinema-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CinemaFormComponent {
  @Output() submitEvent = new EventEmitter<Partial<CinemaCreate>>();

  constructor(private readonly fb: NonNullableFormBuilder) {}

  cinemaForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', []],
    lang: [51.3266199, [Validators.required]],
    long: [12.3195136, [Validators.required]],
    street: ['', []],
    postcode: ['', []],
    city: ['', []],
    mail: ['', []],
    phone: ['', []],
    linkHomepage: ['', []],
    linkProgram: ['', []],
    linkOpeningHours: ['', []],
  });

  submitForm(): void {
    this.submitEvent.emit(this.cinemaForm.value);
  }
}
