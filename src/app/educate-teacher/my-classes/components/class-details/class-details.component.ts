import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss'],
})
export class ClassDetailsComponent implements OnInit {
  displayComponent$: any;
  isLoading$: Observable<boolean> | undefined;
  errorMessage$: Observable<string | null> | null = null;
  classDetails$: Observable<ClassDetailsInterface | null> | undefined;
  selectedClassId$: Observable<number | null> | undefined;

  // Edit popup variables
  initclassName: string = '';
  initclassDescription: string = '';
  editedclassName: string = '';
  editedclassDescription: string = '';
  errorMessagePopUp$: Observable<string | null> | null = null;

  // temp vars
  tempClassId: number | null = null;
  errorMessagePopup: string | null = null;

  constructor(
    private modalService: ModalService,
    private store: Store<State>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.displayComponent$ = this.store.select(
      ClassListSelectors.getDisplayComponent
    );

    this.classDetails$ = this.store.select(
      ClassDetailsSelectors.getClassDetails
    );

    this.classDetails$.subscribe((data) => {
      if (data) {
        this.initclassName = data.className;
        this.initclassDescription = data.classDescription;

        this.editedclassName = this.initclassName;
        this.editedclassDescription = this.initclassDescription;
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

    this.errorMessagePopUp$ = this.store.select(ClassDetailsSelectors.getError);

    this.errorMessagePopUp$.subscribe((data) => {
      if (data) {
        this.errorMessagePopup = data;
        this.cdr.detectChanges();
      }
    });
  }

  isEnableEditButton() {
    if (
      this.initclassName === this.editedclassName &&
      this.initclassDescription === this.editedclassDescription
    ) {
      return true;
    } else if (
      this.editedclassName === '' ||
      this.editedclassDescription === ''
    ) {
      return true;
    } else {
      return false;
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
      case 'Update':
        this.store.dispatch(
          ClassDetailsActions.updateClassDetails({
            classDetails: {
              classId: this.tempClassId,
              className: this.editedclassName,
              classDescription: this.editedclassDescription,
            },
          })
        );

        if (this.errorMessagePopUp$ == null) {
          this.closeModal(modalId);
        }
        break;
      default:
        break;
    }
  }
}
