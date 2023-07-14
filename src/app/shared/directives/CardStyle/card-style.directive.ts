import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
})
export class CardStyleDirective {
  @Input() appCardStyle!: string;

  @HostBinding('style.margin')
  get margin(): string {
    return this.appCardStyle || '36px 36px 0 36px';
  }

  @HostBinding('style.borderRadius')
  borderRadius = '5px';

  @HostBinding('style.boxShadow')
  boxShadow = '0 1px 4px rgba(0, 0, 0, 0.25)';

  constructor(private elementRef: ElementRef) {}
}
