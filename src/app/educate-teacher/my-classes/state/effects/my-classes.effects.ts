import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { EducateTeacherService } from '../../../services/educate-teacher.service';
import {
  ClassDetailsActions,
  ClassListActions,
  ResourcesActions,
} from '../actions';

@Injectable()
export class MyClassesEffects {
  constructor(
    private actions$: Actions,
    private educateTeacherService: EducateTeacherService
  ) {}

  // Class List
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

  createCLass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassListActions.createClass),
      mergeMap(({ classData }) =>
        this.educateTeacherService.createNewClass(classData).pipe(
          mergeMap(() => [
            ClassListActions.createClassSuccess(),
            ClassListActions.loadClassList(),
          ]),
          catchError((err: string) =>
            of(ClassListActions.createClassFailure({ error: err }))
          )
        )
      )
    )
  );

  deleteClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassListActions.deleteClass),
      mergeMap(({ classId }) =>
        this.educateTeacherService.deleteClass(classId).pipe(
          mergeMap(() => [
            ClassListActions.deleteClassSuccess(),
            ClassListActions.loadClassList(),
          ]),
          catchError((err: string) =>
            of(ClassListActions.deleteClassFailure({ error: err }))
          )
        )
      )
    )
  );

  // Components
  loadComponents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassListActions.setCurrentClass),
      mergeMap(({ classId }) => [
        ClassDetailsActions.loadClassDetails({ classId: classId }),
        ResourcesActions.loadResources({ classId: classId }),
      ])
    )
  );

  // Class Details
  loadClassDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassDetailsActions.loadClassDetails),
      mergeMap(({ classId }) =>
        this.educateTeacherService.getClassDetails(classId).pipe(
          map((classDetails) =>
            ClassDetailsActions.loadClassDetailsSuccess({
              classDetails: classDetails[0],
            })
          ),
          catchError((err: string) =>
            of(ClassDetailsActions.loadClassDetailsFailure({ error: err }))
          )
        )
      )
    )
  );

  updateClassDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClassDetailsActions.updateClassDetails),
      mergeMap(({ classDetails }) =>
        this.educateTeacherService.updateClassDetails(classDetails).pipe(
          mergeMap(() => [
            ClassDetailsActions.updateClassDetailsSuccess({
              classDetails: classDetails,
            }),
            ClassListActions.loadClassList(),
          ]),
          catchError((err: string) =>
            of(ClassDetailsActions.updateClassDetailsFailure({ error: err }))
          )
        )
      )
    )
  );

  // Resources
  loadResources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResourcesActions.loadResources),
      mergeMap(({ classId }) =>
        this.educateTeacherService.getResources(classId).pipe(
          map((resources) =>
            ResourcesActions.loadResourcesSuccess({ resources: resources })
          ),
          catchError((err: string) =>
            of(ResourcesActions.loadResourcesFailure({ error: err }))
          )
        )
      )
    )
  );
}
