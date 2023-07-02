import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { EducateTeacherComponent } from './educate-teacher.component';

@NgModule({
  declarations: [EducateTeacherComponent, LoginComponent],
  imports: [CommonModule],
  exports: [EducateTeacherComponent],
})
export class EducateTeacherModule {}
