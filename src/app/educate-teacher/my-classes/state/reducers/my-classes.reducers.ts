import { createReducer, on } from '@ngrx/store';

import { MyClassesState } from '..';
import { ClassListActions } from '../actions';

// initial state
const initialState: MyClassesState = {
  selectedClassId: null,
  displayComponent: false,
  classList: {
    loading: false,
    error: null,
    list: null,
  },
  classDetails: {
    loading: false,
    error: null,
    details: null,
  },
  resources: {
    loading: false,
    error: null,
    list: [],
  },
};

// reducer
export const myClassesReducer = createReducer<MyClassesState>(
  initialState,
  on(ClassListActions.loadClassList, (state): MyClassesState => {
    return {
      ...state,
      classList: {
        ...state.classList,
        loading: true,
        error: null,
      },
    };
  }),
  on(ClassListActions.loadClassListSuccess, (state, action): MyClassesState => {
    return {
      ...state,
      classList: {
        ...state.classList,
        loading: false,
        list: action.classList,
      },
    };
  }),
  on(ClassListActions.loadClassListFailure, (state, action): MyClassesState => {
    return {
      ...state,
      displayComponent: false,
      classList: {
        list: null,
        loading: false,
        error: action.error,
      },
    };
  }),
  on(ClassListActions.setCurrentClass, (state, action): MyClassesState => {
    return {
      ...state,
      displayComponent: true,
      selectedClassId: action.classId,
    };
  })
);
