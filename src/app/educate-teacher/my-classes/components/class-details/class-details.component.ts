import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize, map, tap } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { ClassDetailsInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss'],
})
export class ClassDetailsComponent implements OnInit {
  @Input() displayComponent: boolean | null = false;

  isLoading = true;
  errorMessage = '';
  classDetails$: Observable<ClassDetailsInterface> | undefined;

  // Edit popup variables
  editclassName: string = '';
  editclassDescription: string = '';

  constructor(
    private modalService: ModalService,
    private readonly educateTeacherService: EducateTeacherService
  ) {}

  ngOnInit(): void {
    this.classDetails$ = this.educateTeacherService.getClassDetails().pipe(
      map((data) => data[0]),
      tap((data) => {
        this.editclassName = data.className;
        this.editclassDescription = data.classDescription;
      }),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      }),
      finalize(() => (this.isLoading = false))
    );
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  handleOnClickEvent(event: any, modalId: string) {
    switch (event) {
      case 'Cancel':
        this.closeModal(modalId);
        break;
      case 'Update':
        // TODO: Write logic for calling the API of adding Class
        // values are bind to the variables editclassName and editclassDescription with ngModel

        this.closeModal(modalId);
        break;
      default:
        break;
    }
  }
}
