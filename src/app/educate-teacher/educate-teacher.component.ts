import { Component, OnInit } from '@angular/core';
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
      title: 'Dashboard',
      label: 'dashboard',
    },
    {
      title: 'My Classes',
      label: 'my-classes',
    },
    {
      title: 'Assignments',
      label: 'assignments',
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
