import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';
import {
  PositionStackResults,
  PositionstackService,
} from 'src/app/core/services/positionstack.service';
import { Cinema, CinemaCreate } from 'src/app/core/_models/cinema';
import { postCodeFormat } from 'src/app/core/validators/postcode.validator';
import { GenericContentFormComponent } from 'src/app/core/generics/generic-content-form.component';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinema-form',
  templateUrl: './cinema-form.component.html',
  styleUrls: ['./cinema-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  providers: [PositionstackService],
})
export class CinemaFormComponent
  extends GenericContentFormComponent<Cinema, CinemaCreate>
  implements OnInit, OnChanges, OnDestroy
{
  subscrition = new Subscription();
  constructor(
    private readonly ps: PositionstackService,
    private readonly store: Store
  ) {
    super();
  }

  override form = this.fb.group({
    title: [
      '',
      {
        validators: [Validators.required],
        // TODO: Fix async Validator
        // asyncValidators: [
        //   inject(CinemaTitleValidatorService).cinemaTitleAvailable(),
        // ],
      },
    ],
    text: ['', []],
    latitude: [0, [Validators.required]],
    longitude: [0, [Validators.required]],
    street: ['', []],
    postcode: ['', [postCodeFormat]],
    city: ['', []],
    mail: ['', []],
    phone: ['', []],
    linkHomepage: ['', []],
    linkProgram: ['', []],
    linkOpeningHours: ['', []],
  });

  ngOnInit() {
    this.subscrition.add(
      this.form.valueChanges
        .pipe(
          filter(
            (values) => !!values.postcode && !!values.city && !!values.street
          ),
          debounceTime(1000),
          distinctUntilChanged(
            (a, b) => JSON.stringify(a) === JSON.stringify(b)
          ),
          switchMap((values) =>
            this.ps.getCoordinates(values.postcode, values.street, values.city)
          )
        )
        .subscribe((result: PositionStackResults) => {
          this.form.patchValue({
            latitude: result.data[0].latitude,
            longitude: result.data[0].longitude,
          });
          // TODO: find a way to update the map with entered coordinates
        })
    );
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }
}
