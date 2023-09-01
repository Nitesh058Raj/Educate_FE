import { createAction, props } from '@ngrx/store';
import {
  ClassInterface,
  CreateClassDataInterface,
} from 'src/app/models/common.model';

export const loadClassList = createAction('[Class List] Load Class List');

export const loadClassListSuccess = createAction(
  '[Class List] Load Class List Success',
  props<{ classList: ClassInterface[] }>()
);

export const loadClassListFailure = createAction(
  '[Class List] Load Class List Failure',
  props<{ error: string }>()
);

export const setCurrentClass = createAction(
  '[Class List] Set Current Class',
  props<{ classId: number }>()
);

export const createClass = createAction(
  '[Class List] Create Class',
  props<{ classData: CreateClassDataInterface }>()
);

export const createClassSuccess = createAction(
  '[Class List] Create Class Success'
);

export const createClassFailure = createAction(
  '[Class List] Create Class Failure',
  props<{ error: string }>()
);

export const deleteClass = createAction(
  '[Class List] Delete Class',
  props<{ classId: number }>()
);

export const deleteClassSuccess = createAction(
  '[Class List] Delete Class Success'
);

export const deleteClassFailure = createAction(
  '[Class List] Delete Class Failure',
  props<{ error: string }>()
);
