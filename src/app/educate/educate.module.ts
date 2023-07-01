import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EducateComponent } from './educate.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [EducateComponent, LoginComponent],
  imports: [CommonModule],
  exports: [EducateComponent],
})
export class EducateModule {}
