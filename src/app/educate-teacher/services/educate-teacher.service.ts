import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EducateTeacherService {
  constructor(private http: HttpClient) {}

  getSchoolDetails() {
    const url = 'http://localhost:5000/api/school/1';
    return this.http.get(url);
  }
}
