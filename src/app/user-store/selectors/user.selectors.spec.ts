import { getId, getSchoolId } from './user.selectors';

describe('User Selectors', () => {
  const userState = {
    loading: false,
    error: null,
    user: {
      userID: 1,
      username: 'exampleUser',
      role: 'teacher',
      id: 123,
      schoolID: 456,
    },
  };

  it('should select the user ID', () => {
    const selectedId = getId.projector(userState);
    expect(selectedId).toBe(123);
  });

  it('should select the school ID', () => {
    const selectedSchoolId = getSchoolId.projector(userState);
    expect(selectedSchoolId).toBe(456);
  });

  // Add more test cases here to cover different scenarios
});
