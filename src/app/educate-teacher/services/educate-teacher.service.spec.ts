import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { EducateTeacherService } from './educate-teacher.service';

describe('EducateTeacherService', () => {
  let service: EducateTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EducateTeacherService],
    });
    service = TestBed.inject(EducateTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
