import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { ClassInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  isLoading: boolean = true;
  errorMessage: string = '';
  classList$: Observable<ClassInterface[]> | undefined;

  selectedClass: string = '';

  constructor(
    private modalService: ModalService,
    private readonly educateTeacherService: EducateTeacherService
  ) {}

  ngOnInit(): void {
    this.classList$ = this.educateTeacherService.getClassList().pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      }),
      finalize(() => (this.isLoading = false))
    );
  }

  onListBoxClick(item: string) {
    if (this.selectedClass !== item) {
      this.selectedClass = item;
      // TODO: Write logic for calling the API of getting required data
      // Here insted of item we can use classId from the classList$
    }
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
      case 'Submit':
        // TODO: Write logic for calling the API of adding Class

        this.closeModal(modalId);
        break;
      case 'Remove':
        // TODO: Write logic for calling the API of removing Class

        this.closeModal(modalId);
        break;
      default:
        break;
    }
  }
}
