import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResourcesComponent } from './components/resources/resources.component';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [CommonModule, SharedModule],
  exports: [ResourcesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
