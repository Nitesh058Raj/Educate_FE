import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardHeaderStyle]',
})
export class CardHeaderStyleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.height = '51px';
    elementRef.nativeElement.style.padding = '0 32px';
    elementRef.nativeElement.style.color = 'white';
    elementRef.nativeElement.style.backgroundColor = '#268aff';
    elementRef.nativeElement.style.display = 'flex';
    elementRef.nativeElement.style.alignItems = 'center';
    elementRef.nativeElement.style.justifyContent = 'space-between';
    elementRef.nativeElement.style.borderRadius = '5px 5px 0 0';
    elementRef.nativeElement.style.fontFamily = 'Karla';
    elementRef.nativeElement.style.fontSize = '32px';
  }
}
