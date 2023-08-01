import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize, map } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { SchoolDetailsInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss'],
})
export class SchoolDetailsComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  schoolDetails$: Observable<SchoolDetailsInterface> | undefined;

  constructor(private readonly educateTeacherService: EducateTeacherService) {}

  ngOnInit(): void {
    this.schoolDetails$ = this.educateTeacherService.getSchoolDetails().pipe(
      map((data) => data[1]),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      }),
      finalize(() => (this.isLoading = false))
    );
  }
}
