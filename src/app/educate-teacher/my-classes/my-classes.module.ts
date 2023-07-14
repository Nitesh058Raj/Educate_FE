import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassDetailsComponent } from './components/class-details/class-details.component';

@NgModule({
  declarations: [ClassDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClassDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
