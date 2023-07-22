import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginComponent } from './components/login/login.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardBodyStyleDirective } from './directives/CardStyle/card-body-style.directive';
import { CardHeaderStyleDirective } from './directives/CardStyle/card-header-style.directive';
import { CardStyleDirective } from './directives/CardStyle/card-style.directive';
import { ModalService } from './services/modal-service/modal.service';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    CardStyleDirective,
    CardHeaderStyleDirective,
    CardBodyStyleDirective,
    PopupModalComponent,
    CommonButtonComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule],
  providers: [ModalService],
  exports: [
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    CardStyleDirective,
    CardHeaderStyleDirective,
    CardBodyStyleDirective,
    PopupModalComponent,
    CommonButtonComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
