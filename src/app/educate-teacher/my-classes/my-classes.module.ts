import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassRosterComponent } from './components/class-roster/class-roster.component';

@NgModule({
  declarations: [ClassRosterComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClassRosterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
