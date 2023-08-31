import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '..';

export const getUserState = createFeatureSelector<UserState>('user');

export const getId = createSelector(
  getUserState,
  (state: UserState) => state.user?.id
);

export const getSchoolId = createSelector(
  getUserState,
  (state: UserState) => state.user?.schoolID
);
