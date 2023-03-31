import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningEventService } from '../screening-event.service';

@Component({
  selector: 'app-screening-event-details',
  templateUrl: './screening-event-details.component.html',
  styleUrls: ['./screening-event-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventDetailsComponent implements OnInit {
  event$ = this.eventService.event$;
  cinemas$ = this.eventService.cinemas$;
  movies$ = this.eventService.movies$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: ScreeningEventService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.eventService.setActiveScreeningEvent(params['id']);
    });
  }
}
