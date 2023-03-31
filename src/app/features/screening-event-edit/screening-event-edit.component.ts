import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';
import { ScreeningEventService } from '../screening-event-details/screening-event-details.service';

@Component({
  selector: 'app-screening-event-edit',
  templateUrl: './screening-event-edit.component.html',
  styleUrls: ['./screening-event-edit.component.scss'],
})
export class ScreeningEventEditComponent implements OnInit {
  screeningEvent$ = this.service.event$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ScreeningEventService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveScreeningEvent(params['id']);
    });
  }

  update(create: ScreeningEventCreate) {
    this.service.update(create);
  }
}
