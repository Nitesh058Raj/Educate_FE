import { ClassDetailsSelectors } from '.';

describe('ClassDetailsSelectors', () => {
  it('should return class details from the state', () => {
    const state = {
      myClasses: {
        classDetails: {
          details: {
            className: 'Class A',
            classDescription: 'Class A Description',
          },
          loading: false,
          error: null,
        },
      },
    };

    const selectedClassDetails = ClassDetailsSelectors.getClassDetails(state);

    expect(selectedClassDetails).toEqual({
      className: 'Class A',
      classDescription: 'Class A Description',
    });
  });
});
