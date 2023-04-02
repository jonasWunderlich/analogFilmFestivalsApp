import { Component, Inject } from '@angular/core';
import { APP_TITLE } from './app.module';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle?: string;
  constructor(
    @Inject(APP_TITLE) appTitle: string,
    public readonly auth: AuthService
  ) {
    this.appTitle = appTitle;
  }
}
