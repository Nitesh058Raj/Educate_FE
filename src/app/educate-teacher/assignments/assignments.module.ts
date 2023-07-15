import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssignmentsOverviewComponent } from './components/assignments-overview/assignments-overview.component';

@NgModule({
  declarations: [AssignmentsOverviewComponent],
  imports: [CommonModule, SharedModule],
  exports: [AssignmentsOverviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssignmentsModule {}
