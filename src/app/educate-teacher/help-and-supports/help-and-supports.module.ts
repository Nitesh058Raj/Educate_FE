import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@NgModule({
  declarations: [ContactDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContactDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelpAndSupportsModule {}
