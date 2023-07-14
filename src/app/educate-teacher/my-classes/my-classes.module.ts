import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassListComponent } from './components/class-list/class-list.component';

@NgModule({
  declarations: [ClassListComponent, ClassDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClassListComponent, ClassDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
