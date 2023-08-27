import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import {
  ClassInterface,
  CreateClassDataInterface,
} from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { State } from '../../state';
import { ClassListActions } from '../../state/actions';
import { ClassListSelectors } from '../../state/selectors';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  @ViewChild('form') form: any;
  classList$: Observable<ClassInterface[] | null> | undefined;
  isLoading$: Observable<boolean> | undefined;
  errorMessage$: Observable<string | null> | null = null;
  selectedClassId$: Observable<number | null> | undefined;
  tempClassId: number | null = null;
  responseErrorMessage: string = '';
  classFormData: CreateClassDataInterface = {
    className: '',
    classDescription: '',
    schoolID: 1,
    teacherID: 1,
  };

  constructor(
    private educateTeacherService: EducateTeacherService,
    private modalService: ModalService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ClassListActions.loadClassList());
    this.isLoading$ = this.store.select(ClassListSelectors.getClassListLoading);

    this.classList$ = this.store.select(ClassListSelectors.getClassList);

    this.errorMessage$ = this.store.select(
      ClassListSelectors.getClassListError
    );

    this.selectedClassId$ = this.store.select(
      ClassListSelectors.getCurrentClassId
    );

    this.selectedClassId$.subscribe((id) => {
      this.tempClassId = id;
    });
  }

  onListBoxClick(id: number) {
    if (this.tempClassId !== id) {
      this.tempClassId = id;
      this.store.dispatch(ClassListActions.setCurrentClass({ classId: id }));
    }
  }

  resetClassForm() {
    this.form.resetForm(); // Reset form state and clear validity
    this.responseErrorMessage = ''; // Clear the error message if any
    this.classFormData = {
      className: '',
      classDescription: '',
      schoolID: 1,
      teacherID: 1,
    };
  }

  submitClassForm(modalId: string) {
    // Logic for API call to create new class
    this.educateTeacherService
      .createNewClass(this.classFormData)
      .subscribe((response: any) => {
        if (response.statusCode !== 201) {
          this.handleResponseError(response);
        } else {
          this.closeModal(modalId); // Close the modal
          this.resetClassForm(); // Reset the form
          this.store.dispatch(ClassListActions.loadClassList()); // Load the class list again
        }
      });
  }

  handleResponseError(response: any) {
    if (response.statusCode === 409) {
      this.responseErrorMessage = response.message;
      // Clear the error message after 5 seconds
      setTimeout(() => {
        this.responseErrorMessage = '';
      }, 5000);
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
        this.resetClassForm();
        this.closeModal(modalId);
        break;
      case 'Submit':
        this.submitClassForm(modalId);
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
