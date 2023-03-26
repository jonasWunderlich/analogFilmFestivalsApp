import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { loadScreeningEvents } from '../+state/screening-event-store/screening-event.actions';
import { selectScreeningEvents } from '../+state/screening-event-store/screening-event.selectors';
import { mockCinemas } from '../_mock/cinema.mock';
import { mockScreeningEvents } from '../_mock/event.mock';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_mock/geo.helper';
import { sortByDate } from '../_mock/helpers.mock';
import { Cinema } from '../_models/cinema';
import { ScreeningEvent } from '../_models/screening-event';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent implements OnInit {

  map: any;

  screeningEvents$ = this.store.select(selectScreeningEvents);

  events: ScreeningEvent[] = mockScreeningEvents(30).sort((a, b) => sortByDate(a.start, b.start));

  cinemas: Cinema[] = mockCinemas(10);

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: this.events,
    eventMouseEnter: (event) => {
      console.log(event.event._def.url);
      // TODO: Show Popup with Information
    },
  };

  constructor(
    private readonly mapService: MapService,
    private readonly store: Store,
    ) {
  }

  ngOnInit(): void {
    this.map = this.mapService.buildMapFromFeatureCollection(
      createCinemaFeatureList(this.cinemas),
      getCoordinatesFromCinemaList(this.cinemas),
      'ol-map-event-overview'
    )
    this.store.dispatch(loadScreeningEvents());
  }

}
