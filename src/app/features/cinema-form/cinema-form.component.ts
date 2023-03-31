import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import {
  PositionStackResults,
  PositionstackService,
} from 'src/app/shared/services/positionstack.service';
import { CinemaCreate } from 'src/app/shared/_models/cinema';

@Component({
  selector: 'app-cinema-form',
  templateUrl: './cinema-form.component.html',
  styleUrls: ['./cinema-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CinemaFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<CinemaCreate>();

  fb = inject(NonNullableFormBuilder);

  constructor(private readonly ps: PositionstackService) {}

  cinemaForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', []],
    lang: [0, [Validators.required]],
    long: [0, [Validators.required]],
    street: ['', []],
    postcode: ['', []],
    city: ['', []],
    mail: ['', []],
    phone: ['', []],
    linkHomepage: ['', []],
    linkProgram: ['', []],
    linkOpeningHours: ['', []],
  });

  ngOnInit() {
    this.cinemaForm.valueChanges
      .pipe(
        filter(
          (values) => !!values.postcode && !!values.city && !!values.street
        ),
        debounceTime(1000),
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        switchMap((values) =>
          this.ps.getCoordinates(values.postcode, values.street, values.city)
        )
      )
      .subscribe((result: PositionStackResults) => {
        this.cinemaForm.patchValue({
          lang: result.data[0].latitude,
          long: result.data[0].longitude,
        });
      });
  }

  submitForm(): void {
    this.submitEvent.emit(this.cinemaForm.getRawValue());
  }
}
