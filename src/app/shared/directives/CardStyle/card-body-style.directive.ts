import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardBodyStyle]',
})
export class CardBodyStyleDirective {
  @Input() appCardBodyStyle!: string;

  @HostBinding('style.backgroundColor')
  backgroundColor = 'white';

  @HostBinding('style.borderRadius')
  borderRadius = '0 0 5px 5px';

  @HostBinding('style.padding')
  get padding(): string {
    return this.appCardBodyStyle || '33px 0';
  }

  constructor(private elementRef: ElementRef) {}
}
