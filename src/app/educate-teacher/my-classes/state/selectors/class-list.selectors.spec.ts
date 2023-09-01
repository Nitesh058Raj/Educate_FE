import { ClassListSelectors } from '.';

describe('My Classes Selectors', () => {
  it('should return class list from the state', () => {
    const state = {
      myClasses: {
        classList: {
          list: [
            { classID: 1, className: 'Class A' },
            { classID: 2, className: 'Class B' },
          ],
          loading: false,
          error: null,
          popuperror: null,
        },
      },
    };

    const selectedClassList = ClassListSelectors.getClassList(state);

    expect(selectedClassList).toEqual([
      { classID: 1, className: 'Class A' },
      { classID: 2, className: 'Class B' },
    ]);
  });
});
