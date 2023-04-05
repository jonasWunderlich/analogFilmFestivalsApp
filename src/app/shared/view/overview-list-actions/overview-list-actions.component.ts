import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-overview-list-actions',
  templateUrl: './overview-list-actions.component.html',
  styleUrls: ['./overview-list-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgIf, PushModule],
})
export class OverviewListActionsComponent {
  @Input() id = '';
  @Input() path = '';
  @Output() deleteEvent = new EventEmitter<{ id: string }>();
  isAuthenticated$ = inject(AuthService).isAuthenticated$;

  delete(): void {
    this.deleteEvent.emit({ id: this.id });
  }
}
