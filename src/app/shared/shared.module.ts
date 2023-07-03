import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LoginComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [LoginComponent, HeaderComponent, SidebarComponent],
})
export class SharedModule {}
