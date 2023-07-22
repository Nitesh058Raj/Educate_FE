import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  isResourceAvailable = false;

  //pop up variables
  AddResourceName: string = '';
  AddResourceURL: string = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

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
        // TODO: Write logic for calling the API of adding Resource
        // values are bind with AddResourceName and AddResourceURL variables

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
