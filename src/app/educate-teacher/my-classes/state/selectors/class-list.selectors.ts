import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MyClassesState } from '..';

// createFeatureSelector is used to get the slice(myClasses, assigment, dashbord, etc) of the state
const getMyClassesFeatureState =
  createFeatureSelector<MyClassesState>('myClasses');

// createSelector is used to get the data from the slice of the state
export const getClassList = createSelector(
  getMyClassesFeatureState,
  (state) => state.classList.list
);

export const getClassListError = createSelector(
  getMyClassesFeatureState,
  (state) => state.classList.error
);

export const getClassListLoading = createSelector(
  getMyClassesFeatureState,
  (state) => state.classList.loading
);

export const getCurrentClassId = createSelector(
  getMyClassesFeatureState,
  (state) => state.selectedClassId
);

export const getDisplayComponent = createSelector(
  getMyClassesFeatureState,
  (state) => state.displayComponent
);
