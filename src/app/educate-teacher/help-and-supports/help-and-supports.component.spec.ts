import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAndSupportsComponent } from './help-and-supports.component';

describe('HelpAndSupportsComponent', () => {
  let component: HelpAndSupportsComponent;
  let fixture: ComponentFixture<HelpAndSupportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpAndSupportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAndSupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
