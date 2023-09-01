import { createReducer, on } from '@ngrx/store';

import { MyClassesState } from '..';
import {
  ClassDetailsActions,
  ClassListActions,
  ResourcesActions,
} from '../actions';

// initial state
const initialState: MyClassesState = {
  selectedClassId: null,
  displayComponent: false,
  classList: {
    loading: false,
    error: null,
    list: null,
  },
  classDetails: {
    loading: false,
    error: null,
    details: null,
  },
  resources: {
    loading: false,
    error: null,
    list: [],
    selectedResourceId: null,
  },
};

// reducer
export const myClassesReducer = createReducer<MyClassesState>(
  initialState,
  // Class List
  on(ClassListActions.loadClassList, (state): MyClassesState => {
    return {
      ...state,
      classList: {
        ...state.classList,
        loading: true,
        error: null,
      },
    };
  }),
  on(ClassListActions.loadClassListSuccess, (state, action): MyClassesState => {
    return {
      ...state,
      classList: {
        ...state.classList,
        loading: false,
        list: action.classList,
      },
    };
  }),
  on(ClassListActions.loadClassListFailure, (state, action): MyClassesState => {
    return {
      ...state,
      displayComponent: false,
      classList: {
        list: null,
        loading: false,
        error: action.error,
      },
    };
  }),
  on(ClassListActions.setCurrentClass, (state, action): MyClassesState => {
    return {
      ...state,
      displayComponent: true,
      selectedClassId: action.classId,
      classDetails: {
        ...state.classDetails,
        details: null,
        error: null,
      },
    };
  }),

  // Class Details
  on(ClassDetailsActions.loadClassDetails, (state): MyClassesState => {
    return {
      ...state,
      classDetails: {
        ...state.classDetails,
        loading: true,
        error: null,
      },
    };
  }),
  on(
    ClassDetailsActions.loadClassDetailsSuccess,
    (state, action): MyClassesState => {
      return {
        ...state,
        classDetails: {
          ...state.classDetails,
          loading: false,
          error: null,
          details: action.classDetails,
        },
      };
    }
  ),
  on(
    ClassDetailsActions.loadClassDetailsFailure,
    (state, action): MyClassesState => {
      return {
        ...state,
        classDetails: {
          details: null,
          loading: false,
          error: action.error,
        },
      };
    }
  ),
  on(ClassDetailsActions.updateClassDetails, (state): MyClassesState => {
    return {
      ...state,
      classDetails: {
        ...state.classDetails,
        error: null,
      },
    };
  }),
  on(
    ClassDetailsActions.updateClassDetailsSuccess,
    (state, action): MyClassesState => {
      return {
        ...state,
        classDetails: {
          ...state.classDetails,
          loading: false,
          details: action.classDetails,
        },
      };
    }
  ),
  on(
    ClassDetailsActions.updateClassDetailsFailure,
    (state, action): MyClassesState => {
      return {
        ...state,
        classDetails: {
          ...state.classDetails,
          loading: false,
          error: action.error,
        },
      };
    }
  ),

  // Resources
  on(ResourcesActions.loadResources, (state): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: true,
        error: null,
        selectedResourceId: null,
      },
    };
  }),
  on(ResourcesActions.loadResourcesSuccess, (state, action): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: false,
        list: action.resources,
      },
    };
  }),
  on(ResourcesActions.loadResourcesFailure, (state, action): MyClassesState => {
    return {
      ...state,
      resources: {
        list: [],
        loading: false,
        error: action.error,
        selectedResourceId: null,
      },
    };
  }),

  on(ResourcesActions.addResource, (state): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: true,
        error: null,
      },
    };
  }),
  on(ResourcesActions.addResourceSuccess, (state): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: false,
        error: null,
      },
    };
  }),
  on(ResourcesActions.addResourceFailure, (state, action): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: false,
        error: action.error,
      },
    };
  }),
  on(ResourcesActions.deleteResource, (state): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: true,
        error: null,
      },
    };
  }),
  on(ResourcesActions.deleteResourceSuccess, (state): MyClassesState => {
    return {
      ...state,
      resources: {
        ...state.resources,
        loading: false,
        error: null,
      },
    };
  }),
  on(
    ResourcesActions.deleteResourceFailure,
    (state, action): MyClassesState => {
      return {
        ...state,
        resources: {
          ...state.resources,
          loading: false,
          error: action.error,
        },
      };
    }
  ),
  on(
    ResourcesActions.setSelectedResourceId,
    (state, action): MyClassesState => {
      return {
        ...state,
        resources: {
          ...state.resources,
          selectedResourceId: action.resourceId,
        },
      };
    }
  )
);
