import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnouncementsComponent } from './components/announcements/announcements.component';

@NgModule({
  declarations: [AnnouncementsComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnnouncementsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
