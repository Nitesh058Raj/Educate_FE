import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize, map } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { ClassInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-assignment-class',
  templateUrl: './assignment-class.component.html',
  styleUrls: ['./assignment-class.component.scss'],
})
export class AssignmentClassComponent implements OnInit {
  isLoading: boolean = true;
  errorMessage: string = '';
  selectedOption: string = 'Select Class';

  optionList$: Observable<ClassInterface[]> | undefined;

  constructor(private readonly educateTeacherService: EducateTeacherService) {}

  ngOnInit(): void {
    this.optionList$ = this.educateTeacherService.getClassList().pipe(
      map((data) => data),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      }),
      finalize(() => (this.isLoading = false))
    );
  }

  onDropdownChange() {}
}
