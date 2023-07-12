import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducateTeacher } from './constants/educate-teacher.constant';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    // TODO: Change Below component to Home page of application
    component: LoginComponent,
  },
  {
    path: EducateTeacher.EDUCATE_TEACHER,
    loadChildren: () =>
      import('./educate-teacher/educate-teacher.module').then(
        (m) => m.EducateTeacherModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
