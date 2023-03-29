import { Component } from '@angular/core';
import { AuditoriumCreate } from 'src/app/shared/_models/auditorium';
import { AuditoriumCreateService } from './auditorium-create.service';

@Component({
  selector: 'app-auditorium-create',
  templateUrl: './auditorium-create.component.html',
  styleUrls: ['./auditorium-create.component.scss'],
})
export class AuditoriumCreateComponent {
  constructor(private readonly service: AuditoriumCreateService) {}

  create(auditorium: Partial<AuditoriumCreate>) {
    this.service
      .create(auditorium)
      .subscribe((auditorium) => console.log('auditorium created', auditorium));
  }
}
