import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { EducateTeacherService } from '../../../services/educate-teacher.service';
import { ClassListActions } from '../actions';
import { MyClassesEffects } from './my-classes.effects';

describe('MyClassesEffects', () => {
  let actions$: Observable<any>;
  let effects: MyClassesEffects;
  let service: EducateTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyClassesEffects,
        provideMockActions(() => actions$),
        {
          provide: EducateTeacherService,
          useValue: {
            getClassList: () => of([]), // Replace with your actual response here
          },
        },
      ],
    });

    effects = TestBed.inject(MyClassesEffects);
    service = TestBed.inject(EducateTeacherService);
  });

  it('should dispatch Load Class List Success action on successful loadClassList', () => {
    const classList = [{ classID: 1, className: 'Class A' }];
    service.getClassList = () => of(classList);

    actions$ = hot('-a-|', { a: ClassListActions.loadClassList() });
    const expected = cold('-b-|', {
      b: ClassListActions.loadClassListSuccess({ classList }),
    });

    expect(effects.loadClassList$).toBeObservable(expected);
  });

  it('should dispatch Load Class List Failure action on failed loadClassList', () => {
    const error = 'An error occurred';
    service.getClassList = () => cold('#', {}, error);

    actions$ = hot('-a-|', { a: ClassListActions.loadClassList() });
    const expected = cold('-b-|', {
      b: ClassListActions.loadClassListFailure({ error }),
    });

    expect(effects.loadClassList$).toBeObservable(expected);
  });
});
