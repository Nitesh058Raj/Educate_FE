import { ClassListActions } from '../actions';
import { myClassesReducer } from './my-classes.reducers';

describe('My Classes Reducer', () => {
  it('should set loading flag when loadClassList action is dispatched', () => {
    const initialState = {
      selectedClassId: null,
      displayComponent: false,
      classList: {
        loading: false,
        error: null,
        list: null,
        popuperror: null,
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
    const action = ClassListActions.loadClassList();

    const newState = myClassesReducer(initialState, action);

    expect(newState.classList.loading).toBeTrue();
    expect(newState.classList.error).toBeNull();
  });

  it('should update class list and clear loading flag on loadClassListSuccess', () => {
    const initialState = {
      selectedClassId: null,
      displayComponent: false,
      classList: {
        loading: false,
        error: null,
        list: null,
        popuperror: null,
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
    const classList = [{ classID: 1, className: 'Class A' }];
    const action = ClassListActions.loadClassListSuccess({ classList });

    const newState = myClassesReducer(initialState, action);

    expect(newState.classList.loading).toBeFalse();
    expect(newState.classList.list).toEqual(classList);
  });

  it('should update error and clear loading flag on loadClassListFailure', () => {
    const initialState = {
      selectedClassId: null,
      displayComponent: false,
      classList: {
        loading: false,
        error: null,
        list: null,
        popuperror: null,
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
    const error = 'An error occurred';
    const action = ClassListActions.loadClassListFailure({ error });

    const newState = myClassesReducer(initialState, action);

    expect(newState.displayComponent).toBeFalse();
    expect(newState.classList.loading).toBeFalse();
    expect(newState.classList.error).toEqual(error);
  });

  it('should update selectedClassId on setCurrentClass', () => {
    const initialState = {
      selectedClassId: null,
      displayComponent: false,
      classList: {
        loading: false,
        error: null,
        list: null,
        popuperror: null,
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
    const classId = 123;
    const action = ClassListActions.setCurrentClass({ classId });

    const newState = myClassesReducer(initialState, action);

    expect(newState.displayComponent).toBeTrue();
    expect(newState.selectedClassId).toEqual(classId);
  });
});
