import { Component, OnInit } from '@angular/core';
import { mockCinema } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import { sortByDate } from '../_mock/helpers.mock';
import { Cinema } from '../_models/cinema';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  map: any;
  screeningEvents: ScreeningEvent[] = mockScreeningEvents(30)
    .sort((a, b) => sortByDate(a.date, b.date));
  cinema: Cinema = mockCinema({});

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMap(this.cinema.long, this.cinema.lat, 'ol-map')
  }

}
