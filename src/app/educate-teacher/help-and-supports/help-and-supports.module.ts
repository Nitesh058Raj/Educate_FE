import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, SharedModule],
  exports: [FaqComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelpAndSupportsModule {}
