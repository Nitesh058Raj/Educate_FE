import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClassDetailsInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { State } from '../../state';
import { ClassDetailsActions } from '../../state/actions';
import {
  ClassDetailsSelectors,
  ClassListSelectors,
} from '../../state/selectors';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss'],
})
export class ClassDetailsComponent implements OnInit, AfterContentChecked {
  displayComponent$: any;
  isLoading$: Observable<boolean> | undefined;
  errorMessage$: Observable<string | null> | null = null;
  classDetails$: Observable<ClassDetailsInterface | null> | undefined;
  selectedClassId$: Observable<number | null> | undefined;

  // Edit popup variables
  initclassName: string = '';
  initclassDescription: string = '';
  editedclassName!: FormControl;
  editedclassDescription!: FormControl;
  errorMessagePopup$: Observable<string | null> | null = null;
  classDetailsForm!: FormGroup;

  // temp vars
  tempClassId: number | null = null;
  errorMessagePopup: string | null = null;

  constructor(
    private modalService: ModalService,
    private store: Store<State>,
    private cdr: ChangeDetectorRef,
    private action$: Actions,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.displayComponent$ = this.store.select(
      ClassListSelectors.getDisplayComponent
    );

    this.editedclassName = this.fb.control('');
    this.editedclassDescription = this.fb.control('');

    this.classDetailsForm = this.fb.group({
      editedclassName: this.editedclassName,
      editedclassDescription: this.editedclassDescription,
    });

    this.classDetails$ = this.store.select(
      ClassDetailsSelectors.getClassDetails
    );

    this.classDetails$.subscribe((data) => {
      if (data) {
        this.initclassName = data.className;
        this.initclassDescription = data.classDescription;

        this.classDetailsForm.patchValue({
          editedclassName: this.initclassName,
          editedclassDescription: this.initclassDescription,
        });
      }
    });

    this.isLoading$ = this.store.select(ClassDetailsSelectors.getLoading);

    this.selectedClassId$ = this.store.select(
      ClassListSelectors.getCurrentClassId
    );

    this.selectedClassId$.subscribe((data) => {
      if (data) {
        this.tempClassId = data;
      }
    });

    // errorMessage for class details component is not required
    this.errorMessage$ = this.store.select(
      ClassListSelectors.getClassListError
    );

    this.errorMessagePopup$ = this.store.select(ClassDetailsSelectors.getError);

    this.errorMessagePopup$.subscribe((data) => {
      if (data) {
        this.errorMessagePopup = data;
        this.cdr.detectChanges();
      }
    });
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  isEnableEditButton() {
    if (
      this.editedclassName.value === '' ||
      this.editedclassDescription.value === '' ||
      this.errorMessagePopup !== null ||
      (this.initclassName === this.editedclassName.value &&
        this.initclassDescription === this.editedclassDescription.value)
    ) {
      return true;
    } else {
      return false;
    }
  }

  openModal(id: string) {
    this.errorMessagePopup = null;
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
        this.store.dispatch(
          ClassDetailsActions.updateClassDetails({
            classDetails: {
              classId: this.tempClassId,
              className: this.editedclassName.value,
              classDescription: this.editedclassDescription.value,
            },
          })
        );

        this.action$.subscribe((data: any) => {
          if (data.type === '[Class Details] Update Class Details Success') {
            this.closeModal(modalId);
            this.errorMessagePopup = null;
            this.cdr.detectChanges();
          } else if (
            data.type === '[Class Details] Update Class Details Failure'
          ) {
            this.errorMessagePopup = data.error;
          }
        });
        break;
      default:
        break;
    }
  }
}
