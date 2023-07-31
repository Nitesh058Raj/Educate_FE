import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  isResourceAvailable = true;

  // resources list
  resourcesList = [
    {
      name: 'Maths Textbook',
      url: 'https://www.example.com/maths-textbook',
    },
    {
      name: 'History Article',
      url: 'https://www.example.com/history-article',
    },
    {
      name: 'English Video',
      url: 'https://www.example.com/english-video',
    },
    {
      name: 'Science Website',
      url: 'https://www.example.com/science-website',
    },
    {
      name: 'Geography Article',
      url: 'https://www.example.com/geography-article',
    },
    {
      name: 'Physics Textbook',
      url: 'https://www.example.com/physics-textbook',
    },
    {
      name: 'Chemistry Video',
      url: 'https://www.example.com/chemistry-video',
    },
    {
      name: 'Biology Website',
      url: 'https://www.example.com/biology-website',
    },
    {
      name: 'Literature Article',
      url: 'https://www.example.com/literature-article',
    },
    {
      name: 'Art Video',
      url: 'https://www.example.com/art-video',
    },
    {
      name: 'Music Textbook',
      url: 'https://www.example.com/music-textbook',
    },
    {
      name: 'Computer Science Website',
      url: 'https://www.example.com/computer-science-website',
    },
    {
      name: 'Economics Article',
      url: 'https://www.example.com/economics-article',
    },
    {
      name: 'Politics Video',
      url: 'https://www.example.com/politics-video',
    },
    {
      name: 'Psychology Textbook',
      url: 'https://www.example.com/psychology-textbook',
    },
  ];

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
      case 'Add':
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
