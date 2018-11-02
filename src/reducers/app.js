import { Actions } from '../constants';

const initialState = {
  initialized: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case Actions.APP_RESET: {
      return {
        ...initialState,
        initialized: true,
        loading: action.payload || false,
      };
    }

    case Actions.APP_LOADING: {
      return {
        ...state,
        loading: action.payload,
        error: initialState.error,
      };
    }

    case Actions.APP_SET: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
}