import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLoggedinOnly]',
  standalone: true,
})
export class LoggedinOnlyDirective implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private readonly authService: AuthService,
    private readonly template: TemplateRef<unknown>,
    private readonly container: ViewContainerRef
  ) {
    this.authService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.container.createEmbeddedView(this.template);
        } else {
          this.container.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
