import { Component, Input, OnInit } from '@angular/core';
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
  @Input() displayComponent: boolean | null = false;

  isLoading = true;
  errorMessage = '';
  resources$: Observable<ResourcesInterface[]> | undefined;

  //pop up variables
  addResourceName: string = '';
  addResourceURL: string = '';

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
