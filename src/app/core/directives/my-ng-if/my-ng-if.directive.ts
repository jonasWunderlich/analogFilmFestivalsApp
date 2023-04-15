import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appMyNgIf]',
})
export class MyNgIfDirective {
  viewContainer = inject(ViewContainerRef);
  templateRef = inject(TemplateRef<object>);

  @Input() set myNgIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
