import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducateTeacherRoutingModule } from './educate-teacher/educate-teacher-routing.module';
import { EducateTeacherModule } from './educate-teacher/educate-teacher.module';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SharedModule } from './shared/shared.module';
import { userReducer } from './user-store/reducers/user.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    EducateTeacherModule,
    EducateTeacherRoutingModule,
    NotFoundModule,
    NotFoundRoutingModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('user', userReducer),
    StoreDevtoolsModule.instrument({
      name: 'Educate Teacher App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
