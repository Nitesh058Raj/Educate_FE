import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducateTeacherRoutingModule } from './educate-teacher/educate-teacher-routing.module';
import { EducateTeacherModule } from './educate-teacher/educate-teacher.module';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EducateTeacherModule,
    EducateTeacherRoutingModule,
    NotFoundModule,
    NotFoundRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
