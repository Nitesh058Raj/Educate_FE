// initial User state

import { createReducer, on } from '@ngrx/store';
import { UserState } from '..';
import { UserActions } from '../actions';

const initialState: UserState = {
  loading: false,
  error: null,
  // TODO: make null user slice of state
  user: {
    userID: 0,
    username: '',
    role: 'teacher',
    id: 1,
    schoolID: 1,
  },
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.loadUserInfo, (state): UserState => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  })
);
