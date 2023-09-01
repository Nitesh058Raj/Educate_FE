import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClassInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { UserState } from 'src/app/user-store';
import { UserSelectors } from 'src/app/user-store/selectors';
import { State } from '../../state';
import { ClassListActions } from '../../state/actions';
import { ClassListSelectors } from '../../state/selectors';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit, AfterContentChecked {
  @ViewChild('form') form: any;
  classList$: Observable<ClassInterface[] | null> | undefined;
  isLoading$: Observable<boolean> | undefined;
  errorMessage$: Observable<string | null> | null = null;
  selectedClassId$: Observable<number | null> | undefined;
  teacherId$: Observable<number | undefined> | undefined;
  schoolId$: Observable<number | undefined> | undefined;
  popUpError$: Observable<string | null> | undefined;

  // temp vars
  tempClassId: number | null = null;
  tempteacherID: number | undefined;
  tempSchoolId: number | undefined;

  // form variables
  className: FormControl | undefined;
  classDescription: FormControl | undefined;
  classDetailsForm!: FormGroup;
  responseErrorMessage: string | null = null;

  constructor(
    private modalService: ModalService,
    private store: Store<State>,
    private userStore: Store<UserState>,
    private action$: Actions,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
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

    this.className = this.fb.control('');
    this.classDescription = this.fb.control('');

    this.classDetailsForm = this.fb.group({
      className: this.className,
      classDescription: this.classDescription,
    });

    this.teacherId$ = this.userStore.select(UserSelectors.getId);

    this.teacherId$.subscribe((id) => {
      this.tempteacherID = id;
    });

    this.schoolId$ = this.userStore.select(UserSelectors.getSchoolId);

    this.schoolId$.subscribe((id) => {
      this.tempSchoolId = id;
    });

    this.popUpError$ = this.store.select(
      ClassListSelectors.getClassListPopupError
    );

    this.popUpError$.subscribe((error) => {
      if (error) {
        this.responseErrorMessage = error;
      }
    });

    this.cdr.detectChanges();
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  onListBoxClick(id: number) {
    if (this.tempClassId !== id) {
      this.tempClassId = id;
      this.store.dispatch(ClassListActions.setCurrentClass({ classId: id }));
    }
  }

  resetClassForm() {
    this.form.resetForm(); // Reset form state and clear validity
    this.responseErrorMessage = null; // Clear the error message if any
    this.className?.setValue(''); // Reset the value of the form field
    this.classDescription?.setValue(''); // Reset the value of the form field
  }

  submitClassForm(modalId: string) {
    this.store.dispatch(
      ClassListActions.createClass({
        classData: {
          className: this.className?.value,
          classDescription: this.classDescription?.value,
          teacherID: this.tempteacherID,
          schoolID: this.tempSchoolId,
        },
      })
    );

    this.action$.subscribe((data: any) => {
      if (data.type === '[Class List] Create Class Success') {
        this.resetClassForm();
        this.closeModal(modalId);
      } else if (data.type === '[Class List] Create Class Failure') {
        this.responseErrorMessage = data.error;
      }
    });
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
        this.store.dispatch(
          ClassListActions.deleteClass({ classId: this.tempClassId! })
        );

        this.action$.subscribe((data: any) => {
          if (data.type === '[Class List] Delete Class Success') {
            this.closeModal(modalId);
          } else if (data.type === '[Class List] Delete Class Failure') {
            this.responseErrorMessage = data.error;
          }
        });

        break;
      default:
        break;
    }
  }
}
