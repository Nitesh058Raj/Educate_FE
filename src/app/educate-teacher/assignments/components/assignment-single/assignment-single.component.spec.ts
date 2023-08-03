import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSingleComponent } from './assignment-single.component';

describe('AssignmentSingleComponent', () => {
  let component: AssignmentSingleComponent;
  let fixture: ComponentFixture<AssignmentSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentSingleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
