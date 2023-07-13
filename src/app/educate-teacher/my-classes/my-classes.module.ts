import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassListComponent } from './components/class-list/class-list.component';

@NgModule({
  declarations: [ClassListComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClassListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
