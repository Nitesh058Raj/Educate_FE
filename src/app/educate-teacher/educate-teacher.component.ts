import { Component, OnInit } from '@angular/core';
import { EducateTeacher } from '../constants/educate-teacher.constant';
import { SideBarItemInterface } from '../models/common.model';

@Component({
  selector: 'app-educate-teacher',
  templateUrl: './educate-teacher.component.html',
  styleUrls: ['./educate-teacher.component.scss'],
})
export class EducateTeacherComponent implements OnInit {
  activeTab: string = 'Dashboard';
  itemList: SideBarItemInterface[] = [
    {
      title: EducateTeacher.DASHBOARD,
      label: 'dashboard',
    },
    {
      title: EducateTeacher.MY_CLASSES,
      label: 'my-classes',
    },
    {
      title: EducateTeacher.ASSIGNMENTS,
      label: 'assignments',
    },
    {
      title: EducateTeacher.HELP_AND_SUPPORT,
      label: 'h&s',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  navigateToSelectedTab(value: string) {
    console.log('Navigating to: ', value);
    this.activeTab = value;
    // TODO: Write code to change route to the selected tab
  }
}
