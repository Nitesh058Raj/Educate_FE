import { ResourcesInterface } from 'src/app/models/common.model';
import * as fromResourcesActions from './resources.actions';

describe('Resources Actions', () => {
  it('should create the loadResources action', () => {
    const classId = 123;
    const action = fromResourcesActions.loadResources({ classId });

    expect(action.type).toEqual('[Resources] Load Resources');
    expect(action.classId).toEqual(classId);
  });

  it('should create the loadResourcesSuccess action', () => {
    const resources: ResourcesInterface[] = [
      {
        classID: 123,
        resourceID: 456,
        resourceName: 'Resource Name',
        resourceUrl: 'Resource Link',
      },
    ];
    const action = fromResourcesActions.loadResourcesSuccess({ resources });

    expect(action.type).toEqual('[Resources] Load Resources Success');
    expect(action.resources).toEqual(resources);
  });

  it('should create the loadResourcesFailure action', () => {
    const error = 'An error occurred';
    const action = fromResourcesActions.loadResourcesFailure({ error });

    expect(action.type).toEqual('[Resources] Load Resources Failure');
    expect(action.error).toEqual(error);
  });
});
