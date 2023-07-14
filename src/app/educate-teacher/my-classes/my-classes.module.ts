import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResourcesComponent } from './components/resources/resources.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassListComponent } from './components/class-list/class-list.component';

@NgModule({
  declarations: [ClassListComponent, ClassDetailsComponent, ResourcesComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClassListComponent, ClassDetailsComponent, ResourcesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyClassesModule {}
