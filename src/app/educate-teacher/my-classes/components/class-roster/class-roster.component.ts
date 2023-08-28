import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';
import { State } from '../../state';
import { ClassListSelectors } from '../../state/selectors';

@Component({
  selector: 'app-class-roster',
  templateUrl: './class-roster.component.html',
  styleUrls: ['./class-roster.component.scss'],
})
export class ClassRosterComponent implements OnInit {
  displayComponent$: Observable<boolean | null> | undefined;
  errorMessage$: Observable<string | null> | undefined;

  studentDetails: {
    id: number;
    name: string;
    email: string;
    contact: number;
  }[] = [
    {
      id: 1,
      name: 'Nitesh Raj',
      email: 'Nit.raj@g.com',
      contact: 123456789,
    },
    {
      id: 2,
      name: 'Vinay Gupta',
      email: 'Vin.g@g.com',
      contact: 87654321,
    },
  ];

  constructor(
    private store: Store<State>,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.displayComponent$ = this.store.select(
      ClassListSelectors.getDisplayComponent
    );

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
