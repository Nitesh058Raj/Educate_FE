import { createAction, props } from '@ngrx/store';
import { ResourcesInterface } from 'src/app/models/common.model';

export const loadResources = createAction(
  '[Resources] Load Resources',
  props<{ classId: number }>()
);

export const loadResourcesSuccess = createAction(
  '[Resources] Load Resources Success',
  props<{ resources: ResourcesInterface[] }>()
);

export const loadResourcesFailure = createAction(
  '[Resources] Load Resources Failure',
  props<{ error: string }>()
);
