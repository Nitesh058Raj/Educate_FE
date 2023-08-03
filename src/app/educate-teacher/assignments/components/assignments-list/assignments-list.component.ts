import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.scss'],
})
export class AssignmentsListComponent implements OnInit {
  // TODO: Remove this dummy data
  assignmentDetails: {
    id: number;
    title: string;
    dueDate: string;
    status: string;
  }[] = [
    {
      id: 1,
      title: 'Assignment 1',
      dueDate: '2023-07-25',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Assignment 2',
      dueDate: '2023-08-05',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Assignment 3',
      dueDate: '2023-10-25',
      status: 'Inactive',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onEditButtonClicked(id: number) {
    console.log(`Edit button clicked for assignment ${id}`);
  }

  onDeleteButtonClicked(id: number) {
    console.log(`Delete button clicked for assignment ${id}`);
  }
}
