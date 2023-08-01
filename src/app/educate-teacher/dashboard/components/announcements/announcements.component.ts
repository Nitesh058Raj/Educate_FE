import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError, finalize } from 'rxjs';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';
import { AnnouncementsInterface } from 'src/app/models/common.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  announcements$: Observable<AnnouncementsInterface[]> | undefined;

  constructor(private readonly educateTeacherService: EducateTeacherService) {}

  ngOnInit(): void {
    this.announcements$ = this.educateTeacherService.getAnnouncements().pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      }),
      finalize(() => (this.isLoading = false))
    );
  }
}
