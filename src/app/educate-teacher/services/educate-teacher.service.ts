import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  ResourceCreateInterface,
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

  // School Details
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

  // Announcements
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

  // Resources
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

  createNewResource(resourceData: ResourceCreateInterface) {
    return this.http
      .post('http://localhost:5000/api/resource', resourceData)
      .pipe(
        catchError(this.handleError),
        map((response: any) => response)
      );
  }

  deleteResource(resourceId: number) {
    return this.http
      .delete(`http://localhost:5000/api/resource/${resourceId}`)
      .pipe(
        catchError(this.handleError),
        map((response: any) => response)
      );
  }

  // Class List
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

  createNewClass(classsData: CreateClassDataInterface) {
    return this.http.post('http://localhost:5000/api/class', classsData).pipe(
      catchError(this.handleError),
      map((response: any) => response)
    );
  }

  deleteClass(classId: number) {
    return this.http.delete(`http://localhost:5000/api/class/${classId}`).pipe(
      catchError(this.handleError),
      map((response: any) => response)
    );
  }

  // Class Details
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

  updateClassDetails(classDetails: {
    classId: number | null;
    className: string;
    classDescription: string;
  }): Observable<any> {
    return this.http
      .put<ClassDetailsInterface>(
        `http://localhost:5000/api/class/${classDetails.classId}`,
        classDetails
      )
      .pipe(
        catchError(this.handleError),
        map((response) => response)
      );
  }

  // Assignments
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

  // Error Handler
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.status == 0) {
      errorMessage = `Unable to connect to the server. Please try again later.`;
    } else if (err.status == 500) {
      errorMessage = `${err.error.message}`; // `There is some problem with the service. Please try again later.
    } else if (err.status == 409) {
      errorMessage = `${err.error.message}`;
    } else {
      errorMessage = `There is some problem with the service. Please try again later.`;
    }
    console.log(err);
    return throwError(() => errorMessage);
  }
}
