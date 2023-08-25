import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClassDetailsInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { State } from '../../state';
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

  // Edit popup variables
  editclassName: string = '';
  editclassDescription: string = '';

  constructor(
    private modalService: ModalService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.displayComponent$ = this.store.select(
      ClassListSelectors.getDisplayComponent
    );

    this.classDetails$ = this.store.select(
      ClassDetailsSelectors.getClassDetails
    );
    this.isLoading$ = this.store.select(ClassDetailsSelectors.getLoading);

    // errorMessage for class details component is not required
    this.errorMessage$ = this.store.select(
      ClassListSelectors.getClassListError
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
