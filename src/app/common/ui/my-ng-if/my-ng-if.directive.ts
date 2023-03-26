import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective {

  @Input() myNgIf = true;

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>,
  ) { }

  ngOnInit() {
   const condition = this.myNgIf;

   if (condition) {
    this.viewContainer.createEmbeddedView(this.template);
   } else {
    this.viewContainer.clear();
   }
  }

}
