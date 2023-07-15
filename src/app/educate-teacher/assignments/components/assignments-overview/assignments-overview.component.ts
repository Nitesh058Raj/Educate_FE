import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments-overview',
  templateUrl: './assignments-overview.component.html',
  styleUrls: ['./assignments-overview.component.scss'],
})
export class AssignmentsOverviewComponent implements OnInit {
  activeAssignments: number = 3;
  inactiveAssignments: number = 2;
  performance: string = '55.10%';
  constructor() {}

  ngOnInit(): void {}
}
