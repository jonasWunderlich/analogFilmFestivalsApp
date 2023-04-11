import { Injectable } from '@angular/core';
import { AuditoriumService } from '../auditorium.service';
import { AuditoriumCreate } from 'src/app/core/_models/auditorium';

@Injectable()
export class AuditoriumCreateFacadeService {
  constructor(private readonly common: AuditoriumService) {}

  create(auditorium: AuditoriumCreate): void {
    this.common.create(auditorium);
  }
}
