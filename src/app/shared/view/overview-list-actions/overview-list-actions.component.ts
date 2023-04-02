import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview-list-actions',
  templateUrl: './overview-list-actions.component.html',
  styleUrls: ['./overview-list-actions.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf],
})
export class OverviewListActionsComponent {
  @Input() id = '';
  @Input() path = '';
  @Output() deleteEvent = new EventEmitter<{ id: string }>();

  delete(): void {
    this.deleteEvent.emit({ id: this.id });
  }
}
