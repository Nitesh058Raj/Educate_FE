import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EducateTeacherComponent } from './educate-teacher.component';

@NgModule({
  declarations: [EducateTeacherComponent],
  imports: [CommonModule, SharedModule],
  exports: [EducateTeacherComponent],
})
export class EducateTeacherModule {}
