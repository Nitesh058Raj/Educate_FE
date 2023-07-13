import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';

@NgModule({
  declarations: [AnnouncementsComponent, SchoolDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnnouncementsComponent, SchoolDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
