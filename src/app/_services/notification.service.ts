import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  show(message: string, title = ''): void {
    console.log('NFS says: show', message, title);
  }

  success(message: string, title = ''): void {
    console.log('NFS says: success', message, title);
  }

  error(message: string, title = ''): void {
    console.log('NFS says: error', message, title);
  }

  info(message: string, title = ''): void {
    console.log('NFS says: info', message, title);
  }

  warning(message: string, title = ''): void {
    console.log('NFS says: warning', message, title);
  }
}
