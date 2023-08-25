import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResourcesInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { State } from '../../state';
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

  //pop up variables
  addResourceName: string = '';
  addResourceURL: string = '';

  constructor(
    private modalService: ModalService,
    private store: Store<State>
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
      case 'Add':
        // TODO: Write logic for calling the service of adding Resource
        // values are bind with addResourceName and addResourceURL variables

        this.closeModal(modalId);
        break;
      case 'Remove':
        this.closeModal(modalId);
        break;
      default:
        break;
    }
  }
}
