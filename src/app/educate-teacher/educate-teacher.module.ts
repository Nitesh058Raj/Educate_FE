import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EducateTeacherComponent } from './educate-teacher.component';
import { EducateTeacherRoutingModule } from './educate-teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HelpAndSupportsComponent } from './help-and-supports/help-and-supports.component';

@NgModule({
  declarations: [EducateTeacherComponent, DashboardComponent, MyClassesComponent, AssignmentsComponent, HelpAndSupportsComponent],
  imports: [EducateTeacherRoutingModule, CommonModule, SharedModule],
  exports: [EducateTeacherComponent],
})
export class EducateTeacherModule {}
