import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { EducateTeacherService } from '../../../services/educate-teacher.service';
import { ClassListActions } from '../actions';

@Injectable()
export class MyClassesEffects {
  constructor(
    private actions$: Actions,
    private educateTeacherService: EducateTeacherService
  ) {}

  loadClassList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassListActions.loadClassList),
      concatMap(() =>
        this.educateTeacherService.getClassList().pipe(
          map((classList) =>
            ClassListActions.loadClassListSuccess({ classList: classList })
          ),
          catchError((err: string) =>
            of(ClassListActions.loadClassListFailure({ error: err }))
          )
        )
      )
    )
  );
}
