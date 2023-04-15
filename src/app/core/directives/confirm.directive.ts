import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  standalone: true,
})
export class ConfirmDirective {
  @Input('appConfirm') confirmText?: string;
  @Output() confirm = new EventEmitter<void>();

  @HostListener('click') onClick() {
    if (window.confirm(this.confirmText)) {
      this.confirm.emit();
    }
  }
}
