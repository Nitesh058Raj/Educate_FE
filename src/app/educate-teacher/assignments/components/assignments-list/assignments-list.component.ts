import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError, finalize } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { AssignmentInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.scss'],
})
export class AssignmentsListComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  assignmentsList$ = this.educateTeacherService.getAssignmentList$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    }),
    finalize(() => (this.isLoading = false))
  );

  constructor(private readonly educateTeacherService: EducateTeacherService) {}

  ngOnInit(): void {}

  onEditButtonClicked(assignment: AssignmentInterface) {
    console.log(
      `Edit button clicked for assignment ${assignment.assignmentID}`
    );
  }

  onDeleteButtonClicked(assignment: AssignmentInterface) {
    console.log(
      `Delete button clicked for assignment ${assignment.assignmentID}`
    );
  }
}
