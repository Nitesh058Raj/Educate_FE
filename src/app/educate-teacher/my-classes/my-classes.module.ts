import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassRosterComponent } from './components/class-roster/class-roster.component';
import { ResourcesComponent } from './components/resources/resources.component';

@NgModule({
  declarations: [
    ClassListComponent,
    ClassDetailsComponent,
    ResourcesComponent,
    ClassRosterComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [
    ClassListComponent,
    ClassDetailsComponent,
    ResourcesComponent,
    ClassRosterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
