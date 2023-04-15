import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') tooltip = '';

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      const { left, right, bottom } =
        this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    if (this.componentRef === null) {
      this.elementRef.nativeElement.style.opacity = '.8';
      // TODO: Resolve issue with deprecated resolver
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
      this.componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (
        this.componentRef.hostView as EmbeddedViewRef<TooltipComponent>
      ).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.elementRef.nativeElement.style.opacity = '1';
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
