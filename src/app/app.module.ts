import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './+state/root-store.module';
import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from './core/services/custom-title-strategy.service';
import { SearchComponent } from './shared/ui/search/search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { LoginFormComponent } from './shared/ui/login-form/login-form.component';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CinemaMapComponent } from './shared/ui/cinema-map/cinema-map.component';
import { PushModule } from '@ngrx/component';
import { LayoutComponent } from './shared/layout/layout/layout.component';
registerLocaleData(localeDe);

export const APP_TITLE = new InjectionToken<string>('app-title');

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    NgxTmdbApiModule.forRoot({ apiKey: '05180a707de5ada5dc9a38cd1f8da87b' }),
    SearchComponent,
    LoginFormComponent,
    NavigationComponent,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),

    // TODO: Move to layout wrapper component
    CinemaMapComponent,
    PushModule,
  ],
  providers: [
    { provide: APP_TITLE, useValue: 'analogkino.net' },
    { provide: LOCALE_ID, useValue: 'de-DE' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
