import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

export interface EventLike {
  id: string;
  title: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {};

  @Input()
  set calendarEvents(value: EventInput[]) {
    this.calendarOptions = this.getOptions(value);
  }

  constructor(private readonly router: Router) {}

  private getOptions(calendarEvents: EventInput[] = []): CalendarOptions {
    return {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      weekends: false,
      events: calendarEvents,
      eventClick: (arg) => {
        arg.jsEvent.preventDefault();
        this.router.navigate(['event', arg.event._def.publicId]);
      },
      eventMouseEnter: (arg) => {
        // TODO: Show Popup with Information
        console.warn('TODO', arg, arg.event._def);
      },
    };
  }
}
