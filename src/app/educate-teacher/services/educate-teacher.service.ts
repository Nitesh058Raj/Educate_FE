import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import {
  SchoolDetailsInterface,
  SchoolDetailsResponseInterface,
} from 'src/app/models/common.model';

@Injectable({
  providedIn: 'root',
})
export class EducateTeacherService {
  // TODO: We will get this from the user login
  districtId: number = 1;

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
