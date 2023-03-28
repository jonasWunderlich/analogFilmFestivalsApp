import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private readonly router: Router) {}

  navigateToError(
    message: string,
    errorCode: number,
    description?: string
  ): void {
    this.router.navigate(['/error'], {
      replaceUrl: false,
      skipLocationChange: true,
      state: {
        errorCode,
        headline: message,
        description,
      },
    });
  }
}
