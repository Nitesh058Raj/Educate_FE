import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EducateTeacherComponent } from './educate-teacher.component';
import { EducateTeacherRoutingModule } from './educate-teacher-routing.module';

@NgModule({
  declarations: [EducateTeacherComponent],
  imports: [EducateTeacherRoutingModule, CommonModule, SharedModule],
  exports: [EducateTeacherComponent],
})
export class EducateTeacherModule {}
