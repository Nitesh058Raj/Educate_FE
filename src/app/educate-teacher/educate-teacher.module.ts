import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EducateTeacherRoutingModule } from './educate-teacher-routing.module';
import { EducateTeacherComponent } from './educate-teacher.component';
import { HelpAndSupportsComponent } from './help-and-supports/help-and-supports.component';
import { MyClassesComponent } from './my-classes/my-classes.component';

@NgModule({
  declarations: [
    EducateTeacherComponent,
    DashboardComponent,
    MyClassesComponent,
    AssignmentsComponent,
    HelpAndSupportsComponent,
  ],
  imports: [
    EducateTeacherRoutingModule,
    CommonModule,
    SharedModule,
    DashboardModule,
  ],
  exports: [EducateTeacherComponent],
})
export class EducateTeacherModule {}
