import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize, map } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { AssignmentCountInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-assignments-overview',
  templateUrl: './assignments-overview.component.html',
  styleUrls: ['./assignments-overview.component.scss'],
})
export class AssignmentsOverviewComponent implements OnInit {
  // TODO: Implate the logic for the following variable
  performance: string = '55.10%';

  isLoading = true;
  errorMessage = '';

  assignmentCount$: Observable<AssignmentCountInterface> | undefined;

  constructor(private readonly educateTeacherService: EducateTeacherService) {}

  ngOnInit(): void {
    this.assignmentCount$ = this.educateTeacherService
      .getAssignmentCount()
      .pipe(
        map((data) => data[0]),
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        }),
        finalize(() => (this.isLoading = false))
      );
  }
}
