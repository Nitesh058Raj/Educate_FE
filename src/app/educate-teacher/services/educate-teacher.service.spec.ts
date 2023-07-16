import { TestBed } from '@angular/core/testing';

import { EducateTeacherService } from './educate-teacher.service';

describe('EducateTeacherService', () => {
  let service: EducateTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducateTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
