import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardStyleDirective } from './card-style.directive';

@Component({
  template: '<div appCardStyle></div>',
})
class TestComponent {}

describe('CardStyleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CardStyleDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    elementRef = fixture.debugElement
      .query(By.directive(CardStyleDirective))
      .injector.get(ElementRef);
    fixture.detectChanges();
  });

  it('should apply the card styles to the element', () => {
    const element: HTMLElement = elementRef.nativeElement;

    expect(element.style.margin).toBe('36px');
  });
});
