import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  selectedClass: string = '';
  classList: string[] = [
    'Mathematics',
    'Science',
    'Science',
    'Biology',
    'Chemistry',
    'Physics',
  ];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  onListBoxClick(item: string) {
    console.log(item);
    this.selectedClass = item;
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
