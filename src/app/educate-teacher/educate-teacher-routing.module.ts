import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducateTeacher } from '../constants/educate-teacher.constant';
import { EducateTeacherComponent } from './educate-teacher.component';

const childRoutes: Routes = [
  { path: '', redirectTo: EducateTeacher.EDUCATE_TEACHER, pathMatch: 'full' },
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
