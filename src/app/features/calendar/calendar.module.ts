import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, RouterModule, FullCalendarModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
