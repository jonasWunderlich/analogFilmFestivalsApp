import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { APP_TITLE } from 'src/app/app.module';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  appTitle?: string;
  constructor(@Inject(APP_TITLE) appTitle: string, private title: Title) {
    super();
    this.appTitle = appTitle;
  }

  updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    console.log(routerState);
    if (title) {
      this.title.setTitle(`${title} | ${this.appTitle}`);
    } else {
      this.title.setTitle(`${this.appTitle}`);
    }
  }
}
