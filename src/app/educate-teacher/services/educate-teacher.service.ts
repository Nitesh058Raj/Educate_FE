import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import {
  AnnouncementsInterface,
  AnnouncementsResponseInterface,
  AssignmentCountInterface,
  AssignmentCountResponseInterface,
  AssignmentInterface,
  AssignmentResponseInterface,
  ClassDetailsInterface,
  ClassDetailsResponseInterface,
  ClassInterface,
  ClassResponseInterface,
  CreateClassDataInterface,
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
        catchError(this.handleError)
      );
  }

  getResources(classId: number): Observable<ResourcesInterface[]> {
    return this.http
      .get<ResourcesResponseInterface>(
        `http://localhost:5000/api/resources/${classId}`
      )
      .pipe(
        map((response) => response.data),
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
        catchError(this.handleError)
      );
  }

  getClassDetails(classId: number): Observable<ClassDetailsInterface[]> {
    return this.http
      .get<ClassDetailsResponseInterface>(
        `http://localhost:5000/api/class/${classId}`
      )
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getAssignmentCount(): Observable<AssignmentCountInterface[]> {
    return this.http
      .get<AssignmentCountResponseInterface>(
        `http://localhost:5000/api/assignment/count/${this.classId}`
      )
      .pipe(
        map((response) => response.data),
        catchError(this.handleError)
      );
  }

  getAssignmentList$: Observable<AssignmentInterface[]> = this.http
    .get<AssignmentResponseInterface>(
      `http://localhost:5000/api/assignment/${this.classId}`
    )
    .pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );

  createNewClass(classsData: CreateClassDataInterface) {
    return this.http.post('http://localhost:5000/api/class', classsData).pipe(
      map((response: any) => response),
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
