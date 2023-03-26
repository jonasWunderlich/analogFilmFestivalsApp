import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

    show(message: string, title = ''): void {
    console.log('show', message, title);
  }

  success(message: string, title = ''): void {
    console.log('success', message, title);
  }

  error(message: string, title = ''): void {
    console.log('error', message, title);
  }

  info(message: string, title = ''): void {
    console.log('info', message, title);
  }

  warning(message: string, title = ''): void {
    console.log('warning', message, title);
  }
}
