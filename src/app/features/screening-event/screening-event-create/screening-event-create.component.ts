import { Component } from '@angular/core';
import { ScreeningEventCreate } from 'src/app/core/_models/screening-event';
import { ScreeningEventCreateService } from './screening-event-create.service';

@Component({
  selector: 'app-screening-event-create',
  templateUrl: './screening-event-create.component.html',
  styleUrls: ['./screening-event-create.component.scss'],
})
export class ScreeningEventCreateComponent {
  constructor(private readonly facade: ScreeningEventCreateService) {}

  create(facade: ScreeningEventCreate) {
    this.facade.create(facade);
  }
}
