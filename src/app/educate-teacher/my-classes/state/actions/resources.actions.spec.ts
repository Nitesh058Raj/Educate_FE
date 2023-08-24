import { ResourcesActions } from '.';

describe('Resources Actions', () => {
  it('should create Load Resources action', () => {
    const action = ResourcesActions.loadResources();
    expect(action.type).toBe('[Resources] Load Resources');
  });
});
