import { ClassDetailsActions } from '.';

describe('Class Details Actions', () => {
  it('should create Load Class Details action', () => {
    const action = ClassDetailsActions.loadClassDetails();
    expect(action.type).toBe('[Class Details] Load Class Details');
  });
});
