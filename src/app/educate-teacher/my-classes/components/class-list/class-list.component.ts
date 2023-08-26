import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ClassDetailsInterface,
  ClassInterface,
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
  classFormData: ClassDetailsInterface = {
    className: '',
    classDescription: '',
  };

  constructor(
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
    this.classFormData = {
      className: '',
      classDescription: '',
    };
  }

  submitClassForm(form: NgForm) {
    this.resetClassForm();
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
        console.log(this.classFormData);
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
