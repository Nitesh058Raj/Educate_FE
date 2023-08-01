import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignmentsListComponent } from './components/assignments-list/assignments-list.component';
import { AssignmentsOverviewComponent } from './components/assignments-overview/assignments-overview.component';

@NgModule({
  declarations: [AssignmentsOverviewComponent, AssignmentsListComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [AssignmentsOverviewComponent, AssignmentsListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssignmentsModule {}
