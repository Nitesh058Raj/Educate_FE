import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardBodyStyleDirective } from './card-body-style.directive';

@Component({
  template: '<div appCardBodyStyle></div>',
})
class TestComponent {}

describe('CardBodyStyleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CardBodyStyleDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    elementRef = fixture.debugElement
      .query(By.directive(CardBodyStyleDirective))
      .injector.get(ElementRef);
    fixture.detectChanges();
  });

  it('should apply the card styles to the element', () => {
    const element: HTMLElement = elementRef.nativeElement;

    expect(element.style.backgroundColor).toBe('white');
  });
});
