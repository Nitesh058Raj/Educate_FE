import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import {
  AnnouncementsInterface,
  AnnouncementsResponseInterface,
  ClassInterface,
  ClassResponseInterface,
  ResourcesInterface,
  ResourcesResponseInterface,
  SchoolDetailsInterface,
  SchoolDetailsResponseInterface,
} from 'src/app/models/common.model';

@Injectable({
  providedIn: 'root',
})
export class EducateTeacherService {
  // TODO: We will get this from the user login
  districtId: number = 1;
  classId: number = 1;
  teacherId: number = 1;

  constructor(private readonly http: HttpClient) {}

  getSchoolDetails(): Observable<SchoolDetailsInterface[]> {
    return this.http
      .get<SchoolDetailsResponseInterface>(
        `http://localhost:5000/api/schools/${this.districtId}`
      )
      .pipe(
        map((response) => response.data),
        tap((data) => console.log('School details: ', data)),
        catchError(this.handleError)
      );
  }

  getAnnouncements(): Observable<AnnouncementsInterface[]> {
    return this.http
      .get<AnnouncementsResponseInterface>(
        'http://localhost:5000/api/announcements'
      )
      .pipe(
        map((response) => response.data),
        tap((data) => console.log('Announcements: ', data)),
        catchError(this.handleError)
      );
  }

  getResources(): Observable<ResourcesInterface[]> {
    return this.http
      .get<ResourcesResponseInterface>(
        `http://localhost:5000/api/resources/${this.classId}`
      )
      .pipe(
        map((response) => response.data),
        tap((data) => console.log('Resources: ', data)),
        catchError(this.handleError)
      );
  }

  getClassList(): Observable<ClassInterface[]> {
    return this.http
      .get<ClassResponseInterface>(
        `http://localhost:5000/api/classes/${this.teacherId}`
      )
      .pipe(
        map((response) => response.data),
        tap((data) => console.log('Class list: ', data)),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.status == 0) {
      errorMessage = `Unable to connect to the server. Please try again later.`;
    } else {
      errorMessage = `There is some problem with the service. Please try again later.`;
    }
    console.log(err);
    return throwError(() => errorMessage);
  }
}
