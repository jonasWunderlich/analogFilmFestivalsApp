import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';
import { PushModule } from '@ngrx/component';
import { ToastrModule } from 'ngx-toastr';
import { RootStoreModule } from './+state/root-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { CustomTitleStrategy } from './core/services/custom-title-strategy.service';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { GeoMapComponent } from './shared/ui/geo-map/geo-map.component';
import { LoginFormComponent } from './shared/ui/login-form/login-form.component';
import { SearchComponent } from './shared/ui/search/search.component';
registerLocaleData(localeDe);

export interface AppConfig {
  title: string;
  theme: string;
  enableAdmin: boolean;
  mockMode: boolean;
}

const defaultConfig: AppConfig = {
  title: 'analogkino.net',
  theme: 'dark',
  enableAdmin: true,
  mockMode: true,
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app-config', {
  providedIn: 'root',
  factory: () => defaultConfig,
});

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
    GeoMapComponent,
    PushModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: defaultConfig },
    { provide: LOCALE_ID, useValue: 'de-DE' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
