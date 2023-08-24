import { ClassListActions } from '.';

describe('Class List Actions', () => {
  it('should create Load Class List action', () => {
    const action = ClassListActions.loadClassList();
    expect(action.type).toBe('[Class List] Load Class List');
  });
});
