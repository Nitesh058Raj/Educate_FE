import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EducateTeacher,
  EducateTeacherRoutes,
} from '../constants/educate-teacher.constant';
import { EducateTeacherComponent } from './educate-teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { HelpAndSupportsComponent } from './help-and-supports/help-and-supports.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const childRoutes: Routes = [
  { path: '', redirectTo: EducateTeacher.EDUCATE_TEACHER, pathMatch: 'full' },
  { path: EducateTeacherRoutes.DASHBOARD, component: DashboardComponent },
  { path: EducateTeacherRoutes.MY_CLASSES, component: MyClassesComponent },
  {
    path: EducateTeacherRoutes.ASSIGNMENTS,
    component: AssignmentsComponent,
  },
  {
    path: EducateTeacherRoutes.HELP_AND_SUPPORT,
    component: HelpAndSupportsComponent,
  },
  { path: '**', redirectTo: EducateTeacher.EDUCATE_TEACHER },
];

const routes: Routes = [
  {
    path: '',
    component: EducateTeacherComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducateTeacherRoutingModule {}
