import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardBodyStyle]',
})
export class CardBodyStyleDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
    this.elementRef.nativeElement.style.borderRadius = '0 0 5px 5px';
    this.elementRef.nativeElement.style.padding = '33px 0';
  }
}
