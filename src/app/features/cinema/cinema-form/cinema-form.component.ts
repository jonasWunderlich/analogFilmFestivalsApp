import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
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
import { Cinema, CinemaCreate } from 'src/app/shared/_models/cinema';

@Component({
  selector: 'app-cinema-form',
  templateUrl: './cinema-form.component.html',
  styleUrls: ['./cinema-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class CinemaFormComponent implements OnInit, OnChanges {
  @Input() cinema?: Cinema;
  @Output() submitEvent = new EventEmitter<CinemaCreate>();
  @Output() deleteEvent = new EventEmitter<Cinema>();
  editMode = false;
  fb = inject(NonNullableFormBuilder);

  constructor(private readonly ps: PositionstackService) {}

  cinemaForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', []],
    latitude: [0, [Validators.required]],
    longitude: [0, [Validators.required]],
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
          latitude: result.data[0].latitude,
          longitude: result.data[0].longitude,
        });
      });
  }

  submitForm(): void {
    this.submitEvent.emit(this.cinemaForm.getRawValue());
  }

  delete() {
    if (this.editMode) {
      this.deleteEvent.emit(this.cinema);
    }
  }

  ngOnChanges(): void {
    if (this.cinema?.id) {
      this.editMode = true;
      this.setFormValues(this.cinema);
    }
  }

  setFormValues(cinema: Cinema) {
    this.cinemaForm.patchValue(cinema);
  }
}
