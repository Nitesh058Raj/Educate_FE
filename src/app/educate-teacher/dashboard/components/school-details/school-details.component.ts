import { Component, OnInit } from '@angular/core';
import { EducateTeacherService } from 'src/app/educate-teacher/services/educate-teacher.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss'],
})
export class SchoolDetailsComponent implements OnInit {
  schoolName: string = '';
  schoolAddr: string = '';

  constructor(private educateTeacherService: EducateTeacherService) {}

  ngOnInit(): void {
    this.getSchoolDetails();
  }

  getSchoolDetails() {
    this.educateTeacherService.getSchoolDetails().subscribe((res: any) => {
      this.schoolName = res.data[0].SchoolName;
      this.schoolAddr = res.data[0].SchoolAddress;
    });
  }
}
