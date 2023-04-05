import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ScreeningEvent,
  ScreeningEventCreate,
} from 'src/app/core/_models/screening-event';
import { ScreeningEventEditService } from './screening-event-edit.service';

@Component({
  selector: 'app-screening-event-edit',
  templateUrl: './screening-event-edit.component.html',
  styleUrls: ['./screening-event-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventEditComponent implements OnInit {
  screeningEvent$ = this.facade.event$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly facade: ScreeningEventEditService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.facade.setActiveId(params['id']);
    });
  }

  update(item: ScreeningEventCreate) {
    this.facade.update(item);
  }

  delete(screeningEvent: ScreeningEvent) {
    this.facade.delete(screeningEvent.id);
  }
}
