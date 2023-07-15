import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [FaqComponent, ContactDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [FaqComponent, ContactDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelpAndSupportsModule {}
