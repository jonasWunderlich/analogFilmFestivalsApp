import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { APP_CONFIG } from './app.module';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngrx/store';
import { loadCinemas } from './+state/cinema-store/cinema.actions';
import { loadProjections } from './+state/projection-store/projection.actions';
import { loadScreeningEvents } from './+state/screening-event-store/screening-event.actions';
import { loadReports } from './+state/report-store/report.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  auth = inject(AuthService);
  store = inject(Store);
  appConfig = inject(APP_CONFIG);
  appTitle = this.appConfig.title;
  theme = this.appConfig.theme;

  constructor() {
    this.store.dispatch(loadScreeningEvents());
    this.store.dispatch(loadProjections());
    this.store.dispatch(loadCinemas());
    this.store.dispatch(loadReports());
  }
}
