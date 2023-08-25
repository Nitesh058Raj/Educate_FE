import { ClassDetailsInterface } from 'src/app/models/common.model';
import * as fromClassDetailsActions from './class-details.actions';

describe('Class Details Actions', () => {
  it('should create the loadClassDetails action', () => {
    const classId = 123;
    const action = fromClassDetailsActions.loadClassDetails({ classId });

    expect(action.type).toEqual('[Class Details] Load Class Details');
    expect(action.classId).toEqual(classId);
  });

  it('should create the loadClassDetailsSuccess action', () => {
    const classDetails: ClassDetailsInterface = {
      className: 'Class Name',
      classDescription: 'Class Description',
    };
    const action = fromClassDetailsActions.loadClassDetailsSuccess({
      classDetails,
    });

    expect(action.type).toEqual('[Class Details] Load Class Details Success');
    expect(action.classDetails).toEqual(classDetails);
  });

  it('should create the loadClassDetailsFailure action', () => {
    const error = 'An error occurred';
    const action = fromClassDetailsActions.loadClassDetailsFailure({ error });

    expect(action.type).toEqual('[Class Details] Load Class Details Failure');
    expect(action.error).toEqual(error);
  });
});
