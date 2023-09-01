import {
  ClassDetailsInterface,
  ClassInterface,
  ResourcesInterface,
} from 'src/app/models/common.model';
import * as AppState from '../../../store/app.state';

// strong Typing the state
// for lazy loading we need to extend the app state
export interface State extends AppState.State {
  myClasses: MyClassesState;
}

export interface MyClassesState {
  selectedClassId: number | null;
  displayComponent: boolean;
  classList: {
    loading: boolean;
    error: string | null;
    list: ClassInterface[] | null;
    popuperror: string | null;
  };
  classDetails: {
    loading: boolean;
    error: string | null;
    details: ClassDetailsInterface | null;
  };
  resources: {
    loading: boolean;
    error: string | null;
    list: ResourcesInterface[];
  };
}
