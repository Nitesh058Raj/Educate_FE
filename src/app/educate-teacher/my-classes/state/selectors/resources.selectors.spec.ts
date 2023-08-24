import { ResourcesSelectors } from '.';

describe('Resources Selectors', () => {
  it('should return resources from the state', () => {
    const state = {
      myClasses: {
        resources: {
          list: [
            {
              resourceID: 1,
              resourceName: 'Resource A',
              classID: 1,
              resourceUrl: 'https://www.example1.com',
            },
            {
              resourceID: 2,
              resourceName: 'Resource B',
              classID: 2,
              resourceUrl: 'https://www.example2.com',
            },
          ],
          loading: false,
          error: null,
        },
      },
    };

    const selectedResources = ResourcesSelectors.getResources(state);

    expect(selectedResources).toEqual([
      {
        resourceID: 1,
        resourceName: 'Resource A',
        classID: 1,
        resourceUrl: 'https://www.example1.com',
      },
      {
        resourceID: 2,
        resourceName: 'Resource B',
        classID: 2,
        resourceUrl: 'https://www.example2.com',
      },
    ]);
  });
});
