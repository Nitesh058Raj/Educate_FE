import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss'],
})
export class ClassDetailsComponent implements OnInit {
  classDescription: string =
    'This class is created for Mathematics subject where all the assignments and updates will be posted.';
  className: string = 'Mathematics';

  EditclassName: string = '';
  EditclassDescription: string = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.EditclassName = this.className;
    this.EditclassDescription = this.classDescription;
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
        // values are bind to the variables EditclassName and EditclassDescription with ngModel

        this.closeModal(modalId);
        break;
      default:
        break;
    }
  }
}
