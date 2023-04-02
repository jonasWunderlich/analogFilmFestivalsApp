import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  activated = true;

  toastr = inject(ToastrService);

  show(message: string, title?: string): void {
    this.activated && this.toastr.show(message, title);
  }

  success(message: string, title?: string): void {
    this.activated && this.toastr.success(message, title);
  }

  error(message: string, title?: string): void {
    this.activated && this.toastr.error(message, title);
  }

  info(message: string, title?: string): void {
    this.activated && this.toastr.info(message, title);
  }

  warning(message: string, title?: string): void {
    this.activated && this.toastr.warning(message, title);
  }
}
