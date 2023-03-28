import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  LOGGING_ACTIVE = false;

  show(message: string, title = ''): void {
    this.logNotification('show', message, title);
  }

  success(message: string, title = ''): void {
    this.logNotification('success', message, title);
  }

  error(message: string, title = ''): void {
    this.logNotification('error', message, title);
  }

  info(message: string, title = ''): void {
    this.logNotification('info', message, title);
  }

  warning(message: string, title = ''): void {
    this.logNotification('warning', message, title);
  }

  logNotification(type: string, message: string, title: string) {
    if (this.LOGGING_ACTIVE) {
      console.log('NotificationService:', type, message, title);
    }
  }
}
