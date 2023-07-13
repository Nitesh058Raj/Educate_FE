import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardBodyStyleDirective } from './directives/CardStyle/card-body-style.directive';
import { CardHeaderStyleDirective } from './directives/CardStyle/card-header-style.directive';
import { CardStyleDirective } from './directives/CardStyle/card-style.directive';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    CardStyleDirective,
    CardHeaderStyleDirective,
    CardBodyStyleDirective,
  ],
  imports: [CommonModule],
  exports: [
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    CardStyleDirective,
    CardHeaderStyleDirective,
    CardBodyStyleDirective,
  ],
})
export class SharedModule {}
