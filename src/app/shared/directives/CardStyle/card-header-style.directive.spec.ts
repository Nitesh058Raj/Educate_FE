import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardHeaderStyleDirective } from './card-header-style.directive';

@Component({
  template: '<div appCardHeaderStyle></div>',
})
class TestComponent {}

describe('CardHeaderStyleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CardHeaderStyleDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    elementRef = fixture.debugElement
      .query(By.directive(CardHeaderStyleDirective))
      .injector.get(ElementRef);
    fixture.detectChanges();
  });

  it('should apply the card styles to the element', () => {
    const element: HTMLElement = elementRef.nativeElement;

    expect(element.style.height).toBe('51px');
  });
});
