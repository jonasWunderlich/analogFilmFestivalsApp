import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../+state/cinema-store/cinema.selectors';
import { selectScreeningEvents } from '../+state/screening-event-store/screening-event.selectors';
import { createCinemaFeatureList, getCoordinatesFromCinemaList } from '../_helpers/geo.helper';
import { MapService } from '../_services/map.service';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent implements OnInit, OnDestroy {

  map = new Map;
  calendarOptions: CalendarOptions = {};
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  subscription = new Subscription;

  constructor(
    private readonly store: Store,
    private readonly mapService: MapService,
    ) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.cinemas$.subscribe(cinemas => {
        this.map = this.mapService.buildMapFromFeatureCollection(
          createCinemaFeatureList(cinemas),
          getCoordinatesFromCinemaList(cinemas),
          'ol-map-event-overview'
          )
      })
    );
    this.subscription.add(
      this.screeningEvents$.subscribe(
        screeningEvents => {
          this.calendarOptions = {
            plugins: [dayGridPlugin],
            initialView: 'dayGridMonth',
            weekends: false,
            events: screeningEvents,
            eventMouseEnter: (event) => {
              // TODO: Show Popup with Information
              console.warn('TODO', event.event._def.url);
            },
          };
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
