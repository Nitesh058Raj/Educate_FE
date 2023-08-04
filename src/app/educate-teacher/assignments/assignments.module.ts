import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignmentClassComponent } from './components/assignment-class/assignment-class.component';
import { AssignmentSingleComponent } from './components/assignment-single/assignment-single.component';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { AssignmentsOverviewComponent } from './components/assignments-overview/assignments-overview.component';

@NgModule({
  declarations: [
    AssignmentsOverviewComponent,
    AssignmentsListComponent,
    AssignmentSingleComponent,
    AssignmentClassComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    AssignmentsOverviewComponent,
    AssignmentsListComponent,
    AssignmentSingleComponent,
    AssignmentClassComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssignmentsModule {}
