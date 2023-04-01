import { Injectable } from '@angular/core';
import { AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { CinemaService } from 'src/app/features/cinema/cinema.service';

@Injectable({ providedIn: 'root' })
export class CinemaTitleValidatorService {
  constructor(private readonly service: CinemaService) {}

  cinemaTitleAvailable(): AsyncValidatorFn {
    return (control) => {
      return this.service.titleExists(control.value).pipe(
        map((isAvailable) => {
          if (isAvailable) {
            return null;
          } else {
            return { titleAvailable: true };
          }
        })
      );
    };
  }
}
