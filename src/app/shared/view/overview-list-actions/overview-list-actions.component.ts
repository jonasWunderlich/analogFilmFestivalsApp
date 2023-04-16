import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfirmDirective } from 'src/app/core/directives/confirm.directive';
import { LoggedinOnlyDirective } from 'src/app/core/guards/loggedin-only.directive';

@Component({
  selector: 'app-overview-list-actions',
  templateUrl: './overview-list-actions.component.html',
  styleUrls: ['./overview-list-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, ConfirmDirective, LoggedinOnlyDirective],
})
export class OverviewListActionsComponent {
  @Input() id = '';
  @Input() path = '';
  @Output() deleteEvent = new EventEmitter<{ id: string }>();

  delete(): void {
    this.deleteEvent.emit({ id: this.id });
  }
}
