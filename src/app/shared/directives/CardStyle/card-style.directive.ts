import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
})
export class CardStyleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.margin = '36px';
    elementRef.nativeElement.style.borderRadius = '5px';
    elementRef.nativeElement.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.25)';
  }
}
