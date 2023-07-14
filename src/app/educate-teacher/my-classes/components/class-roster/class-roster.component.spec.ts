import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRosterComponent } from './class-roster.component';

describe('ClassRosterComponent', () => {
  let component: ClassRosterComponent;
  let fixture: ComponentFixture<ClassRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassRosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
