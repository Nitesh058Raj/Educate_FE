import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducateTeacherComponent } from './educate-teacher.component';

describe('EducateComponent', () => {
  let component: EducateTeacherComponent;
  let fixture: ComponentFixture<EducateTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducateTeacherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
