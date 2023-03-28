import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyNgIf]',
})
export class MyNgIfDirective implements OnInit {
  @Input() myNgIf = true;

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<object>
  ) {}

  ngOnInit() {
    const condition = this.myNgIf;

    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
