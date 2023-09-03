import { createAction, props } from '@ngrx/store';
import {
  ResourceCreateInterface,
  ResourcesInterface,
} from 'src/app/models/common.model';

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

export const addResource = createAction(
  '[Resources] Add Resource',
  props<{ resource: ResourceCreateInterface }>()
);

export const addResourceSuccess = createAction(
  '[Resources] Add Resource Success'
);

export const addResourceFailure = createAction(
  '[Resources] Add Resource Failure',
  props<{ error: string }>()
);

export const deleteResource = createAction(
  '[Resources] Delete Resource',
  props<{ resourceId: number; classId: number }>()
);

export const deleteResourceSuccess = createAction(
  '[Resources] Delete Resource Success'
);

export const deleteResourceFailure = createAction(
  '[Resources] Delete Resource Failure',
  props<{ error: string }>()
);

export const setSelectedResourceId = createAction(
  '[Resources] Set Selected Resource Id',
  props<{ resourceId: number }>()
);
