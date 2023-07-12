import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EducateTeacher,
  EducateTeacherRoutes,
} from '../constants/educate-teacher.constant';
import { EducateTeacherComponent } from './educate-teacher.component';

const childRoutes: Routes = [
  { path: '', redirectTo: EducateTeacher.EDUCATE_TEACHER, pathMatch: 'full' },
  { path: EducateTeacherRoutes.DASHBOARD, component: EducateTeacherComponent },
  { path: EducateTeacherRoutes.MY_CLASSES, component: EducateTeacherComponent },
  {
    path: EducateTeacherRoutes.ASSIGNMENTS,
    component: EducateTeacherComponent,
  },
  {
    path: EducateTeacherRoutes.HELP_AND_SUPPORT,
    component: EducateTeacherComponent,
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
