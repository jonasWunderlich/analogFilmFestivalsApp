import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { APP_CONFIG } from 'src/app/app.module';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  appTitle = inject(APP_CONFIG).title;
  title = inject(Title);

  constructor() {
    super();
  }

  updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title) {
      this.title.setTitle(`${title} | ${this.appTitle}`);
    } else {
      this.title.setTitle(`${this.appTitle}`);
    }
  }
}
