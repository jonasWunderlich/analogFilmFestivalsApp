import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ScreeningEvent,
  ScreeningEventCreate,
} from 'src/app/shared/_models/screening-event';
import { ScreeningEventService } from '../screening-event.service';

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

  update(item: ScreeningEventCreate) {
    this.service.update(item);
  }

  delete(screeningEvent: ScreeningEvent) {
    console.log('auch hier');
    this.service.delete(screeningEvent.id);
  }
}
