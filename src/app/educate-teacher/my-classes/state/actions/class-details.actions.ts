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

export const updateClassDetails = createAction(
  '[Class Details] Update Class Details',
  props<{
    classDetails: {
      classId: number | null;
      classDescription: string;
      className: string;
    };
  }>()
);

export const updateClassDetailsSuccess = createAction(
  '[Class Details] Update Class Details Success',
  props<{ classDetails: ClassDetailsInterface }>()
);

export const updateClassDetailsFailure = createAction(
  '[Class Details] Update Class Details Failure',
  props<{ error: string }>()
);
