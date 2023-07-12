import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SideBarItemInterface } from '../models/common.model';
import { EducateTeacherComponent } from './educate-teacher.component';

describe('EducateComponent', () => {
  let component: EducateTeacherComponent;
  let fixture: ComponentFixture<EducateTeacherComponent>;
  let mockRouter: Router;
  let mockRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducateTeacherComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducateTeacherComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router);
    mockRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigateToSelectedTab method', () => {
    const navigateSpy = spyOn(mockRouter, 'navigate');
    const expectedOutcome = 'dashboard';
    const mockValue: SideBarItemInterface = {
      label: 'dashboard',
      title: 'Dashboard',
    };
    component.navigateToSelectedTab(mockValue);
    expect(component.activeTab).toEqual(expectedOutcome);
    expect(navigateSpy).toHaveBeenCalledWith([mockValue.label], {
      relativeTo: mockRoute,
    });
  });
});
