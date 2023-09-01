import { UserActions } from '../actions';
import { userReducer } from './user.reducers';

describe('User Reducer', () => {
  it('should set loading to true when loadUserInfo action is dispatched', () => {
    const initialState = {
      loading: false,
      error: null,
      user: {
        userID: 0,
        username: '',
        role: 'teacher',
        id: 1,
        schoolID: 1,
      },
    };

    const action = UserActions.loadUserInfo();
    const newState = userReducer(initialState, action);

    expect(newState.loading).toBe(true);
    expect(newState.error).toBe(null);
  });

  // Add more test cases here to cover different scenarios and actions
});
