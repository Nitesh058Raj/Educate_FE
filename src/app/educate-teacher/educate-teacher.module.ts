import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentsModule } from './assignments/assignments.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EducateTeacherRoutingModule } from './educate-teacher-routing.module';
import { EducateTeacherComponent } from './educate-teacher.component';
import { HelpAndSupportsComponent } from './help-and-supports/help-and-supports.component';
import { HelpAndSupportsModule } from './help-and-supports/help-and-supports.module';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyClassesModule } from './my-classes/my-classes.module';

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
    HttpClientModule,
    DashboardModule,
    MyClassesModule,
    AssignmentsModule,
    HelpAndSupportsModule,
  ],
  exports: [EducateTeacherComponent],
})
export class EducateTeacherModule {}
