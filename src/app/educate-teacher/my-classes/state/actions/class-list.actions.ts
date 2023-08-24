import { createAction, props } from '@ngrx/store';
import { ClassInterface } from 'src/app/models/common.model';

export const loadClassList = createAction('[Class List] Load Class List');

export const loadClassListSuccess = createAction(
  '[Class List] Load Class List Success',
  props<{ classList: ClassInterface[] }>()
);

export const setCurrentClass = createAction(
  '[Class List] Set Current Class',
  props<{ classId: number }>()
);

export const loadClassListFailure = createAction(
  '[Class List] Load Class List Failure',
  props<{ error: string }>()
);
