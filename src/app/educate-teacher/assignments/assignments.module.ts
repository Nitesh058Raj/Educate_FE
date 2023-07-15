import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignmentsOverviewComponent } from './components/assignments-overview/assignments-overview.component';

@NgModule({
  declarations: [AssignmentsOverviewComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [AssignmentsOverviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssignmentsModule {}
