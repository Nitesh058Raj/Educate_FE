import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [LoginComponent, HeaderComponent],
})
export class SharedModule {}
