import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningEventDetailsService } from './screening-event-details.service';

@Component({
  selector: 'app-screening-event-details',
  templateUrl: './screening-event-details.component.html',
  styleUrls: ['./screening-event-details.component.scss'],
})
export class ScreeningEventDetailsComponent implements OnInit {
  event$ = this.detailsService.event$;
  cinemas$ = this.detailsService.cinemas$;
  movies$ = this.detailsService.movies$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly detailsService: ScreeningEventDetailsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.detailsService.setActiveScreeningEvent(params['id']);
    });
  }
}
