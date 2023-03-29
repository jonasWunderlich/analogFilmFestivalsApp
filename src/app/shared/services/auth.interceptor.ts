import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // TODO: Build real intercepter logic
    const TOKEN = '123';
    if (this.auth.isAuthenticated) {
      const tokenizedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return next.handle(tokenizedRequest);
    } else {
      return next.handle(request);
    }
  }
}
