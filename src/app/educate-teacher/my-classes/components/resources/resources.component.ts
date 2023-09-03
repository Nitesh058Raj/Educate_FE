import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResourcesInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { State } from '../../state';
import { ResourcesActions } from '../../state/actions';
import { ClassListSelectors, ResourcesSelectors } from '../../state/selectors';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  displayComponent$: Observable<boolean> | undefined;
  isLoading$: Observable<boolean> | undefined;
  errorMessage$: Observable<string | null> | null = null;
  resources$: Observable<ResourcesInterface[]> | undefined;
  classId$: Observable<number | null> | undefined;
  popupErrorMessage$: Observable<string | null> | null = null;
  selectedResourceId$: Observable<number | null> | null = null;

  //pop up variables
  addResourceName: FormControl | undefined;
  addResourceURL: FormControl | undefined;
  @ViewChild('form') form: any;
  resourceForm!: FormGroup;

  // tenmp variables
  tempResourceId: number | null = null;
  tempClassId: number | null = null;
  popupErrorMessage: string | null = null;

  constructor(
    private modalService: ModalService,
    private store: Store<State>,
    private actions$: Actions,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.displayComponent$ = this.store.select(
      ClassListSelectors.getDisplayComponent
    );
    this.resources$ = this.store.select(ResourcesSelectors.getResources);
    this.isLoading$ = this.store.select(ResourcesSelectors.getLoading);
    // errorMessage for resources component is not required
    this.errorMessage$ = this.store.select(
      ClassListSelectors.getClassListError
    );

    this.classId$ = this.store.select(ClassListSelectors.getCurrentClassId);

    this.classId$.subscribe((classId) => {
      this.tempClassId = classId;
    });

    this.popupErrorMessage$ = this.store.select(ResourcesSelectors.getError);

    this.popupErrorMessage$.subscribe((errorMessage) => {
      this.popupErrorMessage = errorMessage ? errorMessage : null;
    });

    this.addResourceName = this.fb.control('');
    this.addResourceURL = this.fb.control('');

    this.resourceForm = this.fb.group({
      addResourceName: this.addResourceName,
      addResourceURL: this.addResourceURL,
    });

    this.selectedResourceId$ = this.store.select(
      ResourcesSelectors.getSelectedResourceId
    );

    this.selectedResourceId$.subscribe((resourceId) => {
      this.tempResourceId = resourceId;
    });
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }

  selectResource(event: Event, resourceID: number) {
    // preventSingleClick
    event.preventDefault();
    this.tempResourceId = resourceID;
    this.store.dispatch(
      ResourcesActions.setSelectedResourceId({ resourceId: resourceID })
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
        this.popupErrorMessage = null;
        this.closeModal(modalId);
        break;
      case 'Add':
        this.store.dispatch(
          ResourcesActions.addResource({
            resource: {
              classID: this.tempClassId ? this.tempClassId : 0,
              resourceName: this.addResourceName?.value,
              resourceUrl: this.addResourceURL?.value,
            },
          })
        );

        this.actions$.subscribe((action: any) => {
          if (action.type === '[Resources] Add Resource Success') {
            this.popupErrorMessage = null;
            this.resourceForm.reset();
            this.closeModal(modalId);
          } else if (action.type === '[Resources] Add Resource Failure') {
            this.popupErrorMessage = action.error;
          }
        });

        break;
      case 'Remove':
        this.store.dispatch(
          ResourcesActions.deleteResource({
            resourceId: this.tempResourceId ? this.tempResourceId : 0,
            classId: this.tempClassId ? this.tempClassId : 0,
          })
        );

        this.actions$.subscribe((action: any) => {
          if (action.type === '[Resources] Delete Resource Success') {
            this.popupErrorMessage = null;
            this.tempResourceId = null;
            this.closeModal(modalId);
          } else if (action.type === '[Resources] Delete Resource Failure') {
            this.popupErrorMessage = action.error;
          }
        });

        break;
      default:
        break;
    }
  }
}
