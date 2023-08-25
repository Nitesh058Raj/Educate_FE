import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MyClassesState } from '..';

// createFeatureSelector is used to get the slice(myClasses, assigment, dashbord, etc) of the state
const getMyClassesFeatureState =
  createFeatureSelector<MyClassesState>('myClasses');

// createSelector is used to get the data from the slice of the state
export const getClassDetails = createSelector(
  getMyClassesFeatureState,
  (state) => state.classDetails.details
);

export const getLoading = createSelector(
  getMyClassesFeatureState,
  (state) => state.classDetails.loading
);

export const getError = createSelector(
  getMyClassesFeatureState,
  (state) => state.classDetails.error
);
