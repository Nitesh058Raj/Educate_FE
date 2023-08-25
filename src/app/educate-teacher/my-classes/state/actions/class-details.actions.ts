import { createAction, props } from '@ngrx/store';
import { ClassDetailsInterface } from 'src/app/models/common.model';

export const loadClassDetails = createAction(
  '[Class Details] Load Class Details',
  props<{ classId: number }>()
);

export const loadClassDetailsSuccess = createAction(
  '[Class Details] Load Class Details Success',
  props<{ classDetails: ClassDetailsInterface }>()
);

export const loadClassDetailsFailure = createAction(
  '[Class Details] Load Class Details Failure',
  props<{ error: string }>()
);
