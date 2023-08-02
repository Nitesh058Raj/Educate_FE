import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { ResourcesInterface } from 'src/app/models/common.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  resources$: Observable<ResourcesInterface[]> | undefined;

  // resources list
  resourcesList = [
    {
      name: 'Maths Textbook',
      url: 'https://www.example.com/maths-textbook',
    },
    {
      name: 'English Video',
      url: 'https://www.example.com/english-video',
    },
    {
      name: 'Literature Article',
      url: 'https://www.example.com/literature-article',
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
      name: 'Psychology Textbook',
      url: 'https://www.example.com/psychology-textbook',
    },
  ];

  //pop up variables
  AddResourceName: string = '';
  AddResourceURL: string = '';

  constructor(
    private modalService: ModalService,
    private readonly educateTeacherService: EducateTeacherService
  ) {}

  ngOnInit(): void {
    this.resources$ = this.educateTeacherService.getResources().pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      }),
      finalize(() => (this.isLoading = false))
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
