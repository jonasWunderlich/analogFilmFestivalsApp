import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
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
    .sort((a, b) => sortByDate(a.start, b.start));
  cinemas: Cinema[] = mockCinemas(10);

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: this.screeningEvents,
    eventMouseEnter: (event) => {
      console.log(event.event._def.url);
      // TODO: Show Popup with Information
    },
  };

  constructor(
    private readonly mapService: MapService
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-event-overview'
    )
  }

}
