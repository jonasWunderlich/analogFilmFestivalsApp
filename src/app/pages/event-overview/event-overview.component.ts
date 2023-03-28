import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';
import { selectScreeningEvents } from '../../root-store/screening-event-store/screening-event.selectors';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss'],
})
export class EventOverviewComponent implements OnInit, OnDestroy {
  calendarOptions: CalendarOptions = {};
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  subscription = new Subscription();

  constructor(private readonly store: Store, private readonly router: Router) {}

  ngOnInit(): void {
    this.subscription.add(
      this.screeningEvents$.subscribe((screeningEvents) => {
        this.calendarOptions = {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth',
          weekends: false,
          events: screeningEvents,
          eventClick: (arg) => {
            arg.jsEvent.preventDefault();
            this.router.navigate(['event', arg.event._def.publicId]);
          },
          eventMouseEnter: (arg) => {
            // TODO: Show Popup with Information
            console.warn('TODO', arg, arg.event._def);
          },
        };
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
