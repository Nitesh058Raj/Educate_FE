import { loadUserInfo } from './user.actions';

describe('User Actions', () => {
  describe('loadUserInfo', () => {
    it('should create an action to load user info', () => {
      const action = loadUserInfo();
      expect(action.type).toEqual('[User] Load User Info');
    });
  });
});
