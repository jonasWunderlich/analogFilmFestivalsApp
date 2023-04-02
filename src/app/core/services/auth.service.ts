import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated$ = new BehaviorSubject(true);
  readonly isAuthenticated$ = this._isAuthenticated$.asObservable();

  router = inject(Router);

  get isAuthenticated() {
    return this._isAuthenticated$.value;
  }

  login() {
    this._isAuthenticated$.next(true);
  }

  logout() {
    this._isAuthenticated$.next(false);
    this.router.navigate(['/']);
  }
}
