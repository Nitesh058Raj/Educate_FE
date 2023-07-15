import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments-overview',
  templateUrl: './assignments-overview.component.html',
  styleUrls: ['./assignments-overview.component.scss'],
})
export class AssignmentsOverviewComponent {
  activeAssignments: number = 3;
  inactiveAssignments: number = 2;
  performance: string = '55.10%';
  selectedOption: string = 'Select Class';
  optionList: string[] = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

  constructor() {}

  onDropdownChange() {
    // TODO: Implement data fetching based on selected option here
  }
}
