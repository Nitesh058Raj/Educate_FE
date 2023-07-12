import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EducateTeacher,
  EducateTeacherRoutes,
} from '../constants/educate-teacher.constant';
import { SideBarItemInterface } from '../models/common.model';

@Component({
  selector: 'app-educate-teacher',
  templateUrl: './educate-teacher.component.html',
  styleUrls: ['./educate-teacher.component.scss'],
})
export class EducateTeacherComponent implements OnInit {
  activeTab: string = 'dashboard';
  itemList: SideBarItemInterface[] = [
    {
      title: EducateTeacher.DASHBOARD,
      label: EducateTeacherRoutes.DASHBOARD,
    },
    {
      title: EducateTeacher.MY_CLASSES,
      label: EducateTeacherRoutes.MY_CLASSES,
    },
    {
      title: EducateTeacher.ASSIGNMENTS,
      label: EducateTeacherRoutes.ASSIGNMENTS,
    },
    {
      title: EducateTeacher.HELP_AND_SUPPORT,
      label: EducateTeacherRoutes.HELP_AND_SUPPORT,
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeTab = this.router.url.split('/')[2] || 'dashboard';
  }

  navigateToSelectedTab(value: SideBarItemInterface) {
    this.activeTab = value.label;
    this.router.navigate([value.label], { relativeTo: this.route });
  }
}
